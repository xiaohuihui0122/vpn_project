<template>
 <div class="container">
    <div class="sub-cont">
<<<<<<< HEAD
=======
        这是一个改变过的Footer标签
>>>>>>> 1289a2035b614a12f69c08045b29fe2330956433
        <ul>
            <li>选购及了解</li>
            <li><router-link to="/index/vpnScreen">宫颈癌筛查</router-link></li>
            <li><router-link to="/index/xbTest">性病检测</router-link></li>
        </ul>
        <ul>
            <li>帮助中心</li>
            <li><router-link to="/index/faq">常见问题</router-link></li>
            <li><router-link to="/index/privacy">隐私保护</router-link></li>
            <li><router-link to="/index/rule">服务协议</router-link></li>
        </ul>
        <ul>
            <li>关于我们</li>
            <li><router-link to="/index/yoaiMedecine">有爱医学</router-link></li>
            <li><router-link to="/index/newsCenter">新闻中心</router-link></li>
            <li><router-link to="/index/joinUs">加入我们</router-link></li>
            <li><router-link to="/index/ethicsCommittee">伦理委员会</router-link></li>
        </ul>
        <ul>
            <li>联系我们</li>
            <li>客服邮箱：service@yoai.com</li>
            <li>客服电话：400-919-2020</li>
            <li>服务时间：8:00~22:00</li>
            <li>商务合作：partner@yoai.com</li>
        </ul> 
        <div>
            <img src="../assets/imgs/leaflets/yoai_wx.jpg" alt="">
        </div>
    </div> 
    <div class="bottom-cont">
        @有爱医学京ICP备15202634号-1
    </div>
 </div>
</template>

<script>
 export default {
   name:'Footer',
   data () {
     return {
        
     }
   },
   components: {

   }
 }
</script>

<style scoped>
    .container{width:100%;height:346px;}
    .sub-cont{width:1170px;/*no*/margin:0 auto;margin-top:30px;height:250px;position:relative;}
    .container ul{float:left;width:17%;height:250px;} 
    .container ul li{display:inline-block;height:48px;width:100%;line-height:48px;font-size:14px;/*no*/text-align:left;}
    .container ul li a{text-decoration:none;color:#333;}
    .sub-cont div{width:110px;height:150px;float:right;}
    .sub-cont div img{width:100%;height:100%;}
    .container ul li:nth-child(1){font-size:16px;/*no*/font-weight:bold;}
    .container ul:nth-child(4){float:left;width:25%;height:250px;} 
    .bottom-cont{text-align:center;margin-top:50px;}
</style>
