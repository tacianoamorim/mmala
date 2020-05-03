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
      this.$root.$emit('Spinner::show') 
    },    
     
    say: function (message) {
      alert(message)
    },   
    add: function () {
      /*this.novoTodo.id= Date.now();
      this.novoTodo.checked= false;
      console.log({ 
        "checked": this.novoTodo.checked, 
        "description": this.novoTodo.description, 
        "id": this.novoTodo.id } );
      this.todos.push(this.novoTodo);

      this.items.push({"message":"teste"});

      //db.collection("todos").doc().set(this.novoTodo);

      console.log("TESTE ADD");*/
    },  

    submitCategoria () {

      console.log("submitCategoria")
      
      const categoria = {
        descricao: this.form.description
      }
      console.log(categoria)
      db.collection("categorias").doc().set(categoria);
      this.getData();


      //const ref = db.collection("categorias").p


      //let url = ''
      //this.loading = true
      //try {
        //this.$root.$emit('Spinner::show')
        //const ref = this.$firebase.database().ref(window.uid)
        //const id = db.collection("expenses").push().key
        /*if (this.form.receipt) {
          const snapshot = await this.$firebase.storage()
            .ref(window.uid)
            .child(this.fileName)
            .put(this.form.receipt)
          url = await snapshot.ref.getDownloadURL()
        }*/
        /*const payload = {
          id,
          ...this.form,
          //receipt: url,
          createdAt: new Date().getTime()
        }
        db.collection("expenses").doc().set(payload, err => {
          if (err) {
            this.$root.$emit('Notification::show', {
              type: 'danger',
              message: 'Não foi possível inserir o gasto, tente novamente.'
            })
            this.loading = false
          } else {
            this.$root.$emit('Notification::show', {
              type: 'success',
              message: 'Gasto inserido com sucesso.'
            })
            this.closeModal()
            this.loading = false
          }
        })
      } catch (err) {
        this.$root.$emit('Notification::show', {
          type: 'danger',
          message: 'Não foi possível inserir o gasto, tente novamente.'
        })
        this.loading = false
      } finally {
        this.$root.$emit('Spinner::hide')
        this.loading = false
      }*/
    },

 /*   get: function () {
      return db.collection("categorias").get()
        .then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.items.push(doc.data());
          } else {
            console.log("No such document!");
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
    
    },     */    
    addTodo(todo) {
      todo.id= Date.now();
      this.todos.push(todo);
      this.todo= { checked: false };



      console.log("TESTES");
    }
  }
}
</script>

<style scoped>  
  .todo-list {
    padding-top: 2rem;
  }
</style>