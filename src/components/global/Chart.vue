<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
data: () => ({
    chartdata: {
      labels: ['January', 'February', 'Março', 'Abril', 'Junho'],
      datasets: [
        {
          label: 'Data One',
          data: [40, 20, 30, 50,80]
        },
        {
          label: 'Data dois',
          color: '#F7C331',
          data: [10, 60, 90, 20, 85]
        }        
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>