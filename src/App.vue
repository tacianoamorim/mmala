<template>

  <div id="app">
    <main class="main">

      <!-- TOPO -->
      <nav id="menuHeader">
        <div class="container">
          <div class="row">
            <div class="col-2"><img src="./assets/img/logo.png" height="50" width="200"></div>
            <div class="col-7"></div>
            <div class="col-3">
              <button type="button" style="background-color: #6B7A8F;" onclick="$('.alert').alert('close')" 
              class="btn btn-info btn-sm">AVALIE SUA ORGANIZAÇÃO</button>
            </div>                   
          </div>
        </div> 
      </nav>
          
      <Main/>
    </main>

    <!-- FOOTER -->
    <footer>
        <p>© 2020 - Todos os direitos reservados</p>
    </footer>    
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}

</script>

<style>
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
* {
  font-family: 'Raleway',sans-serif;
  margin: 0;
  padding: 0;
}

nav {
 margin: 0px;
 margin-top: 0px;
 padding: 0;
 position: fixed;
 top: 0; 
 width:100%;
 height:59px;
 background-image: linear-gradient(to bottom, #2c2c2c, #181818);
     /* box-shadow: inset 0px 3px rgba(255,255,255,0.03), inset 0px -4px rgba(0,0,0,0.2), 0px 4px rgba(0,0,0,0.05); */
 list-style:none;
}

.header {
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  top: 0;
}
h4 {
  padding: 13px;
}
.menu {
  background-color: #666666;
  text-align: center;
}
.menu ul li {
  display: inline-block;
}
.menu ul li a {
  display: block;
  color: #FFFFFF;
  padding: 30px 10px;
}
.main {
    padding: 5px 0;
}
.content {
  width: 80%;
  margin: auto;
  padding: 30px;
  background-color: #eff0f1;
  height: 1000px;
}
.content h1 {
  margin-bottom: 30px;
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
