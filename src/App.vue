<template>

  <div id="app">
    <!-- TOPO -->
    <div id="topo">
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
    </div>  

    <main class="main">
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
#topo {
  margin: 4px;
  margin-top: 15px;
  padding: 0;
 
}
.header {
  position: -webkit-sticky; /* Necessário para funcionar no Safari */
  position: sticky;
  top: 0;
  background-color: #F7882F!important;
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
  background-color: #343a40;
  color: #FFFFFF;
  text-align: center;
  padding: 1px;
  font-size: small;
  margin: 0px;
  bottom:0;
}
button {
  font-size: small !important;
}

</style>
