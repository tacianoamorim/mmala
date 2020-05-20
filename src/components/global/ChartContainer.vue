<template>
  <div>
      <div class="chart">
        <chart :chart-data="datacollection" :width="900" :height="900" />
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
/*    console.log("Chart mounted")
    console.log("-----------------ChartContainer---------------------")
    console.log(this.pLabels)
    console.log(this.pValues)
    console.log(this.pInstitution)
    console.log("--------------------------------------------") */
    this.fillData ()
  },
     methods: {
      fillData () {
        this.datacollection = {
          labels: this.pLabels.split(";"),
          datasets: [
            {
              label: this.pInstitution,
              borderColor: '#000',
              borderWidth: 1,
              data: this.pValues.split(";"),
              backgroundColor: 'transparent',
              pointBackgroundColor:[ '#fff'],
            }
          ],
          scales: {
              ticks: {
                max: 4,
                min: 0,
                stepSize: 1,
                suggestedMin: 0,
                suggestedMax: 4,
                showLabelBackdrop: true                
              }
          }          
/*          scales: {
            yAxes: [{
                ticks: {
                  stepSize: 1,
                  maxTicksLimit: 5,
                  suggestedMin: 50,
                  suggestedMax: 100                  
                }
            }] 
          }  */     
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