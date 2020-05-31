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
     <div class="container">
        <div style="margin: 30px;">
          <VueApexCharts type="radar" width="100%" 
            :options="options" 
            :series="series">
          </VueApexCharts>
        </div>
      </div>         
     <div class="container">        
        <button type="button" @click="newSearch()" 
          class="btn btn-success btn-lg divButton">New search</button>
      </div> 
  </section>          
</div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
import router from '../router'

export default {
  name: "grafico",
  components: {
    VueApexCharts
  },
  props: {
    pLabels: String, 
    pValues: String,
    pInstitution: String 
  },  
  data: function() {
    return {
      series: [{
        name: 'Maturity',
        data: this.pValues.split(";")
      }],
      options: {
        title: {
          text: this.pInstitution,
          align: 'center',
          style: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
            fontSize:  '28px',
            color:  '#6B7A8F'              
          },
        },
        markers: {
          strokeColors: '#fff',
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 3,
          fillOpacity: 1,
          discrete: [{
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: '#e3e3e3',
            strokeColor: '#fff',
            size: 5
          },{
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#e3e3e3',
            strokeColor: '#fff',
            size: 5
          }],
        },        
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
        },
        chart: {
          type: 'radar',
          id: 'graphic-radar',
          height: 700,
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }          
        },
        xaxis: {
          categories: this.pLabels.split(";"),
          labels: {
            show: true,
            style: {
              colors: ["#a8a8a8"],
              fontSize: "12px",
              fontFamily: 'Arial'
            }
          }
        },
        yaxis: {
          show: true,
          showAlways: true,
          showForNullSeries: true,
          seriesName: undefined,
          opposite: false,
          reversed: false,
          logarithmic: false,
          tickAmount: 4,
          min: 0,
          max: 4,
          forceNiceScale: false,
          floating: false,
          decimalsInFloat: undefined,  
          labels: {
            show: true,
            style: {
              colors: ["#a8a8a8"],
              fontSize: "16px",
              fontFamily: 'Arial'
            }
          }              
        }        
      }
    }
  },  
  methods: {
    newSearch() {
      router.push({ name: 'form' })
    }    
  }
}
</script>

<style scoped>
.divButton {
  margin-bottom: 30px;
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
