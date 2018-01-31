<template>
  <div>
  	<mt-header fixed title="鲜花网管理后台"></mt-header>
  
    <mt-tabbar v-model="selected">
     <mt-tab-item id="外卖">
      <img slot="icon" src="../assets/logo.png">
       <router-link :to="{ path: '/'}" replace>外卖</router-link>
     </mt-tab-item>
     <mt-tab-item id="订单">
     <img slot="icon" src="../assets/logo.png">
      <router-link :to="{ path: '/abcc'}" replace>订单</router-link>
     </mt-tab-item>
     <mt-tab-item id="发现">
     <img slot="icon" src="../assets/logo.png">
      <router-link :to="{ path: '/abcd'}" replace> 发现</router-link>
     </mt-tab-item>
     <mt-tab-item id="我的">
     <img slot="icon" src="../assets/logo.png">
      <router-link :to="{ path: '/abce'}" replace>我的</router-link>
     </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>
import PartEA from "./PartEA.vue"
export default {
	components:{
		PartEA
	},
  data () {
    return {
    	selected:"我的"

    }
  }
}
</script>
<style scoped>
	
</style>
