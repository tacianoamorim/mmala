<template>
  <div>
    <div class="row">
      <div :class="`card text-white bg-${tCard} mb-12`" 
          style="width: 100%;">
        <div class="card-header label">Maturity level {{nLevel}} - {{ dLevel }}</div>
        <div class="card-body">
          <p v-if="tLevel.length > 0" class="card-text"><b>Functional Practices</b></p>
          <p class="card-text">
            <ul>
              <li v-for="(level, i) in tLevel" :key="'A'+i">
                  {{ level }}
              </li>  
            </ul>            
          </p>  

          <p v-if="tExample.length > 0" class="card-text"><b>Examples of data used at that level:</b></p>
          <p class="card-text">
            <ul>
              <li v-for="(example, i) in tExample" :key="'Ex'+i">
                  {{ example }}
              </li>  
            </ul>  
          </p>  
          <p v-if="tWork.length > 0" class="card-text"><b>Work Products Examples:</b></p>
          <p class="card-text">
            <ul>
              <li v-for="(work, i) in tWork" :key="'Wk'+i">
                  {{ work }}
              </li>  
            </ul>  
          </p>                     
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    tCard: String,
    nLevel: String,
    dLevel: String,
    tLevel: Object,
    tWork: Object,
    tExample: Object
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
