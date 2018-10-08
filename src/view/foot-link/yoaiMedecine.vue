<template>
 <div>
    <img class="full-width" src="../../assets/imgs/about/yayx.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <img class="full-width" src="../../assets/imgs/about/yasm.jpg" alt="有爱医学 HPV检测服务" title="有爱医学 HPV检测服务">
    <Footer></Footer>
 </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'YoaiMedecine',
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
  .full-width{
    width:100%;
    display: block;
  }
 
</style>
