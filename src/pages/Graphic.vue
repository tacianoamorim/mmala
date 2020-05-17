<template>
  <div id="grafico">
    <section>
     <div class="container">
      <div class="row align">
        <chart-container
            :pLabels="pLabels"
            :pValues="pValues"
            :pInstitution="pInstitution"/>
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
    pLabels: String, 
    pValues: String,
    pInstitution: String
  },  
  methods: {
    newSearch() {
      console("pLabels: " + this.pLabels)
      console("pValues  : " + this.pValues)
      router.push({ name: 'form' })
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
