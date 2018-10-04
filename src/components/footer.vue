<template>
 <div class="container">
    <div class="sub-cont">
        这是一个Footer标签
        <ul>
            <li>选购及了解</li>
            <li><router-link to="">宫颈癌筛查</router-link></li>
            <li><router-link to="">性病检测</router-link></li>
        </ul>
        <ul>
            <li>帮助中心</li>
            <li><router-link to="">常见问题</router-link></li>
            <li><router-link to="">隐私保护</router-link></li>
            <li><router-link to="">服务协议</router-link></li>
        </ul>
        <ul>
            <li>关于我们</li>
            <li><router-link to="">有爱医学</router-link></li>
            <li><router-link to="">新闻中心</router-link></li>
            <li><router-link to="">加入我们</router-link></li>
            <li><router-link to="">加入我们</router-link></li>
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
</style>
