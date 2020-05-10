<template>
    <div id="app">
        <div class="container">
            <div class="row topo" >
                <h1>Categories</h1>
                <ul class="list-group list-group-horizontal">
                    <li v-for="category in categories" :key="category" 
                        class="list-group-item">
                         <router-link :to="category.id">
                            {{category.description}}
                        </router-link> 
                    </li>
                </ul>   
            </div>                

            <div class="row">
                <div class="col-3" style="text-align: left, margin-left: -14px;">
                    <h3>Processes Areas</h3>
                    <div class="list-group" id="list-tab" role="tablist">
                    <a v-for="category in categories" :key="category" class="list-group-item list-group-item-action active" id="list-home-list" 
                        data-toggle="list" href="#list-home" role="tab" aria-controls="home">

                        {{ category.description }}
                    </a>                        
                    <a class="list-group-item list-group-item-action active" id="list-home-list" 
                        data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                        Data Acquisition
                    </a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" 
                        data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                        Data Quality
                    </a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" 
                    data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
                        Data Ownership
                    </a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" 
                    data-toggle="list" href="#list-data" role="tab" aria-controls="messages">
                        Infrastructure
                    </a>      
                    </div>
                </div>
                <div class="col-9">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" 
                        aria-labelledby="list-home-list">
                        <LayoutProcessArea message="text ffdgdfg  01"/>    
                    </div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" 
                        aria-labelledby="list-profile-list">
                        <LayoutProcessArea message="text ffdgdfg  02"/>    
                    </div>
                    <div class="tab-pane fade" id="list-messages" role="tabpanel" 
                        aria-labelledby="list-messages-list">
                        <LayoutProcessArea message="text ffdgdfg  03"/>    
                    </div>
                    <div class="tab-pane fade" id="list-data" role="tabpanel" 
                        aria-labelledby="list-data-list">
                        <LayoutProcessArea message="text ffdgdfg  04"/>    
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
    categorySel: String
  }),
  props: {
    category: String
  },
  created() {
    console.log("created()")
    console.log(this.category)
    this.getData()
  },  
  methods: {
    getData() {
      let self = this
      console.log("getData()")
      db.collection("categories").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            self.categories.push(doc.data());

            //category selected in page load
            if ( self.category == doc.data().id ) {
                self.categorySel= doc.data();
                console.log(self.categorySel)
            }

        });
      });
    }, 
    viewCategory: function (id) {
      alert(id)
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