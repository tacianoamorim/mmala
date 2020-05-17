<template>

  <div id="app">

    <section class="navbar secMMALA " style="height: 100vh">
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
          <div class="col-md-2">
            <label ref="institution">Institution name:</label>
          </div>
          <div class="col-le-10">
            <input type="text" id="institution">
          </div>          
        </div>
        <div class="row">
          <div class="col-le-2">
            <label ref="yuor">Your position:</label>
          </div>
          <div class="col-le-10">
            <input type="text" id="yuor">
          </div>          
        </div>
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
                <div class="col-sm-2"><i>1</i></div>       
                <div class="col-sm-2"><i>2</i></div>                    
                <div class="col-sm-2"><i>3</i></div> 
                <div class="col-sm-2"><i>4</i></div>                    
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
import router from '../router'

export default {
  name: "app",
  data: () => ({
    values: String,
    labels: String,
    institutionName: String,
    yourPosition: String
  }),
  methods: {
    submit() {
      this.institutionName= "Gráfico Taciano Amorim"
      this.values= "1, 2, 3, 4, 0, 3",
      this.labels= "LAT001, LAT002, LAT003, LAT004, LAT005, LAT006"
      console.log("-----------------SUBMIT FORM---------------------")
      console.log(this.institutionName)
      console.log(this.values)
      console.log(this.labels)
      console.log("--------------------------------------------")

      router.push({ name: 'graphic', params: { 
        pLabels: this.labels, 
        pValues: this.values,
        pInstitution: this.institutionName 
      } })
    },
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
  font-weight: bolder;
}

.secMMALA {
  background-color: #F7C331!important;
}
section {
  height: 100vh;
}
</style>