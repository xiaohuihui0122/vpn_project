<template>    
    <div class="container">
        <div class="sub-container">
            <img src="../../assets/imgs/login_bg2.jpg" alt="">
            <div class="login-wrapper">
                <div style="text-align:center;font-size:20px;line-height:3;font-weight:bold;">短信验证码登录</div>
                <div class="input-box-mobile">
                    <input v-model="phoneNum" lazy type="text" placeholder="请输入手机号" name="phone" maxlength="11" onkeyup="">
                </div>
                <div class="box-pwd">
                    <div style="display: inline-block;width: 60%;">
                        <input class="veriCode" name="captcha" placeholder="请输入图片验证码" type="text" onkeyup="" onafterpaste="" maxlength="4">
                    </div>
                    <img src="http://image.test.yoai.com/captcha?0.6590131738028531" class="veriCodeImg" alt="验证码图片">
                </div>
                <div class="verify-code">
                    <div style="display: inline-block;width: 60%;">
                        <input class="placeholder" number type="text" placeholder="请输入验证码" name="verifyCode" phone="phone" codetype="" maxlength="4" onkeyup="">
                    </div>   
                    <a  v-if="not_choose" href="javascript:void(0);" @click="get_code()">获取验证码</a>
                    <a  v-else href="javascript:void(0);">{{countDown}}s</a>    
                </div>
                <div style="text-align:left;padding-left:20px;box-sizing:border-box;">{{tip}}</div>
                <div class="btn-red">登录</div>
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
        tip:'',
    };
  },
  methods:{
    get_code:function(){
        // 手机号码验证
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!phoneReg.test(this.phoneNum)){
            this.tip = "请输入正确的手机号";
            return false;
        }
        // 验证码格式验证
        var codeReg = /[0-9]{4}/;
        if(!codeReg.test(this.phoneNum)){
            this.tip = "请输入正确的验证码";
            return false;
        }
        //验证码是否正确验证
        
        //验证通过，发送请求
        this.not_choose = false;
        this.tip = "验证码已发送至" + this.phoneNum + "，请注意查看";
        var code_timer = setInterval(()=>{
            this.countDown -= 1;
            if(this.countDown == 0){
                clearInterval(code_timer);
                this.not_choose = true;
                this.countDown = 60;
            }
        },100)
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
</style>
