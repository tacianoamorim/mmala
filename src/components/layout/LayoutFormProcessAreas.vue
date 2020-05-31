<template>
  <div>
    <td class="titleTD">
      <span class="title">{{processAera.description}}</span>
      <ul>
        <li v-for="(question, i) in processAera.questions" :key="'A'+i">
            {{ question }}
        </li> 
      </ul>  
    </td>
    <td>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" required
          v-model="dM_DA" :id="'dM_DA'+this.getIndex()"
          name="dM_DA" value="0:Data Acquisition" alt ="alt">
        <label class="custom-control-label" :for="'dM_DA'+this.getIndexAtual()"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" required
          v-model="dM_DA" :id="'dM_DA'+this.getIndex()"
          name="dM_DA" value="1:Data Acquisition">
        <label class="custom-control-label" :for="'dM_DA'+this.getIndexAtual()"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" required
          v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" 
          name="dM_DA" value="2:Data Acquisition">
        <label class="custom-control-label" :for="'dM_DA'+this.getIndexAtual()"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" required
        v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" name="dM_DA" 
        value="3:Data Acquisition">
      <label class="custom-control-label" :for="'dM_DA'+this.getIndexAtual()"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" required
          v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" name="dM_DA" 
          value="4:Data Acquisition">
        <label class="custom-control-label" :for="'dM_DA'+this.getIndexAtual()"></label>
      </div>
    </td>      
  </div>
</template>

<script>
export default {
  props: {
    processAera: Object
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
