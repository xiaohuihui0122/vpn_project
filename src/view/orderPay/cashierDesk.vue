<template>
  <div>
    <div class="container">
      <div class="text-logo">
          <router-link to="/index/leaflets">
            <img src='../../assets/imgs/logo.gif' alt="有爱LOGO">
          </router-link>
      </div>
        <span class="cash-bar">收银台</span>
        <router-link class="header-icon-container" to="/index/myOrder">我的订单</router-link>
    </div>
    <div class="line"></div>
    <div class="orderBox">
      <div>
        <span>订单提交成功，请您尽快付款！订单号：{{1810100340031775}}</span>
        <span>应付金额：<span class="pay">￥{{0.01}}</span></span>
      </div>
      <div>请选择支付方式:</div>
      <div>
        <span class="weixin-pay"></span>
        <span class="alipay"></span>
        <p>请点击选择需要使用的支付方式，尽快完成支付！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashierDesk",
  data() {
    return {
      
    };
  },
  components: {}
};
</script>

<style scoped>
  .container{width:1170px;/*no*/height:100px;/*no*/margin:0 auto;}
  .text-logo{height: 100%;float: left;}
  .text-logo img{height:100%;}
  .cash-bar{width:80px;/*no*/height:100px;/*no*/line-height: 100px;/*no*/font-size: 28px;/*no*/margin:0 auto;font-weight: 500;}
  .header-icon-container{display:block;cursor:pointer;font-size: 16px;/*no*/float:right;margin-top:33.5px;/*no*/width:144px;/*no*/height:33px;/*no*/color:#d40614;border:1px solid #d40614;/*no*/text-align:center;line-height:33px;/*no*/border-radius: 3px;/*no*/}
  .header-icon-container:hover{color:#d40614;}
  .line{width:100%;height:1px;border-bottom: 2px solid #e5e5e5;}
  .orderBox{border:1px solid red;width:1170px;/*no*/margin:0 auto;font-size:16px;/*no*/text-align: left;}
  .orderBox div span{height:48px;line-height: 48px;font-size:20px;/*no*/}
  .orderBox div span:nth-child(2){float:right;color:#d40614;font-size:16px;/*no*/}
  .pay{font-size:18px;/*no*/}
  .orderBox div:nth-child(2){width:100%;margin-top:50px;/*no*/padding-bottom: 10px;/*no*/border-bottom: 1px solid #e1e1e1;/*no*/margin-bottom: 50px;/*no*/}
  .orderBox div span.weixin-pay{float:left;display:inline-block;width: 156px;/*no*/height: 49px !important;/*no*/background: url(../../assets/imgs/orderPay/weixin_pay.jpg) no-repeat;background-size: 100% 100%;}
  .orderBox div span.alipay{float:left;width: 156px;/*no*/height: 49px !important;/*no*/background: url(../../assets/imgs/orderPay/zfb_pay.jpg) no-repeat;background-size: 100% 100%;margin-right: 25px;/*no*/}
</style>
