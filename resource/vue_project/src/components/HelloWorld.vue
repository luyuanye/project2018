<template>
  <div class="hello">
    <mt-header fixed title="鲜花网管理后台"></mt-header>
  

    <PartB/>
    <PartCA/>
   
   
   
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
import PartA from "./PartA.vue"
import PartB from "./PartB.vue"
import PartCA from "./PartCA.vue"
export default {
	components:{
		PartA,
		PartB,
		PartCA
	},
  data () {
    return {
    	selected:"外卖",
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
