<template>
  <div class="box">
    <div class="container">
      <div class="text-logo">
        <router-link to="/index/leaflets">
          <img src='../assets/imgs/logo.gif' alt="有爱LOGO">
        </router-link>
      </div>
      <nav id="navX" :style="'width:'+navWidth">
        <ul>
          <li v-for="(item, index) in navItems" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)" @click="handleClick(index)">
            <router-link :to="item.href">{{item.text}}</router-link>
          </li>
        </ul>
        <div class="indicator" v-show="mouseHover" v-bind:style="{left:lineLeft}"></div>
      </nav>
      <router-link v-if="isLogin" class="header-icon-container" to="/index/myOrder">退出登录</router-link>
      <router-link v-if="isLogin" class="header-icon-container" to="/index/myOrder">我的订单</router-link>
      <router-link v-else class="header-icon-container" to="/index/login">登录</router-link>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
 export default {
   name: 'HeaderNav',
   data () {
     return {
       isLogin:false,
       navWidth:'70%',//我的订单60%
       navItems:[
         {text:'宫颈癌筛查',href:'/index/hpvScreen',lineLeft:'0'},
         {text:'性病检测',href:'/index/xbTest',lineLeft:'25%'},
         {text:'医学教室',href:'/index/classroom',lineLeft:'50%'},
         {text:'了解自采样',href:'/index/know',lineLeft:'75%'}
       ],
       lineLeft:"",
       mouseHover:false,
     }
   },
   methods: {
      enter: function(index){
        this.mouseHover = true;
        this.lineLeft = this.navItems[index].lineLeft;
      },
      leave: function(index){
        this.activeRoute();
      },
      handleClick(index){
        //路由监听控制当前所在的路由样式
        this.lineleft = this.navItems[index].lineLeft;
        this.mouseHover = true;
      },
      loginMode:function(){
        this.isLogin = true;
        this.navWidth = '60%';
        this.$router.push({path:'/'});
      },
      // 路由检测
      activeRoute:function(){
        //  获得当前路由，激活当前路由样式
        var route  = this.$route;
        if(route.name == 'HpvScreen'){//5种
          this.mouseHover = true;
          this.lineLeft = '0';
        }else if(route.name == 'XbTest'){
          this.mouseHover = true;
          this.lineLeft = '25%';
        }else if(route.name == 'Classroom'){
          this.mouseHover = true;
          this.lineLeft = '50%';
        }else if(route.name == 'Know'){
          this.mouseHover = true;
          this.lineLeft = '70%';
        }else{
          this.mouseHover = false;
        }
      }
    },
   components: {

   },
   created() {
   this.activeRoute();
    //  页面初始化状态
    this.$bus.on('go-login', this.loginMode);
    // 看是否从session，localStorage或者发请求从cookie里面存数据获取（最起码刷新一遍页面不至于退出登录）

  },
  mounted(){
     
  }
 }
</script>

<style scoped> 
  a:hover{text-decoration:none;color:#333;}
  /* .box{width:100%;height:100px;background-color:transparent;position:absolute;z-index:1000;} */
  .box{width:100%;height:100px;/*no*/position:relative;}
  .container{width:1170px;/*no*/height:100px;margin:0 auto;}
  .text-logo{width: 15%;height:100px;float:left;}
  #navX{height:100px;/*no*/float:left;position:relative;}
  #navX ul{margin:0 auto;height:99px;/*no*/}
  #navX ul li{width:25%;height:90px;/*no*/line-height:100px;/*no*/float:left;font-size: 16px;/*no*/text-align:center;text-decoration:none;}
  #navX ul li a{display:inline-block;width:100%;height:100%;color:#333;}
  .header-icon-container{display:block;cursor:pointer;float:right;margin-top:33.5px;/*no*/width:144px;/*no*/height:33px;/*no*/color:#d40614;border:1px solid #d40614;/*no*/text-align:center;line-height:33px;/*no*/border-radius: 3px;/*no*/}
  .header-icon-container:hover{color:#d40614;}
  .text-logo{clear:both;}
  .line{width:100%;height:1px;border-bottom: 2px solid #e5e5e5;bottom:0;position:absolute;z-index: 1000;}
  .indicator{position:absolute;left:0;width:25%;height:1px;border-bottom:2px solid #d40614;/*no*/transition:left 0.5s;z-index: 999;}
  nav ul li a.router-link-active{text-decoration: none;}
</style>
