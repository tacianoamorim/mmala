<template>
  <div id="app">
    <section class="navbar secMMALA " style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>Make this self-assessment and discover the maturity 
            level of your Institution regarding Learning Analytics adoption.
          </h1>
        </div>
        <div id="divA">
            <img src="../assets/img/checklist.png" height="400" width="400">
        </div>
      </div>
    </section>
    <section>
     <div class="container">
      <form @submit.prevent="submit">
        <div class="row">
          <div class="col-md-12">
            <h3>Inform your Higher Education Institution and your 
                position at this Institution (not required):
            </h3>
          </div>
        </div>  
        <div class="row">
          <div class="col-md-12">
            <i>(All the provided information will be kept confidential, 
              and it will be used only for academic publications. Higher Education 
              Institution and your position will not be disclosed)
            </i>
          </div>
        </div>  
        <div class="form-group row">
          <label for="institutionName:" class="col-sm-2 col-form-label"><b>Institution name</b></label>
          <div class="col-sm-10">
            <input type="text" class="form-control" maxlength="100" v-model="institutionName"  
              id="institutionName" value="">
          </div>
        </div>
        <div class="form-group row">
          <label for="yourPosition" class="col-sm-2 col-form-label"><b>Your position</b></label>
          <div class="col-sm-10">
            <input type="text" class="form-control" maxlength="100" v-model="yourPosition" 
              id="yourPosition" value="">
          </div>
        </div>        
        <div class="row">
          <div class="col-md-12">
            <i>At what level of quality does your Institution perform the following activities?</i>
          </div>
        </div>

        <div class="row" v-for="(entity) in cCategories" :key="entity" >
          <LayoutFormCategories :category="entity" 
            :values="valuesSelected" :idx="idxValue"/>      
        </div>

        <div class="row buttonSubmit">
          <div class="col-md-12">
            <input type="submit" value="Submit" class="btn btn-success btn-lg">  
          </div>
        </div>
      </form>
    </div>
  </section>    
</div>
</template>

<script>

import router from '../router'
import db from '../firebase'
import LayoutFormCategories from '../components/layout/LayoutFormCategories'

export default {
  name: "app",
  components: {
    LayoutFormCategories
  },   
  data: () => ({
    institutionName: String,
    yourPosition: String,
    cCategories: [],
    processAreas: [],

    idxValue: 0,

    idsArray: [],
    valArray: [],
    values: String,
    labels: String,
    colors: String,
    categories: String,

  }),
  created() {
    this.institutionName= ""
    this.yourPosition= ""
    this.valuesSelected= []
    this.idxValue= 0
    this.getData()
  },  
  methods: {
    getIndex() {
      return ++this.index
    },
    getIndexAtual() {
      return this.index
    }, 
    getData() {
      let self = this
     
      /**
       * BUSCAR OS DADOS 
       */
      db.collection("categories").orderBy("order").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            var category= doc.data();
            self.cCategories.push(category);
        });
      });
//      console.log("Categories: ")
//      console.log(self.cCategories)

      self.processAreas= []
      db.collection("processAreas")
      .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var procArea= doc.data();
          self.processAreas.push(procArea);
        });
      });      
    },   
    submit() {

      let self= this

      if ( this.institutionName == "" ) {
        this.institutionName = 'Não informado'
      }
      if ( this.yourPosition == "" ) {
        this.yourPosition = 'Não informado'
      }     

      let radios = document.forms[0];
      var selectedOptions = "";
      let idx;
      for (idx = 0; idx < radios.length; idx++) {
        if (radios[idx].checked) {
          selectedOptions = selectedOptions +"|"+ radios[idx].value;
        }
      }

      selectedOptions= selectedOptions
        .substring(1, selectedOptions.length)
      let arraySelectedOptions= []
      arraySelectedOptions= selectedOptions.split("|")
      if ( arraySelectedOptions.length != self.processAreas.length ) {
        self.$swal({
          title: 'Enter your level for each process area',
          type: 'warning',
          showCloseButton: false
        });
        return
      }

      //Preparação dos dados
      self.values= ""
      self.labels= ""
      self.colors= ""
      self.ids   = ""
      self.categories= ""

      let ind= 0; 

      for(idx= 0; idx < arraySelectedOptions.length; idx++) {
        let registro= [];
        //"DM_DA:#008000:4:Data Acquisition:Data Management"
        registro= arraySelectedOptions[idx].split(":");
        self.values= self.values +";"+ registro[2]
        self.labels= self.labels +";"+ registro[3]  
        self.colors= self.colors +";"+ registro[1]   
        self.categories= self.categories +";"+ registro[4]  
        self.idsArray[ind]  = registro[0]    
        self.valArray[ind++]= registro[2]
      }

      self.values= self.values.substring(1, self.values.length)
      self.labels= self.labels.substring(1, self.labels.length)
      self.colors= self.colors.substring(1, self.colors.length)
      self.categories= self.categories.substring(1, self.categories.length)
      // Create array of values for save in database
      let x;
      let aItems= [];
      for (x = 0; x < self.idsArray.length; x++) {
        aItems[x] =  self.idsArray[x] +":"+ self.valArray[x];          
      }      

      // date register
      // Add a new document in collection "cities"
      var d = new Date();
      db.collection("answers").add({
          institutionName: self.institutionName,
          yourPosition: self.yourPosition,
          items: aItems,
          date: (d.getMonth()+1) +"/"+ d.getDate() +"/"+ d.getFullYear() 
      })
      .then(function() {
        // Prepara os dados para exibicao
        //console.log(this.institutionName)
        //console.log(this.categories)
        router.push({ name: 'graphic', params: { 
          pLabels: self.labels, 
          pValues: self.values,
          pInstitution: self.institutionName, 
          pYourPosition: self.yourPosition,
          pColors: self.colors,
          pCategories: self.categories
        } }) 
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });      
    },
  }
}

</script>

<style scoped>  
h1 {
  padding-bottom: 20px;
  text-align: justify;
}
h4 {
  padding-top: 20px;
  text-align: justify;
  font-weight: lighter;
}
span {
  font-weight: bolder;
  font-size: 1rem;
}

.title {
  text-align: center;
  padding: 20px;  
}

.align {
  text-align: justify;
}

i {
  font-size: 1rem;
  font-weight: bolder;
}

table {
  text-align: left;
}

th {
  font-size: small;
  text-align: left;
}

td {
  text-align: center;
}

.titleTD {
  text-align: left;
}

.buttonSubmit {
  padding-bottom: 30px;
}

thead {
    background-color: #F7C331!important;
    color: white !important;
}

</style>