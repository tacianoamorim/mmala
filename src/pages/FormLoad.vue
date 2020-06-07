<template>
  <div id="app">
    <section class="navbar secMMALA " style="height: 40vh">
      <div class="container fontePadrao .group" style="display: flex;flex-wrap: wrap;">
        <div id="divLateral">
          <h1>Load data</h1>
        </div>
      </div>
    </section>      
    <section>
      <button type="button" @click="save()" 
        class="btn btn-success btn-lg divButton">Save</button>
  </section>          
</div>
</template>

<script>

import db from '../firebase'

export default {
  name: "app",
  data: () => ({
    categories  : [],
    category    : Object,
    processAreas: [],
    processArea : Object,
    idx         : Number
  }),
  methods: {
    save() {

      /* ---------------------------------------------------------------------
                              A D D   C A T E G O R Y
         ------------------------------------------------------------------- */
      //let self = this
      let idx= 0

      this.category= new Object
      this.category.id= "AT"
      this.category.description= "Administration and Training"
      this.category.color= "#FFF000"
      this.category.order= 2
      this.categories[idx++]= this.category

      // ----------------------------------------------------------------
      this.category= new Object
      this.category.id= "DA"
      this.category.description= "Data Analysis"
      this.category.color= "#0000FF"
      this.category.order= 4
      this.categories[idx++]= this.category

      // ----------------------------------------------------------------
      this.category= new Object
      this.category.id= "DM"
      this.category.description= "Data Management"
      this.category.color= "#008000"
      this.category.order= 1
      this.categories[idx++]= this.category

      // ----------------------------------------------------------------
      this.category= new Object
      this.category.id= "PS"
      this.category.description= "Pedagogical Support"
      this.category.color= "#800080"
      this.category.order= 3
      this.categories[idx++]= this.category 

      // ----------------------------------------------------------------
      this.category= new Object
      this.category.id= "LPE"
      this.category.description= "Legislation, Privacy, and Ethics"
      this.category.color= "#FF0000"
      this.category.order= 5
      this.categories[idx++]= this.category      

      let x;
      for (x = 0; x < this.categories.length; x++) {
        let entity= this.categories[x]
        db.collection("categories").doc(entity.id).set(entity)
        .then(function() {
          console.log("Saved")
        })
        .catch(function(error) {
          console.error("Error writing document: ", error)
        });
      }      
   
      /* ---------------------------------------------------------------------
                  A D D   P R O C E S S   A R E A
         ------------------------------------------------------------------- */
      //let self = this
      idx= 0
      this.processArea= new Object
      this.processArea.id= "DM-DA"
      this.processArea.category= "DM"
      this.processArea.description= "Data Acquisition"
      this.processArea.purpose= 
          "To obtain data about students’ and teachers’ actions, supporting the expansion" 
          + " of the data sources available for analysis."
      this.processArea.goals= [
        "To identify and to provide access to data sources that can be used for data"
          +" analysis in LA, expanding the range of possible analysis;",
        "To acquire data under previously defined ethical and privacy criteria,"
          +" excluding from the scope data that do not contribute to the progress of the"
          +" teaching and learning process; and",
        "Encourage prior assessment of the data acquisition costs."
      ]
      this.processArea.level01= [
        "DA 1.1. Project members use predominantly manual processes to obtain the"
          +" necessary data to perform analysis.",
        "DA 1.2. Data selection for LA projects does not have explicit criteria."
          +" Data use follows current legislation. However, criteria such as suitability for"
          +" the teaching and learning process or Institution strategic criteria are not"
          +" formally assessed at this stage.",
        "DA 1.3. Project members have access to data regarding a restricted group of"
          +" students, for example, students from a given course."
      ]
      this.processArea.level01Examples= [
        'Log files collected through Learning Management Systems;',
        'Sociodemographic data;',
        'Historical data of student grades and attendance; and',
        'Library access data.'
      ]
      this.processArea.level01WorkProducts= [
        'Files containing the data to be used.'
      ]
      this.processArea.level02= [
        "DA 2.1. Learning Management System (LMS) goes through adjustments to"
          +" allow the acquisition of data that meet the needs of LA projects, which"
          +" happens through simple adjustments not available by default in the LMS.",
        "DA 2.2. Each project defines its criteria for collecting and using data, by"
          +" following the current legislation, and the Institution rules."
          +" Project leaders and their teams define the criteria considering ethical,"
          +" privacy, and legal issues.",
        "DA 2.3. It is possible to obtain data about students from different departments in"
          +" order to perform analysis.",
        "DA 2.4. The Institution records all the projects that request access to students’"
          +" data, as well as the name of the project leader."
          +" The objective is to keep a record of the data used in the LA projects. The"
          +" Information Technology department could keep that record, for instance."
      ]
      this.processArea.level02Examples= [
        "Video viewing records;",
        "Records of interactions between students and between students and teachers;",
        "Textual Data; and",
        "Clickstream."
      ]
      this.processArea.level02WorkProducts= [
        "Specification of the criteria used to acquire data in the design of each project; and",
        "Records of the projects and their responsible persons who have access to the data."
      ]
      this.processArea.level03= [
        "DA 3.1. A set of tools is available for LA projects, which helps to automate data"
          +" acquisition.",
        "DA 3.2. The LA tools in use at the Institution provide data to perform analysis,"
          +" such as dashboards.",
        "DA 3.3. The Institution has access to external data sources to perform analysis,"
          +" such as social media, as long as they are related to teaching and learning"
          +" experiences.",
        "DA 3.4. It is possible to combine data from multiple sources, both from internal"
          +" and external systems.",
        "DA 3.5. The institutional strategic objectives for the use of LA guide data"
          +" acquisition. It also respects the ethical and privacy criteria contained in the"
          +" Institution internal rules and resolutions.",
        "DA 3.6. It is possible to obtain data about all the students at the Institution in"
          +" order to perform analysis.",
        "DA 3.7. There is no detailed specification of costs for data acquisition, which"
          +" can lead to unfinished projects of data acquisition. "        
      ]
      this.processArea.level03Examples= [
        "Records of learning carried out on social networks;",
        "Data obtained through specific questionnaires to each project or self-"
          +" assessment questionnaires (such as the LASSI questionnaire);",
        "Micro interaction data, such as quick assessments (likes, emotes that"
          +" demonstrate the user’s feelings about specific topics or learning"
          +" objects);",
        "Usage data for LA tools, such as dashboards; and Multimodal data."   
      ]
      this.processArea.level03WorkProducts= [
        "Records of the sources used for data acquisition; and",
        "Data integration plans."        
      ]
      this.processArea.level04= [
        "DA 4.1. Data to perform analysis can be obtained by using specific types of"
          +" equipment (such as video games, virtual reality glasses, eye-tracker,"
          +" sensors, and mobile devices).",
        "DA 4.2. The costs of data acquisition for LA projects are calculated, so as to"
          +" allow for appropriate acquisition planning.",
        "DA 4.3. Stakeholders set and approve a data acquisition plan."
          +" It specifies the types of data that are strategic for the future LA projects,"
          +" projects with priorities in data acquisition, and those responsible for carrying"
          +" out the plan, which is periodically reviewed.",
        "DA 4.4. Stakeholders establish and approve an authorization process for"
          +" accessing data to be used in LA projects."
          +" In order to have access to the data, those responsible for the projects must"
          +" make a formal request. They must inform aspects such as goals for the data"
          +" use, evaluation criteria for including it (for example, if they are suitable to"
          +" support teaching and learning), identification of authorized sources,"
          +" authorities of approval, cost evaluation, the persons responsible for obtaining"
          +" data, and compliance with the Institution’s Data Use Policy."
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Spreadsheets that describe the data acquisition costs in detail;",
        "Data Acquisition Plan; and",
        "Specification of the data access authorization process."        
      ]
      this.processArea.questions= []
      this.processArea.relatedProcessesAreas= [
        "Legislation, Privacy, and Ethics: It contains guidelines for defining criteria"
          +" for the ethical use of data, guaranteeing the privacy of teachers and"
          +" students and the legitimacy of the initiatives; and",
        "Infrastructure: It provides information about the Information Technology"
          +" infrastructure that can support the implementation of data acquisition"
          +" activities."
      ]
      this.processAreas[idx++]= this.processArea

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DM-DQ"
      this.processArea.category= "DM"
      this.processArea.description= "Data Quality"
      this.processArea.purpose= "To obtain data about students’ and teachers’ actions,"
        +" supporting the expansion of thedata sources available for analysis."
      this.processArea.goals= [
        "To identify and to provide access to data sources that can be used for data"
          +" analysis in LA, expanding the range of possible analysis;",
        "To acquire data under previously defined ethical and privacy criteria,"
          +" excluding from the scope data that do not contribute to the progress of the"
          +" teaching and learning process; and",
        "Encourage prior assessment of the data acquisition costs."        
      ]
      this.processArea.level01= [
        "DQ1.1. There are no formally established processes to support data quality.",
        "DQ1.2. Project members perform a data cleaning process manually and locally,"
          +" in the pre-processing stage, when they observe inconsistencies during the"
          +" execution of LA projects."
          +" Project members adjust the detected inconsistencies only in the dataset used"
          +" for LA in order not to affect the reliability of the projects. However, the stored"
          +" data may remain inconsistent.",
        "DQ1.3. The criteria that define data quality are not clear or vary according to"
          +" each project.",
        "DQ1.4. There is no person (or team) responsible for measuring and maintaining"
          +" data quality." 
      ]
      this.processArea.level01Examples= [
        "Lists of inconsistencies identified and resolved in each project."
      ]
      this.processArea.level01WorkProducts= []
      this.processArea.level02= [
        "DQ2.1. Isolated actions contribute to data quality, even though the Institution"
          +" does not formally establish any process related to it."
          +" The IT and LA teams exchange information on identified inconsistencies that"
          +" result in actions aimed at improving data quality.",
        "DQ2.2. The inconsistencies identified during the execution of LA projects result"
          +" in a cleaning procedure in the location where the data is stored.",
        "DQ2.3. The persons responsible for data cleaning and the tools to be used are"
          +" formally defined."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "E-mails or reports that inform inconsistencies detected by the teams;",
        "Reports on the execution of data cleaning tasks; and",
        "Documents formalizing the data cleaning team and their responsibilities. "
      ]
      this.processArea.level03= [
        "DQ3.1. Data Profiling is determined by standardized processes, formally"
          +" established and registered."
          +" It is usually the first step in assessing data quality. It allows the analysis of"
          +" stored data leading to a better understanding of its content, identifying"
          +" deviations, and helping to define quality requirements.",
        "DQ3.2. Standardized processes, formally established and documented, have"
          +" been conceived to assess data quality in order to identify points in need of"
          +" improvement."
          +" The results of that assessment lead to actions aimed at quality improvement.",
        "DQ3.3. A data cleaning process is set up and followed in order to periodically"
          +" review the datasets available for use in LA projects."
          +" The IT team analyzes datasets according to the demands of the LA projects.",
        "DQ3.4. The Institution defines uniform criteria for the data quality assessment"
          +" of its projects, and it sets up and follows a plan to achieve them."
          +" These criteria can be, for example, accuracy, consistency, completeness,"
          +" integrity, readiness.",
        "DQ3.5. The cost of data quality activities (data profiling, quality assessment,"
          +" and cleaning) are acknowledged and analyzed in view of the benefits they "     
          +" create for the Institution both in terms of data quality preventive and corrective"
          +" projects.  "
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of the Data Profiling processes;",
        "Specification of Data Cleaning processes;",
        "Specification of data quality criteria defined at the institutional level; and",
        "Cost spreadsheets for activities related to Data Quality. "
      ]
      this.processArea.level04= [
        "DQ4.1. Processes and tools help to guarantee the data quality throughout the"
          +" system life cycle (from the input stage to the data analysis procedures),"
          +" according to previously defined quality criteria.",
        "DQ4.2. The data to be used in LA projects go through advanced and"
          +" standardized processes of data profiling, quality assessment, and data"
          +" cleaning, whenever necessary."
          +" A plan defines the frequency, the data to be analyzed (as detailed in the data"
          +" acquisition planning and aligned with the institutional objectives), the"
          +" evaluation techniques and procedures, the assessment objectives, and the"
          +" persons responsible for each task.",
        "DQ4.3. Interested parties define and approve the Data Quality Policy which"
          +" sets the processes for data quality, quality criteria and objectives, scope, tools"
          +" to be used, as well as the persons responsible for data quality.",
        "DQ4.4. A qualified team at the Institution is responsible for Data Quality"
          +" processes.",
        "DQ4.5. The Institution identifies and resolves the root causes of data quality"
          +" problems at their source." 
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the Data Quality Policy;",
        "Documents that formalize the Data Quality team and their responsibilities;"
          +" and Reports on data quality problem-solving."
      ]
      this.processArea.questions= []
      this.processArea.relatedProcessesAreas= [
        "Data Acquisition: It defines data acquisition priorities, which should also"
          +" have priority in tasks related to data quality."
      ]
      console
      this.processAreas[idx++]= this.processArea

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DM-DO"
      this.processArea.category= "DO"
      this.processArea.description= "Data Ownership"
      this.processArea.purpose= "To specify the ownership of data used in LA projects."
      this.processArea.goals= [
        "To define criteria in order to establish the owners of the data generated by"
          +" students’ and teachers’ actions;",
        "To provide transparent information on which data about students’ and"
          +" teachers’ academic actions are stored and how they are analyzed; and",
        "To allow access to data which the participants of the project have"
          +" ownership over."
      ]
      this.processArea.relatedProcessesAreas= [
        "Legislation, Privacy, and Ethics: It contains the guidelines for defining the"
          +" criteria for establishing Data Ownership;",
        "Support in Interpreting Results: It supports the process of interpreting the"
          +" results and can assist the task of making the data analysis process"
          +" transparent; and",
        "Infrastructure: It defines processes in order to establish the infrastructure"
          +" that allows project participants to access data they own."
      ]
      this.processArea.level01= [
        "DO1.1. There are no formally established criteria in LA projects that define"
          +" ownership over the data.",
        "DO1.2. Students and teachers are informed of what data on their academic"
          +" actions are stored and analyzed only upon explicit request."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "E-mails requiring access to information about stored data and their"
          +" responses."
      ]
      this.processArea.level02= [
        "DO2.1 The Institution consults students and teachers whether they agree to"
          +" authorize the use of their data for LA projects or not.",
        "DO2.2 Each project details the kind of data that will be analyzed, in order to"
          +" obtain the participants’ consent.",
        "DO2.3 Participants are aware of all the projects that use their data."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Consent forms for the use of data;",
        "Specification of the analyzed data in each LA project; and",
        "Catalog of projects that use participants’ data (also available to them)."
      ]
      this.processArea.level03= [
        "DO3.1 The Institution defines uniform criteria to classify all the data used in LA"
          +" projects regarding ownership. Students, the Institution, and other concerned"
          +" parties, such as government agencies, can own data.",
        "DO3.2 Students and teachers are informed on which data about their actions"
          +" the Institution stores and what are the purposes for storing and analyzing"
          +" them.",
        "DO3.3 The way the Institution analyzes data is made clear (that is, how the"
          +" algorithm used for analysis works). That brings greater transparency to the"
          +" data analysis process.",
        "DO3.4 Owners are responsible for deciding on matters involving the use of"
          +" their data."
          +" It includes the decision on use within the Institution, as well as on sharing it"
          +" with third parties. The exception is the data considered essential for the"
          +" students’ basic academic management. All exceptions must be justified."        
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of the criteria for data ownership and the purposes for"
          +" storage;",
        "Models or diagrams that explain the data analysis algorithms in the"
          +" projects; and",
        "Definition of data considered essential for the students’ basic"
          +" academic management."
      ]
      this.processArea.level04= [
        "DO4.1 Users can access the data they own.",
        "DO4.2 An approved and followed policy defines data ownership, and it is in line"
          +" with the Institution objectives and it also observes legal and ethical issues,"
          +" and it is in line with the Institution’s objectives and legal and ethical issues."
          +" This policy defines the data ownership criteria, and also who has access to"
          +" the relevant data. It defines the data life cycle (it includes the actions to be"
          +" taken when the course is over), and rights and liabilities regarding data use."
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the Data Ownership Policy."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea
      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DM-INF"
      this.processArea.category= "DM"
      this.processArea.description= "Infrastructure"
      this.processArea.purpose= "To support the establishment of an Information Technology"
        +" infrastructure compatible with the needs of Learning Analytics projects."
      this.processArea.goals= [
        "To plan the establishment and evolution of the Institution IT infrastructure"
        +" in order to support LA projects;",
        "To manage IT resources so that LA projects can scale up in terms of users"
        +" and data;",
        "To provide technical support for researchers and users of LA projects;",
        "To establish processes and criteria for hosting LA projects and storing their"
        +" data;",
        "To establish an architecture for LA projects; and",
        "To ensure the security and privacy of students’ data."
      ]
      this.processArea.relatedProcessesAreas= [
        +" Legislation, Privacy, and Ethics: It contains guidelines for defining data"
        +" security and privacy criteria;",
        "Data Acquisition: It defines policies and processes that guide data"
        +" acquisition and data access authorization; and",
        "Stakeholders’ Training: It encompasses the need for training of IT"
        +" professionals to deal with LA projects’ demands."
      ]
      this.processArea.level01= []
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= []
      this.processArea.level02= []
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= []
      this.processArea.level03= []
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= []
      this.processArea.level04= []
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= []
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea
     
     // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-FUN"
      this.processArea.category= "AT"
      this.processArea.description= "Funding"
      this.processArea.purpose= "To ensure the provision of resources for the Learning Analytics"
        +" program, supporting the continuity of the initiatives."
      this.processArea.relatedProcessesAreas= []
      this.processArea.goals= []
      this.processArea.level01= []
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= []
      this.processArea.level02= []
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= []
      this.processArea.level03= []
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= []
      this.processArea.level04= []
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= []
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea
     
     // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-FUN"
      this.processArea.category= "AT"
      this.processArea.description= "Funding"
      this.processArea.purpose= "To obtain data about students’ and teachers’ actions,"
        +" supporting the expansion of thedata sources available for analysis."
      this.processArea.relatedProcessesAreas= []
      this.processArea.goals= []
      this.processArea.level01= []
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= []
      this.processArea.level02= []
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= []
      this.processArea.level03= []
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= []
      this.processArea.level04= []
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= []
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea

      for (x = 0; x < this.processAreas.length; x++) {
        let entity= this.processAreas[x]
        db.collection("processAreas").doc(entity.id).set(entity)
        .then(function() {
          console.log("Saved")
        })
        .catch(function(error) {
          console.error("Error writing document: ", error)
        });
      }      
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
  padding-top: 60px;
  padding-bottom: 60px;
}

thead {
    background-color: #F7C331!important;
    color: white !important;
}

</style>