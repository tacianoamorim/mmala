<template>
  <div>
       <h1> Chartcontainer</h1>
       <h3> {{pLabels}}</h3>
       <h3> {{pValues}}</h3>
      <div class="chart">
        <chart :chart-data="datacollection"/>
      </div>
  </div>
</template>

<script>
import Chart from './Chart.vue'

export default {
  name: 'ChartContainer',
  components: { 
    Chart 
  },
  data: () => ({
    datacollection: null
  }),
  props: {
    pLabels: String, 
    pValues: String,
    pInstitution: String
  },  

  async mounted () {
    console.log("Chart mounted")
    console.log("-----------------ChartContainer---------------------")
    console.log(this.pLabels)
    console.log(this.pValues)
    console.log(this.pInstitution)
    console.log("--------------------------------------------")
    this.fillData ()
  },
     methods: {
      fillData () {
        this.datacollection = {
          labels: this.pLabels.split(","),
          datasets: [
            {
              label: this.pInstitution,
              borderColor: '#f87979',
              borderWidth: 1,
              data: this.pValues.split(","),
            }
          ]
        }
      }
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