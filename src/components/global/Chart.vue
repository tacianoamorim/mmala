<script>

import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Radar,
  mixins: [reactiveProp],
 
  props: {
    options : {
          scales: {
            yAxes: [{
              ticks: {
                suggestedMin: 1,
                suggestedMax: 4,                  
                max: 4,
                min: 1,
                stepSize: 1,
                beginAtZero: false
              }
            }]
          }
        }
  },
  mounted () {

    console.log(" - -- -  - - - -  - -OPTIONS ---  - - -")
    console.log(this.options)
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}

</script>
