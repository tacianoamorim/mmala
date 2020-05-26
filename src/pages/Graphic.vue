<template>
  <div id="app">
    <section class="navbar secMMALA " style="height: 40vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>Graphic result</h1>
        </div>
        <div id="divA1">
            <img src="../assets/img/graphic.png" height="200" width="200">
        </div>
      </div>
    </section>      
    <section>
     <div class="container alignGraphic">
      <div class="row align">
        <chart-container
            :pLabels="pLabels"
            :pValues="pValues"
            :pInstitution="pInstitution"/>

        <div class="divButton">
          <button type="button" @click="newSearch()" 
            class="btn btn-success btn-lg">New search</button>
        </div>            
      </div> 
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
      //console.log("pLabels: " + this.pLabels)
      //console.log("pValues  : " + this.pValues)
      router.push({ name: 'form' })
    }    
  }
}
</script>

<style scoped>
.divButton {
  width: 100%;
  text-align: right;
  margin: 30px;
}
.alignGraphic {
  margin-top: 30px;
  margin-left: -56px;  
}

.align {
  margin: 0 auto;
  width: 50%;
  margin-bottom: 10px;
}
h1 {
  padding-top: 30px;
  padding-bottom: 20px;  
  font-size: 40px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: center; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;  
}


#divA1{
  position: relative;
  border-width:2px;
  width: 400px;
  left:0px;
  float: left;
}
</style>
