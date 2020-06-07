<template>
  <div>
    <div class="row">
      <div class="card mb-12" style="width: 100%;">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div class="card-body">
              <p class="card-text">
                <span class="label">Category: </span><br>
                <span class="text">{{category.description}}</span><br>

                <span class="label">Process Area: </span><br>
                <span class="text">{{processAera.description}}</span><br>

                <span class="label">Purpose: </span><br>
                <span class="text">{{processAera.purpose}}</span><br>
              
                <span class="label">Goals: </span><br>
                <span class="text">
                  <ul>
                    <li v-for="(goal, i) in processAera.goals" :key="'A'+i">
                        {{ goal }}
                    </li>  
                  </ul>
                </span>

                <span class="label">Related Processes Areas: </span><br>
                <span class="text">
                  <ul>
                    <li v-for="(relatedProcessArea, i) in processAera.relatedProcessesAreas" :key="'rPA'+i">
                        {{ relatedProcessArea }}
                    </li>  
                  </ul>
                </span>
                <LayoutMaturityLevel tCard="danger"  nLevel="1" dLevel="Ad hoc"
                  :tLevel="processAera.level01" 
                  :tWork="processAera.level01Examples" 
                  :tExample="processAera.level01WorkProducts"/>
                <LayoutMaturityLevel tCard="warning" nLevel="2" dLevel="Initial" 
                  :tLevel="processAera.level02" 
                  :tWork="processAera.level02Examples" 
                  :tExample="processAera.level02WorkProducts"/>
                <LayoutMaturityLevel tCard="primary" nLevel="3" dLevel="Structured" 
                  :tLevel="processAera.level03" 
                  :tWork="processAera.level03Examples" 
                  :tExample="processAera.level03WorkProducts"/>
                <LayoutMaturityLevel tCard="success" nLevel="4" dLevel="Systematic" 
                  :tLevel="processAera.level04" 
                  :tWork="processAera.level04Examples" 
                  :tExample="processAera.level04WorkProducts"/>
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
  props: {
    processAera: Object,
    category: Object
  }   
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
  margin-bottom: 20px;
  padding-bottom: 30px;
}
</style>