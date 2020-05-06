<template>

  <div id="grafico">
    <section>
     <div class="container">
      <div class="row align">
        <chart-container
            :chartdata="chartdata"
            :options="options"/>
      </div>  
      <button type="button" @click="newSearch()" class="btn btn-success btn-lg">New search</button>
    </div>
  </section>          
</div>
</template>

<script>

import ChartContainer from '../components/global/ChartContainer'
import router from '../router'

export default {
  name: "grafico",
  components: {
    ChartContainer
  },
  props: {
    id: String
  },  
  data: () => ({
    chartdata: [40, 20, 30, 50,80],
    options: ['January', 'February', 'Março', 'Abril', 'Junho']
  }),  
  methods: {
    newSearch() {
      router.push({ name: 'Formulario' })
    }    
  }
}
</script>

<style scoped>
section {
    margin-top: 50px;
    margin-bottom: 70px;
    text-align: center;
}
.align {
  margin: 0 auto;
  width: 50%;
  margin-bottom: 10px;
}
</style>
