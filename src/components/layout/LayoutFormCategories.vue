<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th><span class="title">{{category}}</span></th>
              <th scope="col" style="width: 90px;">Very Poor</th>
              <th scope="col" style="width: 70px;">Poor</th>
              <th scope="col" style="width: 70px;">Fair</th>
              <th scope="col" style="width: 70px;">Good</th>
              <th scope="col" style="width: 85px;">Excellent</th>                                                       
            </tr>
          </thead>
          <tbody>
            <tr v-for="(processArea, i) in processAreas" :key="'A'+i">
              <td>{{processArea}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>         
</template>

<script>
import db from '../firebase'

export default {
  props: {
    category: String,
  },
  data: () => ({
    categories: [],
    processAreas: [],
  }), 
  created() {
    this.getData()
  },  
  methods: {
    getData() {
      let self = this
      this.categories= []
      this.processAreas= []
      
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
      this.$root.$emit('Spinner::hide')
    }     
  }      
}
</script>

<style scoped>
* {
  margin-top: 5px;
}
.label {
  font-weight: bolder;
}
li {
  text-align: justify;
}
</style>
