<template>
 <div class="container">
  <div class="h1-title">隐私保护</div>
  <div class="h3-title">隐私保护政策</div>
  <div class="para-content">
    “有爱医学”向用户提供HPV基因检测服务。在提供服务的过程中，有爱医学可能会收集和使用用户的个人信息以及检测结果，这些行为涉及用户重大个人隐私。有爱医学高度重视用户的隐私保护。并通过本《隐私保护政策》向用户说明，在使用服务时，如何收集、使用、储存用户的保密信息，以及为用户提供访问、更新、控制和保护保密信息的方式。本文件与用户所使用的服务息息相关，请用户仔细阅读。如用户对本文件或隐私保护相关事宜有任何问题，请联系客服（客服电话：400-919-2020）。用户继续使用服务，即视为同意按照本文件收集、使用、储存和分享用户的保密信息。
  </div>
  <div class="h3-title">第一条 收集、使用用户信息的范围</div>
  <div class="para-content">
    1.1 提供服务时，可能会收集、储存和使用一系列与用户有关的信息。如果用户不提供相关信息，可能无法绑定样本或无法享受全部或部分服务，或者无法达到相关服务拟达到的效果。<br><br>
    1.2 可能收集、储存和使用的用户信息包括：<br>
    <p>─&ensp;“绑定信息”是用户样本绑定时提供的关于用户的相关信息。（例如姓名，电话，身份证件号，地址，用户ID和密码以及付款信息等）</p>
    <p>─&ensp;“检测信息”是经取样器采集的宫颈脱落样本中所携带的高危型HPV基因信息。</p>
    <p>─&ensp;“报告信息”是有爱医学根据用户HPV基因检测结果所生成的检测报告中包含的所有信息（包括高危型HPV检测结果，医疗及健康管理建议等。）</p>
  </div>
  <div class="h3-title">第二条 使用用户信息的方式和规范</div>
  <div class="para-content">
    2.1 可能将在向用户提供服务的过程之中所收集的信息用作下列用途：
    <p>─&ensp;向用户提供服务，包括可能将用户数据用于HPV基因检测的数据挖掘，用于用户的检测报告的更新和推送；</p>
    <p>─&ensp;在提供服务时，用于身份验证、用户服务、安全防范、诈骗监测、存档和备份用途，确保提供服务的安全性；</p>
    <p>─&ensp;更加了解用户如何接入和使用服务，从而针对性地回应用户的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对用户做出其他方面的回应；</p>
    <br>
    2.2为解读服务的一部分，有爱医学将获得、保存、处理和分析用户的检测样本和经分析产生的相关信息。除非获得当事人授权或根据国家相关法律要求，有爱医学承诺不向任何人或组织转移与用户身份信息直接关联的检测样本和相关信息。根据后续服务和相关研究的需要，有爱医学将有选择地保存和处理用户的检测样本和经分析产生的相关信息。除非针对用户本人服务的需要，检测样本和经分析产生的相关信息将与用户个人信息完全分离。<br><br>
    2.3有爱医学将尽一切可能采取适当的技术手段，保证用户可以访问、更新和更正自己的样本绑定信息或使用服务时提供或形成的其他个人信息。在访问、更新、更正和删除前述信息时，可能会要求用户进行身份验证，以保障信息安全。
  </div>
  <div class="h3-title">第三条 保密义务</div>
  <div class="para-content">
    3.1有爱医学承诺，除上述第二条所列的用途外，不得向任何第三方透露用户保密信息。<br><br>
    3.2除非获得当事人授权或根据国家相关法律要求。有爱医学将运用严格成熟的系统安全技术保护用户的保密信息的安全。但请用户理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。用户需要了解，用户接入服务所用的系统和通讯网络，有可能因可控范围外的因素而出现问题。
  </div>
  <div class="h3-title">第四条 其他</div>
  <div class="para-content para-content-bottom">
    有爱医学可能适时修订本文件的条款，修订后的内容构成本文件的一部分。如修订造成用户在本文件项下权利的实质减少，将在修订生效前通过在主页上显著位置提示或向用户发送电子邮件或以其他方式通知用户。在该种情况下，若用户继续使用服务，即表示同意受经修订的本文件的约束。
  </div>
  <Footer></Footer>
 </div>
</template>

<script>
 import Footer from '../../components/footer.vue'

 export default {
   name:'Privacy',
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
    text-align:left;
    margin:0 auto;
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
  .container .para-content-bottom{
    margin-bottom:150px;
  }
  
</style>
