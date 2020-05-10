<template>
  <div>
    <div class="row">
      <div class="card mb-12" style="width: 100%;">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div class="card-body">
              <p class="card-text">
                <span class="label">Category: </span><br>
                <span class="text">Data Management</span><br>

                <span class="label">Process Area: </span><br>
                <span class="text">Data Acquisition</span><br>

                <span class="label">Purpose: </span><br>
                <span class="text">To obtain data about students' and teachers' actions, 
                  supporting the expansion of the available data sources for analysis.</span><br>
              
                <span class="label">Goals: </span><br>
                <span class="text">To identify and to provide access to data sources that 
                  can be used for data analysis in LA, expanding the range of possible 
                  analyzes; To acquire data under previously defined ethical and privacy 
                  criteria, excluding from the scope data that does not contribute to 
                  the progress of the	teaching and learning process; and Encourage prior 
                  assessment of the data acquisition costs.</span>

                <LayoutMaturityLevel tCard="danger"  nLevel="1" :tLevel="tLevel"/>
                <LayoutMaturityLevel tCard="warning" nLevel="2" :tLevel="tLevel"/>
                <LayoutMaturityLevel tCard="primary" nLevel="3" :tLevel="tLevel"/>
                <LayoutMaturityLevel tCard="success" nLevel="4" :tLevel="tLevel"/>
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import LayoutMaturityLevel from './LayoutMaturityLevel'

export default {
  components: {
    LayoutMaturityLevel
  },  
  data: () => ({
    tLevel: "Teste"
  }),
}
</script>

<style scoped>
* {
  text-align: justify;
}
span {
  color: black;
  margin-bottom: 5px;
}

.label {
  font-weight: bolder;
}
.text {
  margin-bottom: 10px;
}
</style>