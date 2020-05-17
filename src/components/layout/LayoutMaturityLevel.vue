<template>
  <div>
    <div class="row">
      <div :class="`card text-white bg-${tCard} mb-12`" 
          style="width: 100%;">
        <div class="card-header label">Maturity level {{nLevel}}</div>
        <div class="card-body">
          <p class="card-text">
            <ul>
              <li v-for="(level, i) in tLevel" :key="'A'+i">
                  {{ level }}
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
    tLevel: []
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
