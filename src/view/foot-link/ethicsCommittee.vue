<template>
  <div class="container no-padding">
    <div class="h1-title">生命伦理委员会</div>
    <div class="h3-title">关于有爱医学伦理委员会</div>
    <p class="hello">
  “有爱医学”生命伦理委员会于2018年成立，旨在规范伦理审查工作，确保HPV基因检测的科学性，同时保障检测者的隐私、安全和权益。<br><br>
  目前共有5位委员，包括伦理学、法学、医学、生物学、社会学方面的专家及社区代表,其中内部委员2人，外部委员3人。“有爱医学”生命伦理委员会的主要职责包括两方面：<br><br>
    </p>
    <div class="h3-title">伦理委员会主要职责</div>
    <div class="h4-title">建立和完善伦理委员会的工作规章制度</div>
    <div class="para-content">
      有爱医学坚持三点原则：<br>
      ● 科学技术研究和发展以保证人类的平等为基础；<br>
      ● 在以人为对象的科学研究中，保护个人受试者的利益、个人隐私及信息安全；<br>
      ● 绝不将研究结果应用于不符合人类社会伦理道德的范畴。<br><br>
      基于这些原则在发展过程中不断建立和完善相关工作制度，规范项目审查流程和章程，
保证项目审查工作的有序进行。<br>
    </div>
    <div class="h4-title">项目审查与审批制度</div>
    <div class="para-content para-content-bottom">
      伦理委员会结合项目的研究方向和实验风险，对医学检验服务进行审查。<br>
      根据每个委员的专业特点或者工作职责评审项目，定期召开会议，组织专项讨论。<br><br>
      审查以投票的方式进行表决，并采取一票否决的方式。<br>
      若有不同意见，委员们将进行充分讨论，以争取所有委员的意见达成一致。<br>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'EthicsCommittee',
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
    margin:0 auto;
    text-align: left;
  }
  .h1-title{
  text-align:center;
  font-size:40px;
  font-weight:bold;
  line-height:3;
  }
  .h2-title{
    font-size:36px;
    font-weight:bold;
    line-height:2;
  }
  .h3-title{
    font-size:30px;
    line-height:2;
    font-weight:bold;
    margin-top: 50px;
  }
  .h4-title{
    font-size:26px;
    line-height:2;
    font-weight:bold;
    margin-top: 50px;
  }
  .para-content{
    font-size:22px;
    letter-spacing:0.18em;
    line-height:2;
    color:#686868;
  }
  .para-content p{
    /*text-indent: -1.2em;*/
    margin-left: 1.6em;
  }
  .hello{
    color:black;
    font-size:22px;
    letter-spacing:0.18em;
    line-height:2;
  }
  .container .para-content-bottom{
    margin-bottom:150px;
  }
 
</style>
