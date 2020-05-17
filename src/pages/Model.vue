<template>
    <div id="app">
        <div class="container " id="printable">
            <div class="row topo" >
                <h1>Categories</h1>
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
           <div class="row">
                <div class="col-3" style="text-align: left, margin-left: -14px;">
                    <h3>Processes Areas</h3>
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
                            <LayoutProcessArea :processAera="processArea"/>     
                        </div>
                     </div>
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
    categorySel: String,
    processAreas: [],
    processAreaSel: []
  }),
  props: {
    categoryId: String
  },
  created() {
    console.log("* Created() -> Category: " + this.category)
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
      let self = this
      this.categories= []
      this.processAreas= []
      console.log("*** getData()")

      // get categories
      db.collection("categories").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            self.categories.push(doc.data());
            //category selected in page load
            console.log("***** db.collection('categories')")
            console.log("***** Self.categoryId : "+self.categoryId)
            console.log("***** Doc.data().id   : "+doc.data().id)
            if ( self.categoryId == doc.data().id ) {
                self.categorySel= doc.data();
                console.log(self.categorySel.description)
            }
        });
      });

      // get process areas
      db.collection("processAreas").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            //category selected in page load
            console.log("******* db.collection('processAreas')")
            console.log("******* Self.categorySel.id : "+self.categorySel.id)
            console.log("******* Doc.data().category : "+doc.data().category)            
            if ( doc.data().category == self.categorySel.id ) {
                self.processAreas.push(doc.data());
                self.processAreaSel= doc.data();
                console.log(self.processAreaSel)
            }
        });
      }); 

    }, 
    viewCategory: function (id) {
      alert(id)
    },
    categoryUpdate: function (id) {
        this.categoryId= id
        this.getData()
        //console.log('this.categoryId: '+this.categoryId)
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