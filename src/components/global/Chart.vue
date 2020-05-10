<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'Março', 'Abril', 'Junho'],
      datasets: [
        {
          label: 'Chart01',
          data: [1, 2, 3, 4]
        },
        {
          label: 'Chart02',
          color: '#F7C331',
          data: [1, 2, 3, 4]
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