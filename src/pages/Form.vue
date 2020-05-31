<template>
  <div id="app">
    <section class="navbar secMMALA " style="height: 100vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>Make this self-assessment and discover the maturity 
            level of your Institution regarding Learning Analytics adoption.</h1>
        </div>
        <div id="divA">
            <img src="../assets/img/checklist.png" height="400" width="400">
        </div>
      </div>
    </section>
    <section>
     <div class="container">
      <h1 class="title">Search form</h1>
      <form @submit.prevent="submit()" class="was-validated">
        <div class="row">
          <div class="col-md-12">
            <h3>Inform your Higher Education Institution and your 
                position at this Institution (not required):
            </h3>
          </div>
        </div>  
        <div class="row">
          <div class="col-md-12">
            <i>(All the provided information will be kept confidential, 
              and it will be used only for academic publications. Higher Education 
              Institution and your position will not be disclosed)
            </i>
          </div>
        </div>  
        <div class="form-group row">
          <label for="institutionName:" class="col-sm-2 col-form-label"><b>Institution name</b></label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="institutionName"  
              id="institutionName" value="">
          </div>
        </div>
        <div class="form-group row">
          <label for="yourPosition" class="col-sm-2 col-form-label"><b>Your position</b></label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="yourPosition" 
              id="yourPosition" value="">
          </div>
        </div>        
        <div class="row">
          <div class="col-md-12">
            <i>At what level of quality does your Institution perform the following activities?</i>
          </div>
        </div>      
        <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th><span class="title">Data Management</span></th>
                  <th scope="col" style="width: 90px;">Very Poor</th>
                  <th scope="col" style="width: 70px;">Poor</th>
                  <th scope="col" style="width: 70px;">Fair</th>
                  <th scope="col" style="width: 70px;">Good</th>
                  <th scope="col" style="width: 85px;">Excellent</th>                                                      
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="titleTD">
                    <span class="title">Data Acquisition</span>
                    <ul>
                      <li>Identification and access to data sources;</li>
                      <li>Data acquisition under previously defined ethical and privacy criteria; and</li>
                      <li>Assessment of data acquisition costs.  </li>
                    </ul>  
                  </td>
                  <td>
                      <input class="form-check" type="radio" 
                        v-model="dM_DA" :id="'dM_DA'+this.getIndex()"
                        name="dM_DA" value="0:Data Acquisition" alt ="alt">
                  </td>
                  <td>
                      <input class="form-check" type="radio" 
                        v-model="dM_DA" :id="'dM_DA'+this.getIndex()"
                        name="dM_DA" value="1:Data Acquisition">
                  </td>
                  <td>
                      <input class="form-check" type="radio" 
                        v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" 
                        name="dM_DA" value="2:Data Acquisition">
                  </td>
                  <td>
                    <input class="form-check" type="radio" 
                      v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" name="dM_DA" 
                      value="3:Data Acquisition">
                  </td>
                  <td>
                      <input class="form-check" type="radio" 
                        v-model="dM_DA"  :id="'dM_DA'+this.getIndex()" name="dM_DA" 
                        value="4:Data Acquisition">
                   </td>                                                                        
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Data Quality</span>
                    <ul>
                      <li>Definition of criteria and execution of quality assessment;</li>
                      <li>Execution of activities aiming at improving the quality of stored data (such as data cleaning); and</li>
                      <li>Definition of people responsible for data quality;</li>
                    </ul>  
                  </td>                  
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DQ" value="0:Data Quality"></td>
                  <td><input class="form-checkt" type="radio"  
                      v-model="dM_DQ" value="1:Data Quality"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DQ" value="2:Data Quality"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DQ" value="3:Data Quality"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DQ" value="4:Data Quality"></td>              
                </tr>   
                <tr>
                  <td class="titleTD">
                    <span class="title">Data Ownership</span>
                    <ul>
                      <li>Definition of criteria in order to establish data owners;</li>
                      <li>Inform which data are stored for LA projects and how they are analyzed; and</li>
                      <li>Access permission to data that the participants of projects have ownership over.</li>
                    </ul>  
                  </td>                   
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DO" value="0:Data Ownership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DO" value="1:Data Ownership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DO" value="2:Data Ownership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DO" value="3:Data Ownership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_DO" value="4:Data Ownership"></td>              
                </tr>   
                <tr>
                  <td class="titleTD">
                    <span class="title">Infrastructure</span>
                    <ul>
                      <li>Establishment and evolution of the IT infrastructure in order to support LA projects;</li>
                      <li>Management of IT resources to allow LA projects scale-up;</li>
                      <li>Technical support for researchers and users of LA projects;</li>
                      <li>Establishment of processes and criteria for hosting LA projects and storing their data;</li>
                      <li>Establishment of an architecture for LA projects; and</li>
                      <li>Assurance of security and privacy of students’ data.</li>                      
                    </ul>  
                  </td>                   
                  <td><input class="form-check" type="radio"  
                      v-model="dM_INF" value="0:Infrastructure"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_INF" value="1:Infrastructure"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_INF" value="2:Infrastructure"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_INF" value="3:Infrastructure"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dM_INF" value="4:Infrastructure"></td>              
                </tr>                                             
              </tbody>
            </table>
          </div>
        </div>     
       <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th><span class="title">Administration and Training</span></th>
                  <th scope="col" style="width: 90px;">Very Poor</th>
                  <th scope="col" style="width: 70px;">Poor</th>
                  <th scope="col" style="width: 70px;">Fair</th>
                  <th scope="col" style="width: 70px;">Good</th>
                  <th scope="col" style="width: 85px;">Excellent</th>                                                       
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="titleTD">
                    <span class="title">Funding</span>
                    <ul>
                      <li>Provisioning of resources for LA projects;</li>
                      <li>Definition of priorities for financing LA projects;</li>
                      <li>Providing financial support to the continuity of LA projects; and</li>
                      <li>Assessment of LA projects costs and their return to the Institution.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_FUN" value="0:Funding"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_FUN" value="1:Funding"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_FUN" value="2:Funding"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_FUN" value="3:Funding"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_FUN" value="4:Funding"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Leadership</span>
                    <ul>
                      <li>Establishment of leadership for the LA projects and program; and</li>
                      <li>Coordinated execution of LA projects in the Institution.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_LEA" value="0:Leadership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_LEA" value="1:Leadership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_LEA" value="2:Leadership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_LEA" value="3:Leadership"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_LEA" value="4:Leadership"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Stakeholders’ Identification and Involvement</span>
                    <ul>
                      <li>Identification of relevant stakeholders for the LA program; and</li>
                      <li>Encouraging stakeholder’s participation in LA projects.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_SII" value="0:Stakeholders’ Identification and Involvement"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_SII" value="1:Stakeholders’ Identification and Involvement"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_SII" value="2:Stakeholders’ Identification and Involvement"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_SII" value="3:Stakeholders’ Identification and Involvement"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_SII" value="4:Stakeholders’ Identification and Involvement"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Communication</span>
                    <ul>
                      <li>Dissemination of LA as a research field;</li>
                      <li>Promotion of the LA institutional program emphasizing its objectives and results; and</li>
                      <li>Improvement of both the projects and policies by Institution members’ feedback.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_COM" value="0:Communication"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_COM" value="1:Communication"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_COM" value="2:Communication"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_COM" value="3:Communication"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_COM" value="4:Communication"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Stakeholders’ Training</span>
                    <ul>
                      <li>Providing training for students to use LA tools;</li>
                      <li>Providing  training for teachers to use LA tools and interpret data;</li>
                      <li>Providing training for the IT team to manage both the data and infrastructure for the execution of LA projects; and</li>
                      <li>Providing training for stakeholders on Learning Analytics institutional policies.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_ST" value="0:Stakeholders’ Training"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_ST" value="1:Stakeholders’ Training"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_ST" value="2:Stakeholders’ Training"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_ST" value="3:Stakeholders’ Training"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="aT_ST" value="4:Stakeholders’ Training"></td>              
                </tr>                                                                
              </tbody>
            </table>
          </div>
        </div>  
       <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th><span class="title">Pedagogical Support</span></th>
                  <th scope="col" style="width: 90px;">Very Poor</th>
                  <th scope="col" style="width: 70px;">Poor</th>
                  <th scope="col" style="width: 70px;">Fair</th>
                  <th scope="col" style="width: 70px;">Good</th>
                  <th scope="col" style="width: 85px;">Excellent</th>                                                     
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="titleTD">
                    <span class="title">Pedagogical Planning of Solutions</span>
                    <ul>
                      <li>Consideration of pedagogical aspects in LA solutions planning;</li>
                      <li>Involvement of an educational team in the LA projects planning process;</li>
                      <li>Pedagogical support for teachers and students regarding the use of LA tools; and</li>
                      <li>Monitoring of LA solutions to assess whether they reach their pedagogical goals.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_PPS" value="0:Pedagogical Planning of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_PPS" value="1:Pedagogical Planning of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_PPS" value="2:Pedagogical Planning of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_PPS" value="3:Pedagogical Planning of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_PPS" value="4:Pedagogical Planning of Solutions"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Support in Interpreting Results</span>
                    <ul>
                      <li>Performing data interpretation considering both the context and pedagogical objectives;</li>
                      <li>Participation of Education specialists in the process of interpreting the analysis results; and</li>
                      <li>Definition of pedagogical guidelines for the interpretation of the analysis results.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_SIR" value="0:Support in Interpreting Results"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_SIR" value="1:Support in Interpreting Results"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_SIR" value="2:Support in Interpreting Results"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_SIR" value="3:Support in Interpreting Results"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_SIR" value="4:Support in Interpreting Results"></td>              
                </tr>     
                <tr>
                  <td class="titleTD">
                    <span class="title">Result-based Intervention</span>
                    <ul>
                      <li>Definition of legal, ethical and privacy criteria for carrying out pedagogical interventions;</li>
                      <li>Support for expanding pedagogical interventions; and</li>
                      <li>Involvement of a pedagogical team in the planning and execution of interventions.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_RI" value="0:Result-based Intervention"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_RI" value="1:Result-based Intervention"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_RI" value="2:Result-based Intervention"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_RI" value="3:Result-based Intervention"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="pS_RI" value="4:Result-based Intervention"></td>              
                </tr>                              
              </tbody>
            </table>
          </div>
        </div>   

       <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th><span class="title">Data Analysis</span></th>
                  <th scope="col" style="width: 90px;">Very Poor</th>
                  <th scope="col" style="width: 70px;">Poor</th>
                  <th scope="col" style="width: 70px;">Fair</th>
                  <th scope="col" style="width: 70px;">Good</th>
                  <th scope="col" style="width: 85px;">Excellent</th>                                                     
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="titleTD">
                    <span class="title">Development of Own Solutions</span>
                    <ul>
                      <li>Development of solutions that meet the Institution and relevant stakeholders’ needs;</li>
                      <li>Support for improvement and evolution of the complexity level of the LA solutions; and</li>
                      <li>Involvement of different departments and professionals in the design and development of LA solutions.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_DOS" value="0:Development of Own Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_DOS" value="1:Development of Own Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_DOS" value="2:Development of Own Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_DOS" value="3:Development of Own Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_DOS" value="4:Development of Own Solutions"></td>              
                </tr>
                <tr>
                  <td class="titleTD">
                    <span class="title">Acquisition of Ready-made Solutions</span>
                    <ul>
                      <li>Acquisition of tools for LA according to the institution needs and objectives;</li>
                      <li>Involvement of key stakeholders in the process of tool acquisition;</li>
                      <li>Definition of requirements for acquisition and criteria for acceptance of the tools; and</li>
                      <li>Evaluation of costs involved in purchasing tools.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_ARS" value="0:Acquisition of Ready-made Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_ARS" value="1:Acquisition of Ready-made Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_ARS" value="2:Acquisition of Ready-made Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_ARS" value="3:Acquisition of Ready-made Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_ARS" value="4:Acquisition of Ready-made Solutions"></td>              
                </tr>     
                <tr>
                  <td class="titleTD">
                    <span class="title">Evaluating the Effectiveness of Solutions</span>
                    <ul>
                      <li>Definition of criteria and assessment means for the solutions;</li>
                      <li>Standardization of procedures for assessing the effectiveness of LA solutions; and</li>
                      <li>Adoption of tools that have undergone evaluation procedures</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_EES" value="0:Evaluating the Effectiveness of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_EES" value="1:Evaluating the Effectiveness of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_EES" value="2:Evaluating the Effectiveness of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_EES" value="3:Evaluating the Effectiveness of Solutions"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="dA_EES" value="4:Evaluating the Effectiveness of Solutions"></td>              
                </tr>                              
              </tbody>
            </table>
          </div>
        </div>   
       <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th><span class="title">Legislation, Privacy, and Ethics</span></th>
                  <th scope="col" style="width: 90px;">Very Poor</th>
                  <th scope="col" style="width: 70px;">Poor</th>
                  <th scope="col" style="width: 70px;">Fair</th>
                  <th scope="col" style="width: 70px;">Good</th>
                  <th scope="col" style="width: 85px;">Excellent</th>                                                       
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="titleTD">
                    <span class="title">Legislation, Privacy, and Ethics</span>
                    <ul>
                      <li>Compliance of LA projects with laws and the Institution resolutions and rules;</li>
                      <li>Establishment of an Ethics Committee to evaluate LA projects; and</li>
                      <li>Specification of a Data Use Policy at the Institution.</li>
                    </ul>  
                  </td>
                  <td><input class="form-check" type="radio"  
                      v-model="lPE_lPE" value="0:Legislation, Privacy, and Ethics"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="lPE_lPE" value="1:Legislation, Privacy, and Ethics"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="lPE_lPE" value="2:Legislation, Privacy, and Ethics"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="lPE_lPE" value="3:Legislation, Privacy, and Ethics"></td>
                  <td><input class="form-check" type="radio"  
                      v-model="lPE_lPE" value="4:Legislation, Privacy, and Ethics"></td>              
                </tr>
              </tbody>
            </table>
          </div>
        </div>            

        <div class="row buttonSubmit">
          <div class="col-md-12">
            <button class="btn btn-success btn-lg">Evaluate your Higher Education Institution regarding the maturity in adopting LA</button> 
          </div>
        </div>
      </form>
    </div>
  </section>    
</div>
</template>

<script>
import router from '../router'

export default {
  name: "app",
  data: () => ({
    index: 0,
    values: String,
    labels: String,

    institutionName: String,
    yourPosition: String,

    dM_DA: null, 
    dM_DQ: null,
    dM_DO: null,
    dM_INF: null,

    aT_FUN: null,
    aT_LEA: null,
    aT_SII: null,
    aT_COM: null,
    aT_ST: null,

    pS_PPS: null,
    pS_SIR: null,
    pS_RI: null,

    dA_DOS: null,
    dA_ARS: null,
    dA_EES: null,

    lPE_lPE: null,

    dArray: []

  }),
  created() {
    this.institutionName= "",
    this.yourPosition= ""  
  },  
  methods: {
    getIndex() {
      return ++this.index
    },
    getIndexAtual() {
      return this.index
    },    
    submit() {

      if ( this.dM_DA== null || this.dM_DQ== null || 
          this.dM_DO== null || this.dM_INF== null || 
          this.aT_FUN== null || this.aT_LEA== null || 
          this.aT_SII== null || this.aT_COM== null || 
          this.aT_ST== null || this.pS_PPS== null || 
          this.pS_SIR== null || this.pS_RI== null || 
          this.dA_DOS== null || this.dA_ARS== null || 
          this.dA_EES== null || this.lPE_lPE== null ) {
            return
      }

      console.log("dM_DA: "+ this.dM_DA) 
      console.log("dM_DQ: "+ this.dM_DQ)
      console.log("dM_DO: "+ this.dM_DO)
      console.log("dM_INF: "+ this.dM_INF)

      console.log("-----------------SUBMIT FORM---------------------")
      console.log(this.institutionName)
      console.log(this.yourPosition)
      console.log(this.values)
      console.log(this.labels)

      if ( this.institutionName == "" ) {
        this.institutionName = 'Não informado'
      }
      if ( this.yourPosition == "" ) {
        this.yourPosition = 'Não informado'
      }      

      //Preparação dos dados
      this.values= ""
      this.labels= ""

      // - - - - - DM - -- - - - - - - - - 
      if ( this.dM_DA != null ) {
        this.dArray= this.dM_DA.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]        
      }
      if ( this.dM_DQ != null ) {
        console.log(":> "+ this.dM_DQ)
        this.dArray= this.dM_DQ.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]           
      }
      if ( this.dM_DO != null ) {
        this.dArray= this.dM_DO.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]             
      }
      if ( this.dM_INF != null ) {
        this.dArray= this.dM_INF.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    

      // - - - - - AT - -- - - - - - - - - 
      if ( this.aT_FUN != null ) {
        this.dArray= this.aT_FUN.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    
      if ( this.aT_LEA != null ) {
        this.dArray= this.aT_LEA.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    
      if ( this.aT_SII != null ) {
        this.dArray= this.aT_SII.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }          
      if ( this.aT_COM != null ) {
        this.dArray= this.aT_COM.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    
      if ( this.aT_ST != null ) {
        this.dArray= this.aT_ST.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    

      // - - - - - PS - -- - - - - - - - - 
      if ( this.pS_PPS != null ) {
        this.dArray= this.pS_PPS.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    
      if ( this.pS_SIR != null ) {
        this.dArray= this.pS_SIR.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }    
      if ( this.pS_RI != null ) {
        this.dArray= this.pS_RI.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }  

      // - - - - - DA - -- - - - - - - - - 
      if ( this.dA_DOS != null ) {
        this.dArray= this.dA_DOS.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]           
      }
      if ( this.dA_ARS != null ) {
        this.dArray= this.dA_ARS.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]             
      }
      if ( this.dA_EES != null ) {
        this.dArray= this.dA_EES.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }  

      // - - - - - LPE - -- - - - - - - - - 
      if ( this.lPE_lPE != null ) {
        this.dArray= this.lPE_lPE.split(":")
        this.values= this.values +";"+ this.dArray[0]
        this.labels= this.labels +";"+ this.dArray[1]         
      }

      console.log("-----------------ORIGINAL---------------------------")
      console.log(this.values)
      console.log(this.labels)
      console.log("------------------CORTANDO--------------------------")
      this.values= this.values.substring(1, this.values.length)
      this.labels= this.labels.substring(1, this.labels.length)
      this.institutionName= this.institutionName +" - "+ this.yourPosition
      console.log("-----------------RESULTADO---------------------------")
      console.log(this.values)
      console.log(this.labels)
      console.log(this.institutionName)
      console.log("--------------------------------------------")

      router.push({ name: 'graphic', params: { 
        pLabels: this.labels, 
        pValues: this.values,
        pInstitution: this.institutionName 
      } }) 
    },
  }
}

</script>

<style scoped>  
h1 {
  padding-bottom: 20px;
  text-align: justify;
}
h4 {
  padding-top: 20px;
  text-align: justify;
  font-weight: lighter;
}
span {
  font-weight: bolder;
  font-size: 1rem;
}

.title {
  text-align: center;
  padding: 20px;  
}

.align {
  text-align: justify;
}

i {
  font-size: 1rem;
  font-weight: bolder;
}

table {
  text-align: left;
}

th {
  font-size: small;
  text-align: left;
}

td {
  text-align: center;
}

.titleTD {
  text-align: left;
}

.buttonSubmit {
  padding-bottom: 30px;
}

thead {
    background-color: #F7C331!important;
    color: white !important;
}

</style>