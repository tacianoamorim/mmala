<template>

  <div id="app">
    <section class="navbar secMMLAA " style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>
            Fill in all fields to get a more reliable result.
          </h1>
        </div>
        <div id="divA">
            <img src="../assets/img/checklist.png" height="400" width="400">
        </div>
      </div>
    </section>    

    <section>
     <div class="container">
      <div class="row ">
        <form @submit.prevent="submitCategoria()">       
          <div class="col-md-12">
            <label for="">Descrição:</label>
            <input
              required
              type="text"
              class="form-control"
              v-model="form.description"
            >
          </div>
          <div class="col-8">
            <button class="btn btn-primary">Adicionar Categoria</button> | 
          </div>
        </form>
      </div>  
      
      <div class="row">
        <div class="col-md-12">  
            {{ this.categorias }}
        </div>  
      </div>                   
      
      <div class="row">
        <div class="col-md-12">
          <div class="todo-list">
            <div class="title" v-for="c in this.categorias" :key="c.descricao">
              <div class="title-icon">
                <i class="fas fa-camera"></i>
              </div>
              <div class="title-content">
                <p class="title-substitle">{{c}}</p>
              </div>     
              <div class="title-action">
                <button class="btn btn-primary">Concluido</button>
                <button class="btn btn-danger">Remover</button>
              </div>                         
            </div>
          </div>
        </div>  
      </div>
    </div>
  </section>          
</div>
</template>

<script>
import db from '../firebase'
//import BaseSpinner from '../components/global/BaseSpinner'

export default {
  name: "app",
  components: {
   // BaseSpinner
  },
  props: {
    id: String
  },
  data: () => ({
    categorias: [],    
    lists: [],
    values: [],
    form: {
      value: '',
      description: ''
    }
  }),
  created() {
    console.log("created()")
    this.getData()
  },
  mounted() {
    console.log("mounted()")
  },  
  beforeCreate() {
    console.log("beforeCreate ")
  },  
  methods: {
    getData() {
      let self = this
      console.log("getData()")
      db.collection("categorias").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data().descricao);
            self.categorias.push(doc.data().descricao);
        });
      });
    },

    mostrarSpinner() {
      //this.$root.$emit('Spinner::show') 
    },    
     
    say: function (message) {
      alert(message)
    },   
    submitCategoria () {

      console.log("submitCategoria")
      
      const categoria = {
        descricao: this.form.description
      }
      console.log(categoria)
      db.collection("categorias").doc().set(categoria);
      this.getData();
    },
  }
}
</script>

<style scoped>  
  .todo-list {
    padding-top: 2rem;
  }
</style>