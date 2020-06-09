<template>
  <div id="app-5">
    <LayoutNotification/>

    <main class="main">  

      <!-- TOPO -->
      <nav id="menuHeader">
        <div class="container">
          <div class="row">
            <div class="col-3"><router-link to="/"><img src="./assets/img/logo.png" height="50" width="200"></router-link>  </div>
            <div class="col-2">
              <router-link to="/model/DM" class="btn btn-info btn-sm top" 
                style="background-color: #6B7A8F;">Discover MMALA</router-link>              
            </div>
            <div class="col-7">
              <router-link to="/form" class="btn btn-info btn-sm top" 
                style="background-color: #6B7A8F;">Evaluate your Higher Education Institution 
              regarding the maturity in adopting LA</router-link>
            </div>                   
          </div>
        </div> 
      </nav>
      <router-view/>
    </main>    
  </div>
</template>

<script>
import LayoutNotification from './components/layout/LayoutNotification'
export default {
  name: 'App',
  components: {
    LayoutNotification
  }
}
</script>

<style scoped>

.menu-fixo {
	position: fixed;
	top: 0;
	z-index: 1;
	transition: all .5s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #f3f0f0;
  font-size: 28px;
}

.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

button {
  font-size: small !important;
}

.top {
  margin: 10px;
}
</style>
