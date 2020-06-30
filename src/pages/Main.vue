<template>

  <div>
    <section class="navbar secMMALA" style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>
            The Maturity Model for the Adoption of Learning Analytics (MMALA) is a 
            guide to support the adoption of Learning Analytics in Higher 
            Education Institutions
          </h1>
        </div>
        <div id="divA">
            <img src="../assets/img/engineering2.png" height="433" width="345">
        </div>
      </div>
    </section>    

    <section id="categoriesProcessAreas" >
     <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h1 class="label darkLabel">Categories and Process Areas</h1>
          <p class="text darkText">
            MMALA intends to describe the necessary activities to a 
            Higher Education institution to adopt LA and gradually 
            achieve higher maturity levels in this field.
          </p>
          <p></p>
          <p class="text darkText">
             MMALA is composed of categories and process areas.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <div class="table-responsive-xl" style="padding-top: 45px; padding-left: 20px">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="colCategory">Categories</th>
                  <th scope="col">Process Areas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Management</td>
                  <td>
                    <ul>
                      <li>Data Acquisition (DA)</li>
                      <li>Data Quality (DQ)</li>
                      <li>Data Ownership (DO)</li>
                      <li>Infrastructure (INF)</li>
                    </ul>
                  </td>
                </tr>    
                <tr>
                  <td>Administration and Training</td>
                  <td>
                    <ul>
                      <li>Funding (FUN)</li>
                      <li>Leadership (LEA)</li>
                      <li>Stakeholders’ Identification and Involvement (SII)</li>
                      <li>Communication (COM)</li>
                      <li>Stakeholders’ Training (STR)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Pedagogical Support</td>
                  <td>
                    <ul>
                      <li>Pedagogical planning of solutions (PPS)</li>
                      <li>Support in Interpreting Results (SIR)</li>
                      <li>Result-based Intervention(RBI)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Data Analysis</td>
                  <td>
                    <ul>
                      <li>Development of own solutions (DOS)</li>
                      <li>Acquisition of ready-made solutions (ACQ)</li>
                      <li>Evaluating the effectiveness of solutions (EVA)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Legislation, Privacy, and Ethics</td>
                  <td>
                    <ul>
                      <li>Legislation, Privacy, and Ethics (LEP)</li>
                    </ul>
                  </td>
                </tr>                                
              </tbody>
            </table>
          </div>
        </div>
      </div>      
    </section>

    <section id="processArea" style="background-color: #DCDCDC">
     <div class="row featurette">
        <div class="col-md-8 order-md-1">
          <h1 class="label darkLabel">Process Area</h1>
          <p class="text darkText" style="font-size: 25px">
            Each process area is composed of its purpose, goals, related process areas, 
            and functional practices (grouped in levels 1 to 4). Each level also 
            describes examples of work products resulting from the institutionalization 
            of the respective maturity level. 
          </p>
          <p class="text darkText" style="font-size: 25px">
            MMALA intends to describe the necessary activities to a Higher Education 
            institution to adopt LA and gradually achieve higher maturity levels in 
            this field. MMALA is composed of categories and process areas.
            MMALA was designed so as to allow its use in a flexible and adaptable way. 
            That is, the Institution may choose to focus on any combination of 
            categories or process areas. The related process areas are a sure 
            indication of those areas where joint adoption is recommended.
          </p>
        </div>
        <div class="col-md-4 order-md-2">
          <img src="../assets/img/category.png" style="margin-top: 50px" height="385" width="374">
        </div>
      </div>      
    </section>

    <section id="maturityLevels">
      <h1 class="label darkLight">Maturity Levels</h1>
      <div style="text-align: center;">
        <img src="../assets/img/structured.png"              
              height="422" width="661">
      </div>
    </section>  

    <section id="get"  style="background-color: #DCDCDC; height: 100vh">
     <div class="row featurette" >
        <div class="col-md-7 order-md-2">
          <p class="text darkText" style="padding-top: 200px;">
            Get to know <span class="mmala">MMALA</span> to figure out the benefits that 
            your Higher Education Institution can achieve with its use.
          </p>
        </div>
        <div class="col-md-5 order-md-1" style="text-align: center; padding-top: 108px;">
          <img src="../assets/img/compass-rose.png" height="350" width="350">
        </div>       
      </div>      
    </section>

  </div>
</template>

<style scoped>
p { 
  text-align: justify; 
}
.colCategory {
  width: 160px;
}
td {
  font-size: 13px;
  padding-top: 2px;
  padding-left: 4px;
  padding-bottom: 3px;
}
ul {
  margin-bottom: 3px;
}
th {
  background-color: #F7C331; 
  color: #FFF;
  font-size: medium;
}
section {
  height: 100vh;
}
h1 {
  padding-top: 30px;
  padding-bottom: 20px;
}
/* ROTULO */
.label {
  font-size: 40px;
  margin: 25px;
  color: #777;
  line-height: 40px;
  text-align: center;
  padding-top: 14px;
}
.lightLabel {
  font-size: 40px;
  color: #f3f0f0;
  line-height: 40px;
  text-align: center; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
}
.darkLabel {
  font-size: 40px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: center; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
}
/* text */
.text { 
  text-align: justify; 
  margin: 0px;
  padding-left: 57px;
  padding-right: 60px;  
}
.lightText { 
  font-size: 32px;
  color: #f3f0f0;
  line-height: 40px;
  text-align: left; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
  margin-top: 10px
}
.darkText { 
  font-size: 32px;
  color: #6B7A8F;
  line-height: 40px;
  text-align: left; 
  text-shadow: #b4bac1 0.1em 0.1em 0.2em;
  margin-top: 10px;  
}
.left {
  text-align: left;
}
</style>