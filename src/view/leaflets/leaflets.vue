<template>
 <div class="container">
    <div class="ban_cont">
      <img src="../../assets/imgs/leaflets/ban1.jpg" alt="">
      <router-link to="/" class="ban1-word">了解新技术如何更便捷的保障你的健康</router-link>
    </div>
    <div class="ban_cont">
      <img src="../../assets/imgs/leaflets/ban2.jpg" alt="">
    </div>
    <div class="ban_cont ban_cont2">
      <img src="../../assets/imgs/leaflets/ban3.jpg" alt="">
      <el-button type="text" @click="dialogVisible = true">观看有爱医学HPV基因检测视频</el-button>
    </div>
    <div class="ban_cont ban_cont3">
      <img src="../../assets/imgs/leaflets/ban4.jpg" alt="">
      <div>
        <router-link to="/">性病检测智能导诊</router-link>
        <span>推荐适合你的性病检测服务</span>
        <router-link to="/">了解更多</router-link>
      </div>
    </div>
    <div class="ban_cont ban_cont1">
      <img src="../../assets/imgs/leaflets/ban5.jpg" alt="">
    </div>

    <!-- 视频播放 -->
    <!-- <div class="modal-body">
      <img src="../../assets/imgs/view_error.jpg" alt="FEMME非秘导管式棉条-YOAI有爱" title="FEMME非秘导管式棉条-YOAI有爱" style="position:fixed;left:20000px;">
      <video v-if="play" controls="controls" preload="meta" width="100%" style="width:100%;" src="http://v.yoai.com/yoaimedicine_hpv_kepu.mp4 " type="video/mp4" errorimg="/static/images/view_error_327e8db.jpg" onerror="setTimeout(function(){video_failed.bind(this)(event);},2000)"></video>
    </div> -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="1150px"
      :show-close="true"
      :lock-scroll="false"
      @open="handleOpen"
      >
        <video v-if="play" autoplay="autoplay" controls="controls" preload="meta" width="100%" height="100%" style="width:100%;" src="http://v.yoai.com/yoaimedicine_hpv_kepu.mp4 " type="video/mp4" errorimg="/static/images/view_error_327e8db.jpg" onerror="setTimeout(function(){video_failed.bind(this)(event);},2000)"></video>
    </el-dialog>
    <Footer></Footer>
 </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'Leaflets',
   data () {
     return {
      dialogVisible:false,
      play:true,

     }
   },
   methods:{
     handleOpen:function(){
      
     }
   },
   components: {
     Footer,

   }
 }
</script>

<style scoped>
  .container{position:relative;}
  .ban_cont{width: 100%;position:relative;padding:0;height:auto;margin:0;}
  .ban_cont img{width:100%;display:block;}
  .ban1-word{position:absolute;top:70%;left:24.6%;color:#d40614;font-size:20px;/*no*/font-weight:500;text-decoration:underline;}
  .ban_cont1{width:1170px;/*no*/margin:0 auto;}
  .ban_cont1 img{width:100%;}
  .modal-body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
  video{width:100%;height:100%}
  .modal-body{width:1150px;height:647px;}
  .ban_cont2 button{position:absolute;top:55%;left:54.5%;color:#d40614;font-size:20px;/*no*/font-weight:500;text-decoration:underline;}
  .ban_cont3 div{position:absolute;top:55%;left:34.5%;width:350px;height:347px;}
  .ban_cont3 div{font-size:20px;/*no*/color:#fff;}
  .ban_cont3 div a,.ban_cont3 div span,.ban_cont3 div button{float:right;margin-top:10px;}
  .ban_cont3 div a{font-size:24px;/*no*/text-align:right;color:#d40614;text-decoration:underline;}
  .ban_cont3 div a:last-child{margin-top:50px;display:block;width: 220px;height:60px;text-align:center;line-height:60px;font-size:16px;/*no*/background-color:#d40614;color:#fff;text-decoration: none;letter-spacing: 5px;cursor: pointer;}
</style>


