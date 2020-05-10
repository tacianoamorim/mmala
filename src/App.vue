<template>
  <div id="app-5">
    <main class="main">  

      <!-- TOPO -->
      <nav id="menuHeader">
        <div class="container">
          <div class="row">
            <div class="col-2"><router-link to="/"><img src="./assets/img/logo.png" height="50" width="200"></router-link>  </div>
            <div class="col-2">
            </div>
            <div class="col-3">
              <router-link to="/model/AT" class="btn btn-info btn-sm" 
                style="background-color: #6B7A8F;">See the MMALA Model</router-link>              
            </div>
            <div class="col-5">
              <router-link to="/form" class="btn btn-info btn-sm" 
                style="background-color: #6B7A8F;">Evaluate your Organization</router-link>
            </div>                   
          </div>
        </div> 
      </nav>
      <router-view/>
    </main>    
    <!-- FOOTER -->
    <footer>
        <p>© 2020 - All rights reserved</p>
    </footer>    
  </div>
</template>

<style scoped>

.menu-fixo {
	position: fixed;
	top: 0;
	z-index: 1;
	transition: all .5s;
}

body {
    background: #f3f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;  
  font-size: 28px;
  font-family: 'Raleway', sans-serif, Arial, Helvetica;
}

.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

footer {
  background-color: #6B7A8F;
  padding: 1px;
  font-size: small;
  margin: 0px;
  bottom:0;
}
footer p {
  color: #FFFFFF ;
  text-align: center;
  padding: 5px;
  font-size: small;
  margin: 0px;
  bottom:0;
}

button {
  font-size: small !important;
}
</style>
