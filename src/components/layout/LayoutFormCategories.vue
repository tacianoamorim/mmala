<template>
    <div class="col-md-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th><span class="title">{{category.description}}</span></th>
            <th scope="col" style="width: 100px;">Very Poor</th>
            <th scope="col" style="width: 60px;">Poor</th>
            <th scope="col" style="width: 60px;">Fair</th>
            <th scope="col" style="width: 60px;">Good</th>
            <th scope="col" style="width: 85px;">Excellent</th>                                                       
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entity) in processAreas" :key="entity" >
            <td class="titleTD">
              <span class="title">{{entity.description}}</span>
              <ul>
                <li v-for="(question, i) in entity.questions" :key="entity.id+i">
                    {{ question }}
                </li> 
              </ul>  
            </td>
            <td><input class="form-check" type="radio" :name="entity.id"
                :value="getValue(category, entity, 0)"></td>
            <td><input class="form-check" type="radio" :name="entity.id"
                :value="getValue(category, entity, 1)"></td>
            <td><input class="form-check" type="radio" :name="entity.id"
                :value="getValue(category, entity, 2)"></td>
            <td><input class="form-check" type="radio" :name="entity.id"
                :value="getValue(category, entity, 3)"></td>
            <td><input class="form-check" type="radio" :name="entity.id"
                :value="getValue(category, entity, 4)"></td>                   
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
//import LayoutFormProcessAreas from './LayoutFormProcessAreas'
import db from '../../firebase'

export default {
  props: {
    category: Object,
    values: []
  },
  components: {
    //LayoutFormProcessAreas
  },
  data: () => ({
    processAreas: [],
  }),  
  created() {
     this.getData()
  },   
  methods: {
    getValue: function (category, processArea, idx) {
      var value= ""
      if (category != null && processArea != null) {
        value= value 
          + processArea.id + ":"
          + category.color + ":"
          + idx + ":" 
          + processArea.description + ":"  
          + category.description;
          //"DM_DA:#008000:4:Data Acquisition:Data Management"        

      }
      return value
    },     
    getData() {
      let self = this
      
      /**
       * BUSCAR OS DADOS 
       */
      self.processAreas= []
      db.collection("processAreas")
      .where("category", "==", self.category.id)
      .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          self.processAreas.push(doc.data());
        });
      });
    }, 
  }    
}
</script>

<style scoped>  
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
.titleTD {
  text-align: left;
}
thead {
    background-color: #F7C331!important;
    color: white !important;
}
</style>
