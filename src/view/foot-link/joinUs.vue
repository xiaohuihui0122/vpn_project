<template>
 <div class="container">
    <img class="full-width" src="../../assets/imgs/join_us/01.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <img class="full-width" src="../../assets/imgs/join_us/02.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <img class="full-width" src="../../assets/imgs/join_us/03.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <img class="full-width" src="../../assets/imgs/join_us/04.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <img class="full-width para-content-bottom" src="../../assets/imgs/join_us/05.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <Footer></Footer>
 </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'JoinUs',
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
  .container .full-width{
    width:100%;
  }
  .container .para-content-bottom{
    margin-bottom:150px;
  }
 
</style>
