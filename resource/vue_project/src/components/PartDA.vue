<style scoped>
  .echart_demo{
  	width:100%;
  	height:450px;
  	border:0px solid #3074BD;
  	margin-top:100px;
  }
</style>
<template>
  <div>
    <div class="echart_demo" id="echart_demo"></div>
  </div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data(){
			return{
				
			}
		},
		mounted(){
			this.initChart()
		},
		methods:{
			
    initChart() {
      this.chart = echarts.init(document.getElementById("echart_demo"))
      const xData = (function() {
        const data = []
        for (let i = 1; i < 13; i++) {
          data.push(i + '月份')
        }
        return data
      }())
      this.chart.setOption( {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    color:['#58B7FF','#20A0FF','#1D8CE0','#58B7FF','#20A0FF','#1D8CE0','#58B7FF','#20A0FF','#1D8CE0','#00ff00'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
})
    }
  
		}
	}
</script>
