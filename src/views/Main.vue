<template>

  <div>
    <section class="navbar secMMLAA" style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>
            The Maturity Model for Learning Analytics Adoption (MMLAA) is a guide 
            that supports the adoption of Learning Analytics in Higher Education 
            institutions.
          </h1>
        </div>
        <div id="divA">
            <img src="../assets/img/engineering2.png" height="433" width="345">
        </div>
      </div>
    </section>    

    <section id="estrutura" >
     <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h1 class="rotulo rotuloEscuro" >Categorias e Áreas de Processos</h1>
          <p class="texto textoEscuro">
            The MMLAA covers the activities necessary for the institution to 
            evolve in the adoption of LA.</p>
          <p class="texto textoEscuro">
            The model is composed of 5 Categories, which are made up 
            of Process Areas.
          </p>
            (aqui vem a tabela com as categorias e áreas de processos)
        </div>
        <div class="col-md-5 order-md-1">
          <img src="../assets/img/categoriaProcesso.png" style="margin-top: 50px" height="500" width="500">
        </div>
      </div>      
    </section>

    <section id="estrutura" style="background-color: #6B7A8F">
     <div class="row featurette">
        <div class="col-md-12">
          <h1 class="rotulo rotuloClaro" >Structure</h1>
          <p class="texto textoClaro" style="font-size: 18px">
            The Process Areas of the model have a fixed structure, composed of the
            general purpose of that area, the objectives that one wishes to achieve with its
            implementation, the areas of processes related to it, the functional practices
            distributed over 4 maturity levels and the resulting work products
            institutionalization of processes at each level.  
          </p>
          <p class="texto textoClaro" style="font-size: 18px;">
            The MMLAA was conceived to allow its use in a flexible and
            adaptable. That is, the institution can choose to focus on any
            combination of categories or process areas, the process areas being
            a safe indication of those areas where adoption is recommended
            joint.
          </p>
            (aqui vem a imagem que já tem na home. Acredito até que pode ficar 
            interessante usar esses textos que fiz na imagem para que ela tenha mais 
            informações, ao invés desse texto ficar corrido ao lado da imagem).
        </div>
      </div>      
    </section>

    <section id="areaProcesso">
     <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h1 class="rotulo rotuloEscuro">Área de Processo</h1>
          <p class="lead texto textoEscuro">
            It consists of the description of its purpose and objectives, the
            related process areas and their functional practices
            (described in terms of levels 1 to 4).
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="../assets/img/areaProcesso.png" style="margin-top: 50px" height="500" width="500">
        </div>
      </div>      
    </section>

    <section id="niveis" style="background-color: #6B7A8F">
      <h1 class="rotulo rotuloClaro">Maturity Levels</h1>
      
      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-3">
            <img src="../assets/img/numero1.png" style="margin-top: 10px" height="140" width="140">
            <h3 style="color: #F7882F">Ad hoc</h3>
            <p class="left texto textoClaro" style="color: #F7882F;font-size: 10px;">
              The processes are not established, occurring in a disorderly manner.
              Activities are carried out without prior planning and involve few
              researchers and students.
            </p>
          </div><!-- /.col-lg-3 -->
          <div class="col-lg-3">
            <img src="../assets/img/numero2.png" style="margin-top: 10px" height="140" width="140">
            <h3 style="color: #F7882F">Initial</h3>
            <p class="left texto textoClaro" style="color: #F7882F;font-size: 10px;">
              The processes begin to formalize, favoring the expansion of
              use of LA in the institution.
            </p>
          </div><!-- /.col-lg-3 -->
          <div class="col-lg-3">
            <img src="../assets/img/numero3.png" style="margin-top: 10px" height="140" width="140">
            <h3 style="color: #F7882F">Structured</h3>
            <p class="left texto textoClaro" style="color: #F7882F;font-size: 10px;">
              The institution recognizes and supports the adoption of LA, 
              so that the processes are formally established and the 
              responsibilities of each stakeholder are defined.
            </p>
          </div><!-- /.col-lg-3 -->
          <div class="col-lg-3">
            <img src="../assets/img/numero4.png" style="margin-top: 10px" height="140" width="140">
            <h3 style="color: #F7882F">Systematic</h3>
            <p class="left texto textoClaro" style="color: #F7882F;font-size: 10px;">
              There are processes and policies formally established and followed, 
              so that the adoption of LA becomes comprehensive to the whole institution.
            </p>
          </div><!-- /.col-lg-3 -->
        </div><!-- /.row -->
        <!-- START THE FEATURETTES -->
      </div>     
    </section>  

    <section id="areaProcesso"  style="height: 85vh">
      <h1 class="rotulo rotuloClaro"></h1>
     <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <p class="texto textoEscuro">
            Get to know <span class="mmala">MMALA</span> and understand the 
            benefits that your institution can obtain with its use.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="../assets/img/compass-rose.png" style="margin-top: 50px" height="300" width="300">
        </div>       
      </div>      
    </section>

  </div>
</template>

<style>
p { 
  text-align: justify; 
}
.secMMLAA {
  background-color: #F7C331!important;
}
section {
  height: 100vh;
}

/* DIV */
#divLateral h1 {
  font-size: 40px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: left; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em 
}
.group:before,
.group:after {
  content: "";
  display: table;
} 
.group:after {
  clear: both;
}
.group {
  zoom: 1; 
}

#divLateral{
  position: relative;
  border-width: -10px;
  width: 50%;
  float: left;
  margin: initial;
  padding: inherit;    
}
#divA{
  position: relative;
  border-width:2px;
  width: 400px;
  height: 400px;
  left:0px;
  float: left;
}

/* ROTULO */
.rotulo {
  font-size: 40px;
  margin: 25px;
  color: #777;
  line-height: 40px;
  text-align: center;
  padding-top: 14px;
}
.rotuloClaro {
  font-size: 40px;
  color: #f3f0f0;
  line-height: 40px;
  text-align: center; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
}
.rotuloEscuro {
  font-size: 40px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: center; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
}

/* TEXTO */
.texto { 
  text-align: justify; 
  margin: 0px;
  padding-left: 57px;
  padding-right: 60px;  
}
.textoClaro { 
  font-size: 33px;
  color: #f3f0f0;
  line-height: 40px;
  text-align: left; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
  margin-top: 10px
}
.textoEscuro { 
  font-size: 33px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: left; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
  margin-top: 10px;  
}

.left {
  text-align: left;
}

.mmala{
  color: #F7C331;
  font-weight: bolder;
  font-style: italic;
}

</style>
