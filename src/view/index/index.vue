<template>
 <div>
    <HeaderNav></HeaderNav>
    <router-view></router-view>
 </div>
</template>

<script>
import HeaderNav from '../../components/header_nav.vue'


 export default {
   name: 'Index',
   data () {
     return {

     }
   },
   components: {
     HeaderNav,
   }
 }
</script>

<style scoped>

 
</style>
