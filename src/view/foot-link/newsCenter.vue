<template>
 <div class="container">
    <router-link to="/index/newsOne">
      <img src="" alt="">
      有爱医学出席西普会，首次推出医学检验服务新零售全新模式
    </router-link>
    <router-link to="/index/newsTwo">
      <img src="" alt="">
      有爱医学任用：通过医学改变人类生活这个事业是我的初心
    </router-link>
    <router-link to="/index/newsThree">
      <img src="" alt="">
      有爱医学走进猎聘网易、OFO小黄车，呼吁公众提高健康意识
    </router-link>
    <router-link to="/index/newsFour">
      <img src="" alt="">
      有爱医学于清华大学开启健康传播创意大赛，倡导健康理念
    </router-link>
    <router-link to="/index/newsFive">
      <img src="" alt="">
      有爱医学在清华大学设立有爱医学健康传播奖学金
    </router-link>
    <router-link to="/index/newsSix">
      <img src="" alt="">
      有爱医学为女性健康保驾护航，HPV基因检测服务预防宫颈癌
    </router-link>
    <router-link to="/index/newsSeven">
      <img src="" alt="">
      有爱医学宫颈癌早筛产品上市，深耕互联网医疗服务领域
    </router-link>
    <router-link to="/index/newsEight" class="para-content-bottom">
      <img src="" alt="">
      有爱医学走进清华大学开展宫颈癌预防知识讲座
    </router-link>

    <Footer></Footer>
 </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'NewsCenter',
   data () {
     return {

     }
   },
   components: {
     Footer,
   }
 }
</script>

<style scoped>
  .container{
    width:1170px;/*no*/
    margin: 0 auto;
  }
  .container a{
    display:block;
    width: 100%;
    height:400px;
    text-decoration: none;
    color:#333;
    font-size: 26px;/*no*/
    line-height: 400px;
    border:1px solid red;
  }
  .container a:hover{
    text-decoration: none;
    color:#333;
  }
  .container a img{
    position:absolute;
    top:0;
    left:0;
    width:100%;

  }
  .container .para-content-bottom{
    margin-bottom:150px;
  }
 
</style>
