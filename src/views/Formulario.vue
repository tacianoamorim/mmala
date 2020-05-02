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
      <h1 >Search form</h1>
      <form @submit.prevent="submit()">
        <div class="row">
          <div class="col-md-12">
            <h4>1) Regarding the categories, inform the importance that each one has to support the adoption of Learning Analytics.</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
               <div class="row">
                <div class="col-sm-2"></div>                    
                <div class="col-sm-2"><i>Not important</i></div>       
                <div class="col-sm-2"><i>Slightly important</i></div>                    
                <div class="col-sm-2"><i>Moderately important</i></div> 
                <div class="col-sm-2"><i>Important</i></div>                    
                <div class="col-sm-2"><i>Very important</i></div>                                                                         
              </div> 
              <fieldset class="form-group"> 
                <div class="row">
                  <div class="col-sm-2 align"><span>Data Management</span></div>                    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataManager" value="NI">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataManager" value="SL">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataManager" value="MI">
                    </div>
                  </div>    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataManager" value="I">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataManager" value="VI">
                    </div>
                  </div>                                                       
                </div>
              </fieldset>
            </div>   
          </div>
        </div>
        <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <fieldset class="form-group">
                  <div class="row">
                    <div class="col-sm-2 align"><span>Administration</span></div>                    
                    <div class="col-sm-2">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rb01Administration" value="NI">
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rb01Administration" value="SL">
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rb01Administration" value="MI">
                      </div>
                    </div>    
                    <div class="col-sm-2">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rb01Administration" value="I">
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rb01Administration" value="VI">
                      </div>
                    </div>                                                       
                  </div>
                </fieldset>
              </div> 
            </div>   
          </div>        
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <fieldset class="form-group">
                <div class="row">
                  <div class="col-sm-2 align"><span>Pedagogical Support</span></div>                    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Pedagogical" value="NI">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Pedagogical" value="SL">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Pedagogical" value="MI">
                    </div>
                  </div>    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Pedagogical" value="I">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Pedagogical" value="VI">
                    </div>
                  </div>                                                       
                </div>
              </fieldset>
            </div> 
          </div>   
        </div>  

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <fieldset class="form-group">
                <div class="row">
                  <div class="col-sm-2 align"><span>Data Analysis</span></div>                    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataAnalysis" value="NI">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataAnalysis" value="SL">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataAnalysis" value="MI">
                    </div>
                  </div>    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataAnalysis" value="I">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01DataAnalysis" value="VI">
                    </div>
                  </div>                                                       
                </div>
              </fieldset>
            </div> 
          </div>   
        </div>  
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <fieldset class="form-group">
                <div class="row">
                  <div class="col-sm-2 align"><span>Legislation, Private and Ethics</span></div>                    
                  <div class="col-sm-2">
                    <div class="custom-control custom-radio mb-3">
                      <input class="form-check-input" type="radio" name="rb01Legislation" value="NI">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Legislation" value="SL">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Legislation" value="MI">
                    </div>
                  </div>    
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Legislation" value="I">
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rb01Legislation" value="VI">
                    </div>
                  </div>                                                       
                </div>
              </fieldset>
            </div> 
          </div>   
          </div>          
          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-success btn-lg">Submit</button>
            </div>
          </div>
        </form>
    </div>
  </section>          
</div>

</template>

<script>
import db from '../firebase'

export default {
  name: "app",
  data: () => ({
    categorias: [],    

  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let self = this
      console.log("getData()")
      db.collection("categorias").get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            self.categorias.push(doc.data().descricao);
        });
      });
    },
    submit() {
      console.log("submitCategoria")
    }
  }
}
</script>

<style scoped>  
h1 {
  padding: 30px;
  margin-top: 20px;
}
h4 {
  text-align: justify;
  font-size: 1.5rem;
}
span {
  font-weight: bolder;
  font-size: 1rem;
}

.align {
  text-align: justify;
}

i {
  font-size: 1rem;
}
</style>