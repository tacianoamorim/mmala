<template>
    <div id="app">
    <section class="navbar secMMALA" style="height: 50vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>MMALA Categories</h1>
        </div>
        <div id="divA1">
            <img src="../assets/img/modelCategories.png" height="180" width="155">
        </div>
      </div>
      <div style="align-center: center">
        <ul class="list-group list-group-horizontal">
            <li v-for="(category, i) in categories" :key="'A'+i" :id="category.id+'C'+i" 
                class="list-group-item">
                <button type="button" class="btn btn-link"
                    @click="categoryUpdate(category.id)">
                    {{category.description}}
                </button>
            </li>
        </ul>        
      </div>
    </section>       
    <div class="container" style="margin-top: 30px;margin-bottom: 30px;" id="printable">
      <div class="row">
          <div class="col-3" style="text-align: left, margin-left: -14px;">
              <h3>Process Areas</h3>
              <div class="list-group" id="list-tab" role="tablist">
                  <a v-for="(processArea, i) in processAreas" :key="'A'+i" 
                      :class="`list-group-item list-group-item-action ${getActive(i)}`"
                      :id="'list-PA'+i" 
                      data-toggle="list" :href="'#list-L'+i" 
                      role="tab" aria-controls="home">
                      {{ processArea.description }}
                  </a>   
              </div>
          </div>
          <div class="col-9">
              <div class="tab-content" id="nav-tabContent">
                  <div v-for="(processArea, i) in processAreas" :key="processArea" 
                    :class="`tab-pane fade ${getActivePainel(i)}`" 
                    :id="'list-L'+i" 
                    role="tabpanel" :aria-labelledby="'list-PA'+i" >
                    <LayoutProcessArea :processAera="processArea" :category="categorySel" />     
                  </div>
                </div>
          </div>
          <div v-if="processAreas.length == 0" class="alert alert-info" role="alert">
              Category without connected process area
          </div>
      </div>   
    </div>
  </div>
</template>

<script>
import '../../node_modules/bootstrap/dist/js/bootstrap'
import LayoutProcessArea from '../components/layout/LayoutProcessArea'
import db from '../firebase'

export default {
  name: "nodel",
  components: {
    LayoutProcessArea
  },   
  data: () => ({
    categories: [],
    categorySel: Object,
    processAreas: [],
    processAreaSel: []
  }),
  props: {
    categoryId: String
  },
  created() {
    //console.log("* Created() -> Category: " + this.category)
    this.getData()
  },  
  methods: {
    getActive: function (index) {
      if (index == 0) 
        return "active" 
      else
        return "" 
    },
    getActivePainel: function (index) {
      if (index == 0) 
        return "show active" 
      else
        return "" 
    },    
    getData() {
      //this.$root.$emit('Spinner::show')
      let self = this
      this.categories= []
      this.processAreas= []
      
      // get categories
      db.collection("categories").orderBy("order").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            self.categories.push(doc.data());
            //category selected in page load
            if ( self.categoryId == doc.data().id ) {
              self.categorySel= doc.data();
            }
        });
      });

      // get process areas
      self.processAreas= []
      db.collection("processAreas").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            //category selected in page load
            if ( doc.data().category == self.categorySel.id ) {
              self.processAreas.push(doc.data());
              self.processAreaSel= doc.data();
            }
        });
      }); 
      //this.$root.$emit('Spinner::hide')
    }, 
    categoryUpdate: function (id) {
      this.categoryId= id
      this.getData()
    }      
  }
}
</script>

<style scoped>
.topo {
  background-color: #F7C331!important;
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 5px;
}
.topo h1 {
    color: black;
    margin: 10px;
}
.topo ul {
    width: 99%;
    margin: 5px;
}
.topo ul li{
    width: 100%;
}
</style>