<template>
  <div>
  <div class="outter">  
  <mt-swipe :auto="4000">
  <mt-swipe-item class="a">
  	VUE
  </mt-swipe-item>
  <mt-swipe-item  class="b">
  	mint-ui
  </mt-swipe-item>
  <mt-swipe-item  class="c">
  	echarts
  </mt-swipe-item>
  </mt-swipe>  
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	
    }
  }
}
</script>
<style scoped>
	.outter{
		width:100%;
		height:200px;
		background-color:#f2f2f2;
		margin-top:40px;
	}
	.a{
		background-color: green;
		color:#ffffff;
		font-size:68px;
		line-height:200px;
	}
	.b{
		background-color: blue;
		color:#ffffff;
		font-size:68px;
		line-height:200px;
	}
	.c{
		background-color: darkorange;
		color:#ffffff;
		font-size:68px;
		line-height:200px;
	}
</style>
