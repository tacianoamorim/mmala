<template>
  <div id="app">
    <section class="navbar secMMALA " style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>Graphic result</h1>
        </div>
        <div id="divA">
            <img src="../assets/img/checklist.png" height="400" width="400">
        </div>
      </div>
    </section>      
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
