import Vue from 'vue'
// import VCharts from 'v-charts'
import "echarts/lib/component/visualMap";
import VePie from 'v-charts/lib/pie.common.js'
import VeMap from 'v-charts/lib/map.common.js'

// Vue.use(VCharts)
Vue.component(VePie.name, VePie)
Vue.component(VeMap.name, VeMap)