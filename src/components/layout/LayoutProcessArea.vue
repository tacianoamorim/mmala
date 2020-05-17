<template>
  <div>
    <div class="row">
      <div class="card mb-12" style="width: 100%;">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div class="card-body">
              <p class="card-text">
                <span class="label">Category: </span><br>
                <span class="text">{{processAera.category}}</span><br>

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

                <LayoutMaturityLevel tCard="danger"  nLevel="1" :tLevel="processAera.level01"/>
                <LayoutMaturityLevel tCard="warning" nLevel="2" :tLevel="processAera.level02"/>
                <LayoutMaturityLevel tCard="primary" nLevel="3" :tLevel="processAera.level03"/>
                <LayoutMaturityLevel tCard="success" nLevel="4" :tLevel="processAera.level04"/>
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
    processAera: Object
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
}
</style>