<template>    
    <div class="container">
        <div class="sub-container">
            <img src="../../assets/imgs/login_bg2.jpg" alt="">
            <div class="login-wrapper">
                <div style="text-align:center;font-size:20px;line-height:3;font-weight:bold;">短信验证码登录</div>
                <div class="input-box-mobile">
                    <input v-model.trim="phoneNum" lazy  :class="{error: isPhoneError}" @focus="removePhoneError" type="text" placeholder="请输入手机号" name="phone" maxlength="11" onkeyup="">
                </div>
                <div class="box-pwd">
                    <div style="display: inline-block;width: 60%;">
                        <input v-model.trim="captchaCode" :class="['veriCode',{error: isCodeError}]" @focus="removeCodeError" name="captcha" placeholder="请输入图片验证码" type="text" onkeyup="" maxlength="4">
                    </div>
                    <img :src="verifyCodeSrc" class="veriCodeImg" alt="验证码图片" @click = "changeCodeImg($event)">
                </div>
                <div class="verify-code">
                    <div style="display: inline-block;width: 60%;">
                        <input class="placeholder" v-model.trim="verifyCode" placeholder="请输入验证码" name="verifyCode" type="text" codetype="" maxlength="4" onkeyup="">
                    </div>   
                    <a  v-if="not_choose" href="javascript:void(0);" @click="get_code()">获取验证码</a>
                    <a  v-else href="javascript:void(0);">{{countDown}}s</a>    
                </div>
                <div style="text-align:left;padding-left:20px;box-sizing:border-box;">{{tip}}</div>
                <div class="btn-red" @click="login()">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        not_choose:true,
        countDown:60,
        phoneNum:'',
        captchaCode:'',//图片验证码
        verifyCode:'',
        tip:'',
        verifyCodeSrc: "http://image.test.yoai.com/captcha?0.6590131738028535",
        isPhoneError:false,//报错样式
        isCodeError:false,//报错样式
        //验证码数据
        ajaxCall:'',
    };
  },
  methods:{
    changeCodeImg:function(e){
        var myUrl = e.target.src;
        var newUrl = "http://image.test.yoai.com/captcha?"+Math.random();
        this.verifyCodeSrc = newUrl;
    },
    removePhoneError:function(){
        this.isPhoneError = false;
        this.tip = '';
    },
    removeCodeError:function(){
        this.isCodeError = false;
        this.tip = '';
    },
    getVerifyCode:function(){
        this.$http.post('/api/verify/get_param', {
                        phone: this.phoneNum,
                    })
                    .then((param) => {
                        var obj = param.data;
                        var ajaxCall = obj.askurl + "?callback=?&captcha=" + this.captchaCode;
                        this.ajaxCall = ajaxCall;
                        this.$http.get(ajaxCall, {
                            askData:obj.askData
                        })
                        .then(function (d) {
                            // console.log(d);
                            if(d.code == 210001){//验证图片不一致
                                    // 参数为空
                                    console.log(d.code)
                                    this.tip = '获取验证码出错，请稍后再试！'
                            }else if(d.code){
                                    // 非法签名
                                    console.log(d.reason);
                                    this.tip = '获取验证码出错，请稍后再试！'
                            }else{//验证图片一致，成功获取验证码
                                this.not_choose = false;
                                this.tip = "验证码已发送至" + this.phoneNum + "，请注意查看";//是否有验证码时效性？？
                                var code_timer = setInterval(()=>{
                                    this.countDown -= 1;
                                    if(this.countDown == 0){
                                        clearInterval(code_timer);
                                        this.not_choose = true;
                                        this.countDown = 60;
                                    }
                                },100)
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        })
                    .catch(function (error) {
                        console.log(error);
                    });
    },
    get_code:function(){
        // 手机号码验证
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!phoneReg.test(this.phoneNum)){
            this.tip = "请输入正确的手机号";
            this.isPhoneError = true;
            return false;
        }
        // 验证码格式验证
        var codeReg = /[0-9]{4}/;
        if(!codeReg.test(this.captchaCode)){
            this.tip = "图片验证码错误";
            this.isCodeError = true;
            return false;
        }
        //验证图片是否正确验证+发送短信
        this.getVerifyCode();
    },
    login:function(){
        //================登录============//
            this.$bus.emit('go-login');

        //================登录============//
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!phoneReg.test(this.phoneNum)){
            this.tip = "请输入正确的手机号";
            this.isPhoneError = true;
            return false;
        }
        // 验证码格式验证
        var codeReg = /[0-9]{4}/;
        if(!codeReg.test(this.captchaCode)){
            this.tip = "图片验证码错误";
            this.isCodeError = true;
            return false;
        }
        if(!codeReg.test(this.verifyCode)){
            this.tip = '请输入4位数字短信验证码';
            return false;
        }else{
            this.tip = '';
            // 发送请求登录
            this.$http.post('/api/verify/get_jsonp_param', {
                        "phone":this.phoneNum,
                        "mode":"verifycode_login",
                        "verifyCode":this.verifyCode,
                    })
                    .then(function (result) {
                        console.log(result);
                        if(result && result.success){
                        this.$http.post('/api/'+ajaxCall, {
                            askData:result.data.askData
                        })
                        .then(function (d) {
                            console.log(d);
                            if(d.code != 0){
                                this.tip = d.errorMsg;
                            }else{
                                // 3.sso登录成功,返回本应用进行登录                             
                                this.$http.post('/api/'+result.okurl, {
                                        replyTxt:d.data,returnUrl:"$!{returnURL}"//后台                   
                                    })
                                    .then(function (e) {
                                        //isRegister: "2"
                                        //returl: "http://test.medicine.yoai.com"
                                        if (e.returl == "/error") {
                                            this.tip = '验证失败，解析错误';
                                        } else {
                                            this.$router.push({path:e.returl});//不能出现跨域请求。直接从根路径后面开始，注意slice处理
                                            this.$router.push({path:"/"});
                                            //开始进入登录环境,传参给nav导航组件(待做)
                                            
                                        }
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        }
                    })
                    .catch(function (error) {
                        this.tip = '验证码错误，请检查网络或者重试';
                    });
        }


        

    }
  },
  components: {}
};
</script>

<style scoped>
    .container{background-color:#f9f9f9;}
    .sub-container{width:1170px;/*no*/margin:0 auto;}
    .login-wrapper{position: absolute;left: 55%;top:250px;letter-spacing: 1px;/*no*/box-shadow: 0 5px 15px #999;/*no*/border-top: 2px solid #666666;/*no*/width:344px;/*no*/height: auto;background: #fff;}
    .input-box-mobile,.box-pwd,.verify-code{position:relative;height: 50px;/*no*/width:80%;margin:0 auto;margin-top: 15px;padding: 0 15px;background: #fff;position: relative;}
    .input-box-mobile input{font-size:16px;/*no*/line-height: 16px;/*no*/width: 100%;position: absolute; left: 0; top: 0; box-sizing:border-box;padding: 9px 15px;z-index: 3;border: #d2d2d2 1px solid; height: 48px;/*no*/ color: #a0a0a0;background: transparent;}
    .box-pwd input,.verify-code input{font-size:16px;/*no*/line-height: 16px;/*no*/width: 60%;position: absolute; left: 0; top: 0; box-sizing:border-box;padding: 9px 15px;z-index: 3;border: #d2d2d2 1px solid; height: 48px;/*no*/ color: #a0a0a0;background: transparent;}
    .box-pwd img{font-size:16px;/*no*/width: 40%;position: absolute; right: 0; top: 0; box-sizing:border-box;padding: 9px 15px;z-index: 3;border: #d2d2d2 1px solid; height: 48px;/*no*/ color: #a0a0a0;background: transparent;}
    .verify-code a{display:block;font-size:16px;/*no*/line-height: 40px;/*no*/width: 40%;position: absolute; right: 0; top: 0; box-sizing:border-box;padding: 9px 15px;z-index: 3;border: #d2d2d2 1px solid; height: 48px;/*no*/ color: #fff;background: #d40614;box-sizing: border-box;}
    .verify-code a:hover{text-decoration: none;cursor: pointer;}
    .verify-code{margin-top: 28px !important;/*no*/}
    .btn-red{color:#fff;background: #d40614;text-align: center;vertical-align: middle;border-radius: 3px;}
    .btn-red{margin-top:30px !important;margin-bottom:40px !important;width:86%;margin:0 auto;height:50px;/*no*/font-size:16px;/*no*/line-height: 50px;/*no*/letter-spacing: 10px;cursor: pointer;}
    .login-wrapper div:nth-child(5){font-size:16px;color:#d40614;/*no*/line-height: 30px;/*no*/margin-top:20px !important;border:1px solid red;width:86%;height:30px;/*no*/margin:0 auto;}
    input:focus{outline:1px solid#a9cfda;}
    .input-box-mobile .error{border: 1px solid #d40614;}
    .box-pwd input.error{border: 1px solid #d40614;}
</style>
