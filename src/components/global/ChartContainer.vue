<template>
            <div class="chart">
                <line-chart v-if="loaded"
                :chartdata="chartdata" :options="options"/>
            </div>



</template>

<script>
import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { 
      LineChart 
  },
  data: () => ({
    loaded: false,
    chartdata: [10, 20, 30, 40],
    options: ['January', 'February', 'Março', 'Abril', 'Junho']
  }),
  async mounted () {
    console.log("Chart mounted")
    this.loaded = true

  }
}
</script>

<style scoped>
.containerChart {
    background-color: cornsilk !important;
}
.chart {
    background-color: cornsilk !important;    
}
</style>