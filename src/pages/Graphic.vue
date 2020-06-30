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
      <VueApexCharts type="radar" width="100%"
        :options="options" 
        :series="series">
      </VueApexCharts>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button v-for="(category, i) in getCategories()" :key="'A'+i"
          type="button" class="btn btn-dark" 
          :style="getColor(i)">
          {{category}}
        </button>
      </div>
       
      <div style="text-align: center; margin-bottom: 30px">
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
    pColors: String,
    pCategories: String,
    pInstitution: String,
    pYourPosition: String
  },  
  data: function() {
/*    console.log("data()")
    console.log( this.pInstitution )
    console.log( this.pYourPosition )
    console.log( this.pLabels )
    console.log( this.pValues )
    console.log( this.pColors )
*/
    let aColors= this.pColors.split(";");
    let discretes= [aColors.length];

    let ind;
    for (ind = 0; ind < aColors.length; ind++) {
      var disc= 
        {
          seriesIndex: 0,
          dataPointIndex: ind,
          fillColor: aColors[ind],
          strokeColor: aColors[ind],
          size: 4
        } ;   
      discretes[ind]= disc;
    }

    return {
      series: [{
        name: 'Maturity level',
        data: this.pValues.split(";")
      }],
      options: {
        title: {
          text: this.pInstitution,
          align: 'center',
          offsetY: 10,
          style: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
            fontSize:  '22px',
            color:  '#6B7A8F'
          },
        },
        subtitle: {
            text: this.pYourPosition,
            align: 'center',
            offsetY: 45,
            style: {
              fontSize: '18px',
              fontWeight: 'normal',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color:  '#9699a2'
            },
        },        
        markers: {
          strokeColors: '#fff',
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 3,
          fillOpacity: 1,
          discrete: discretes,
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
          height: '700px',
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
      },
      noData: {
        text: "No data",
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '28px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      }
    }
  },  
  methods: {
    newSearch() {
      router.push({ name: 'form' })
    },
    getCategories() {
      //console.log(this.getArrayWithoutRepetition(this.pCategories))
      return this.getArrayWithoutRepetition(this.pCategories)
    },      
    getColor: function (idx) {
      let aColors= this.getArrayWithoutRepetition(this.pColors)
      return "background-color: "+ aColors[idx]+"; color:#FFF"
    },
    getArrayWithoutRepetition: function (text) {
      //console.log(text)
      let x
      let idx= 0
      let aReturn= []
      let aValue= []
      let entitySel= ""

      aValue= text.split(";")
      //console.log(aValue)
      for (x = 0; x < aValue.length; x++) {
        //console.log( entitySel +"!="+ aValue[x] )
        if ( entitySel != aValue[x] ) {
          aReturn[idx++] =  aValue[x];  
          entitySel= aValue[x]    
        }   
      }      
      return aReturn
    },
  }
}
</script>

<style scoped>
.divButton {
  margin-top: 30px;
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
