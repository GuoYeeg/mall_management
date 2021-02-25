<template>
  <div class="statdata">
    <div class="op">
      <div class="op_l">
        <el-radio-group v-model="statType" @change="changeData">
          <el-radio-button label="sale_">销量</el-radio-button>
          <el-radio-button label="_money">销售额</el-radio-button>
      </el-radio-group>
      </div>
      <div class="op_r">
        <el-select v-model="selectday" placeholder="请选择" @change="changeData">
          <el-option
            v-for="item in dataDays"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <ve-pie :data="chartData" :extend="pieExtendOp"/>
    <hr style="background-color:rgb(223, 215, 215);">
    <p class="title">全国销量分布图</p>
    <ve-map :data="mapData" :extend="mapExtendOp"/>
  </div>
</template>
 
<script>
import {GetStatApi} from '@/request/api'
export default {
  name: 'Statdata',
  data () {
    return {
      msg:'Welcome to your vueName',
      statType:'sale_',
      selectday:'yesterday',
      dataDays:[
        {
          value:'yesterday',
          label:'昨天'
        },
        {
          value:'today',
          label:'今天'
        },

        {
          value:'three_days',
          label:'三天前'
        },
        {
          value:'seven_days',
          label:'七天前'
        },
        {
          value:'fourteen_days',
          label:'十四天前'
        },
      ],
      mapExtendOp:{
        legend:{show:false},
        tooltip:{
          formatter:'{b}<br/>销量：{c}'
        },
        visualMap:{
          type:'continuous',
          min: 0,
          max: 1000000,
          range:[0,1000000],
          calculable:true
        },
        series:{
          type:'map',
          aspectScale:0.85,
          zoom:1.2,
          showLegendSymbol:false,
          label:{show:false},
          emphasis:{
            label:{show:false},
            itemStyle:{areaColor:'#6E72C2'}
          } ,
          itemStyle:{borderColor:'#fff'}

        },

      },
      mapData: {

      },
      pieExtendOp:{
        legend:{
          top:20,
          right:30,
          width:300,
          height:100,
          orient:'vertical',
          itemGap:15
        },
        series:{
          type:'pie',
          center:['30%','40%'],
          radius:['30%','60%']
        }
      },
      chartData: {
      },
      totalStatData:{
      }
    }
  },
  created(){
    GetStatApi().then((res)=>{
      console.log(res);
      this.totalStatData=res.data
      this.chartData={
        columns: ['name', 'sale_yesterday'],
        rows: res.data.salePie
      },
      this.mapData={
        columns: ['areaName', 'saleNum'],
        rows: res.data.saleMap
      }
    })
  },
  methods:{
    switchData(dataFlag){
      this.chartData.columns=['name',dataFlag]
    },
    changeData(){
      if(this.statType=='sale_'){
        this.switchData(this.statType+this.selectday)
      } else{
        this.switchData(this.selectday+this.statType)
      }
    }
  }
}
</script>
 
<style scoped lang = "less">
.statdata{
  padding: 10px 30px;
  text-align: center;
  .title{
    display: block !important;
    margin: 0 auto !important;
    font-size: 18px;
    margin-top: 10px !important;
  }
  .op{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}

</style>