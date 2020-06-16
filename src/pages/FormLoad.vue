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
      console.log("Categories:")
      for (x = 0; x < this.categories.length; x++) {
        let entity= this.categories[x]
        db.collection("categories").doc(entity.id).set(entity)
        .then(function() {
          console.log(entity)
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
      this.processArea.category= "DM"
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
      this.processArea.level01= [
        "INF1.1 The IT infrastructure established and the IT team partially serve the LA "
        +"projects, since their main aim is to maintain the functioning of the existing "
        +"academic systems. ",
        "INF1.2 There are no defined processes to allow the use of the IT infrastructure "
        +"for hosting LA projects and storing data on the servers "
        +"Projects can get access to the infrastructure if there is compliance with "
        +"current legislation. However, the criteria that define access to this "
        +"infrastructure are not clear. ",
        "INF1.3 Each LA project follows its own architecture (concerning the definition of "
        +"components and the communication between them).  "   
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "E-mails that request access to servers to host LA projects."
      ]
      this.processArea.level02= [
        "INF2.1 The IT team collaborates with the LA projects, according to the "
        +"researchers’ and the application users’ demands. "
        +"Cooperation takes place both for the development of applications and for "
        +"eventual technical support to users of LA solutions. ",
        "INF2.2 The available infrastructure allows the use of unstructured data. ",
        "INF2.3 Senior managers analyze requests for access to students’ data since "
        +"there are no formally established criteria. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "E-mails requesting access to student data; and ",
        "E-mails recording the collaboration between the IT and LA teams. "
      ]
      this.processArea.level03= [
        "INF3.1 The stakeholders define and approve infrastructure requirements "
        +"requested for the implementation of LA projects (usually developers and IT "
        +"team). ",
        "INF3.2 A policy in respect of the use of IT resources and data access is defined "
        +"and approved. "
        +"It includes acceptance criteria for accessing the resources and patterns that "
        +"must be followed by LA projects. ",
        "INF3.3 There is a plan for the IT infrastructure evolution that encompasses the "
        +"needs of the LA projects. "
        +"The project goals, necessary resources, costs, and results to be achieved "
        +"with new purchases must be explicit. ",
        "INF3.4 There is an IT team in charge and also resources that allow the "
        +"planning and execution of projects which use different data sources. "
        +"There is a Data Integration Plan that assesses technologies, registers "
        +"procedures for integration and details the integration costs. The IT team is "
        +"multidisciplinary and trained. ",
        "INF3.5 IT technicians are formally assigned to provide technical support to "
        +"teachers and students using LA solutions. ",
        "INF3.6 Data storage guarantees the security and privacy of students and "
        +"teachers. ",
        "INF3.7 LA projects must follow a defined and approved architecture for their "
        +"integration into the Institution’s infrastructure (such as Open Learning "
        +"Analytics Project OLA, or xAPI). ",
        "INF3.8 The Institution infrastructure is registered and necessary changes are "
        +"approved by stakeholders. Those changes lead to updates to the documents "
        +"about the infrastructure. "  
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of the Policy for the use of IT resources; ",
        "Specification of the Data Integration Plan; ",
        "Documents formalizing the establishment of IT technician(s) responsible "
        +"for the technical support of the LA solutions; ",
        "Architecture Specification for LA Projects and their standards; and ",
        "IT Infrastructure Documentation. "
      ]
      this.processArea.level04= [
        "INF4.1 A dedicated infrastructure carries out and maintains LA projects, and a "
        +"qualified team is dedicated to meet the demands. "
        +"It includes a centralized data repository, which can be a Learning Record "
        +"Store, and the ability to tailor the infrastructure to run acquired or developed "
        +"LA tools. ",
        "INF4.2 There are policies and plans formally established for the IT "
        +"infrastructure maintenance and evolution. ",
        "INF4.3 The IT infrastructure allows the execution of large-scale projects. ", 
        "INF4.4 The available infrastructure allows owners (students, teachers, or other "
        +"concerned parties) to access their data, upon previous authorization. "
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "IT Infrastructure Evolution Policy and Plan."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea
     
     // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-FUN"
      this.processArea.category= "AT"
      this.processArea.description= "Funding"
      this.processArea.purpose= "To ensure the provision of resources for the Learning Analytics"
        +" program, supporting the continuity of the initiatives."
      this.processArea.relatedProcessesAreas= [
        "Data Acquisition, Data Quality, Infrastructure, Stakeholders’ Training, "
        +" Communication, Development of Own Solutions, Acquisition of Ready- "
        +" made Solutions: they specify processes and policies that require "
        +" investments. "
      ]
      this.processArea.goals= [
        "To plan the provision of resources for LA projects; ",
        "To define priorities for financing LA projects; ",
        "To financially support the continuity of LA projects; and ",
        "To figure out the costs of LA projects and their return to the Institution. "
      ]
      this.processArea.level01= [
        "FUN1.1 LA projects obtain funds upon demand, when it is requested through "
        +"proposals made by the researchers. ",
        "FUN1.2 LA projects compete with other research projects in the Institution "
        +"financing programs to obtain funds. "
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Research notices."
      ]
      this.processArea.level02= [
        "FUN2.1 In order to provide resources, managers evaluate LA projects together "
        +"with other Institution strategic projects. "
        +"However, the evaluation criteria are the same, both for LA and other projects. ",
        "FUN2.2 Each LA project stipulates its budget according to its own criteria. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Budget spreadsheets for each project."
      ]
      this.processArea.level03= [
        "FUN3.1 The Institution Strategic Planning includes resources dedicated "
        +"explicitly to LA projects. "
        +"Resources are meant both for the execution of new projects as well as "
        +"ongoing projects’ continuity and the team’s training. ",
        "FUN3.2 Stakeholders set out and approve a set of criteria, in line with the "
        +"purposes defined by the Institution for the use of LA, to guide the project "
        +"funding priorities. ",
        "FUN3.3 The Institution is aware of the costs of the LA program. In addition, each "
        +"project stipulates its budget according to the financing model for LA projects "
        +"defined by the Institution. "
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Institution Strategic Planning has planned resources for LA; ",
        "Specification of the priority criteria for financing LA projects; and ",
        "Specification of the Model for Financing LA Projects. "
      ]
      this.processArea.level04= [
        "FUN4.1 Stakeholders approve a Financing Program for LA. "
        +"The Institution reviews the program annually and defines the Institution’s "
        +"financial objectives for the implementation of LA, which may include cost "
        +"reduction, for example. It also sets out the requirements for financing LA "
        +"projects, the financing priorities, and the accountability model. ",
        "FUN4.2 The LA financing of projects is in line with the Institution objectives, "
        +"which in turn, includes the use of LA. ",
        "FUN4.3 The Institution can determine the LA program overall financial impact "
        +"(and not just the costs) and whether it has achieved the expected financial "
        +"objectives. "
        +"This study helps to determine the effectiveness of the LA funding program, "
        +"assisting in its re-evaluation. "
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the LA Financing Program.;",
        "Reports on financial impacts of LA Program."        
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea
     
     // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-LEA"
      this.processArea.category= "AT"
      this.processArea.description= "Leadership"
      this.processArea.purpose= "To define leaders to guide the LA program in order"
        +" to provide uniformity in the project progress."
      this.processArea.relatedProcessesAreas= [
        "Stakeholders Identification and Involvement: It provides guidelines for "
        +"stakeholder involvement in LA projects, which must be conducted by the "
        +"leadership; and ",
        "Communication: It establishes guidelines for communication about LA "
        +"projects, which must also be managed by the leadership. "
      ]
      this.processArea.goals= [
        "To establish leadership for the LA projects and program; and ",
        "To coordinate the execution of LA projects in the Institution. "
      ]
      this.processArea.level01= [
        "LEA1.1 There is no formally established leadership to  "
        +"follow the progress of LA projects. ",
        "LEA1.2 Project members execute the projects with poor or non existent "
        +"communication between other project leaders. "
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Project members use e-mails and other informal means to communicate "
        +"actions about LA. "
      ]
      this.processArea.level02= [
        "LEA2.1 It is possible to identify local leaders "
        +"in the LA projects execution. ",
        "LEA2.2 LA project actions become informally managed by a "
        +"leader in order to achieve their objectives. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Documents that formalize the establishment of working groups for LA."
      ]
      this.processArea.level03= [
        "LEA3.1 The Institution formally establishes a qualified leader, recognized "
        +"by the senior management and his peers, who has the necessary skills "
        +"and competencies to conduct the projects. ",
        "LEA3.2 The leader has the autonomy to make decisions about LA "
        +"projects, in cooperation with the actions of the senior management. ",
        "LEA3.3 There are defined roles and responsibilities for professionals who "
        +"carry out LA projects at the level of research groups, departments, and "
        +"institutions. ",
        "LEA3.4 The leader has the autonomy required to plan, deal with and "
        +"resolves conflicts in the Learning Analytics program. ",
        "LEA3.5 The program leader organizes actions to encourage the "
        +"involvement of students and professionals from different departments, in "
        +"order to minimize problems of resistance to change. "
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Documents that formalize the establishment of leadership and its "
        +"responsibilities; and ",
        "Specification of the roles of each professional in LA projects. "
      ]
      this.processArea.level04= [
        "LEA4.1 There is a team to support the LA program management."
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Documents that formalize the establishment of the management team and "
        +"their responsibilities;"
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-SSI"
      this.processArea.category= "AT"
      this.processArea.description= "Stakeholders’ Identification and Involvement"
      this.processArea.purpose= "To guide stakeholder involvement in LA projects."
      this.processArea.relatedProcessesAreas= [
        "Communication: It establishes guidelines for the "
        +"communication of LA projects, which provide support in "
        +"actions for the involvement of stakeholders. "
      ]
      this.processArea.goals= [
        "To identify relevant stakeholders for the LA program; and ",
        "Stimulate stakeholder’s participation in LA projects."
      ]
      this.processArea.level01= [
        "SII1.1. LA projects take place mainly through the action of "
        +"individuals and in research projects in which a limited number "
        +"of students participate.",
        "SII1.2. Stakeholders of each project are not clearly identified.",
        "SII1.3. There is no involvement of senior management in the "
        +"execution of LA projects."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Establishment of working groups."        
      ]
      this.processArea.level02= [
        "SII2.1. LA projects take place with the involvement of " 
        +"different stakeholders (students, educators, teachers, "
        +"administrators, and technicians).",
        "SII2.2. Project members previously identify the stakeholders"
        +" that can contribute to project execution."   
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Survey of the stakeholders of each project."
      ]
      this.processArea.level03= [
        "SII3.1. The Institution identifies project stakeholders, who are committed to project success.",
        "SII3.2. Stakeholders participate in the projects, carrying out defined functions, and working cooperatively (that is, IT staff, students, and teachers).",
        "SII3.3. The involvement of senior management reinforces the credibility and sponsors the execution of LA projects."
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of stakeholder roles; and",
        "Formalization of senior management responsibilities in LA projects."        
      ]
      this.processArea.level04= [
        "SII4.1. There are institutional policies to strengthen the involvement of stakeholders in LA projects, from their very outset, in order to minimize problems of resistance to change.",
        "SII4.2. Stakeholders’ feedback improves LA projects.",
        "SII4.3. The entire Institution supports LA projects and commits to their success."
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the Stakeholder Involvement Policy; and",
        "Specification of feedbacks from stakeholders."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea     
      
      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-COM"
      this.processArea.category= "AT"
      this.processArea.description= "Communication"
      this.processArea.purpose= "To promote the LA program by disclosing its results to the Institution."
      this.processArea.relatedProcessesAreas= [
        "Funding: It plans resources direction to LA projects, which must include communication; and",
        "Legislation, Privacy, and Ethics: It specifies the guidelines that must be published and discussed at the Institution."
      ]
      this.processArea.goals= [
        "To promote the dissemination of LA as a research field;",
        "To present the LA institutional program emphasizing its objectives and results; and",
        "To give and receive feedback in order to improve both the projects and policies related to Ethics and Privacy."
      ]
      this.processArea.level01= [
        "COM1.1. LA projects results are not shared, except with the specific groups in which they are carried out."
        +"Communication is decentralized, carried out by individuals who participate in the projects.",
        "COM1.2. The objectives of LA projects implementation are not clearly communicated to stakeholders.",
        "COM1.3. The benefits that LA can bring to each of the stakeholders (students, teachers, and Institution) are not clearly communicated either."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "E-mails and reports exposing the results of LA projects."
      ]
      this.processArea.level02= [
        "COM2.1. There are actions aiming at making the LA theme public to different departments, through lectures and short courses. "
        +"Those actions are focused on promoting the research field. The level and frequency of actions can vary.",
        "COM2.2. The dissemination actions include information about the projects underway at the Institution. "
        +"Communication explains the objectives of project execution, their benefits, and the results achieved. Such release can bring about the students’ and teachers’ interest in knowing and using LA tools.",
        "COM2.3. Project members communicate LA-related laws, as well as privacy and ethics policies, and they are widely discussed with the Institution members. "
        +"As a result, the Institution can improve internal policies."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Disclosure folders, slide shows; and",
        "Specification of feedback from events discussing LA. "       
      ]
      this.processArea.level03= [
        "COM3.1. There are periodical events to promote the institutional Learning Analytics program. "
        +"At these events, the Institution introduces the LA theme and reinforces the scope and objectives of ongoing projects to other members of the Institution. Benefits, results obtained, and students’ rights and duties in respect of LA projects are also discussed.",
        "COM3.2. The Institution official channels are fed with information about LA projects, their members, and results obtained.",
        "COM3.3. There is a communication channel for students to evaluate LA projects, ensuring their anonymity."
        +"The communication channel may include an ombudsman in order to receive criticism, compliments, suggestions, complaints, and denunciations from those involved in the projects."
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Update of the institutional website with the projects and execution results of the LA projects; and",
        "Specification of the information received by the ombudsman, ensuring the confidentiality and anonymity of students."
      ]
      this.processArea.level04= [
        "COM4.1. There is a strategic plan for communication. Stakeholders define, approve, and annually review this plan, which reflects the objectives of the Institution for the use of LA. "
        +"The plan defines the frequency of events, the parties in charge, the duration, the target public, the communication aims, as well as the topics to be communicated and the schedule for the event.",
        "COM4.2. The Institution discloses the projects’ results externally.",
        "COM4.3. A Sales Plan rules the negotiation of LA tools for commercialization. ",
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Communication Plan specification;",
        "Scientific articles, lectures, interviews, advertising banners; and",
        "Sales Plan specification."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea         

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "AT-STR"
      this.processArea.category= "AT"
      this.processArea.description= "Stakeholders’ Training"
      this.processArea.purpose= "To promote actions that enable stakeholders to participate in LA projects."
      this.processArea.relatedProcessesAreas= [
        "Stakeholders Identification and Involvement: It informs the stakeholders that must be reached by the training planned;",
        "Support in Interpreting Results: It supports data interpretation, which should be a target of training; and",
        "Legislation, Privacy, and Ethics: It includes the guidelines that should be a target of training programs.   "     
      ]
      this.processArea.goals= [
        "To train students to use LA tools;",
        "To train teachers to use LA tools and interpret data;",
        "To train the IT team to manage the necessary data and infrastructure for the execution of LA projects; and",
        "To train stakeholders to follow Learning Analytics institutional policies properly.      "  
      ]
      this.processArea.level01= [
        "STR1.1. A restricted group of users can use the tools, as only a few people have learnt how to do it."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "User manual for the tools."
      ]
      this.processArea.level02= [
        "STR2.1. Members of LA projects participate in training to master the tools in use."
        +"The training enables students and teachers to use the tools, increasing, therefore, the number of LA users.",
        "STR2.2. Project members deliver training sessions on the ethical guidelines for the use of data, based on the legislation, and on the Institution rules and resolutions."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Training materials about tools and legislation, ethics, and privacy."
      ]
      this.processArea.level03= [
        "STR3.1. Stakeholders (students, teachers, IT staff, and others) periodically participate in training sessions, either in person or online."
        +"The Institution plans the training concerning the number of vacancies, target audience, content, duration, costs, and periodicity. Each group receives the relevant training, which ranges from the use of LA tools to those skills necessary for the maintenance and evolution of the Institution IT services.",
        "STR3.2. Stakeholders participate in training sessions on the LA theme offered by accredited institutions in order to foster innovation projects.",
        "STR3.3. The Institution documents the training carried out, in order to create a knowledge repository, and the trainees, on their turn, are empowered to train new stakeholders.",
        "STR3.4. The Institution hires trained professionals to reinforce the LA team. "       
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of the Training Plan; and",
        "Training documentation."
      ]
      this.processArea.level04= [
        "STR4.1. All the stakeholders participate in training sessions whose contents cover all LA-related policies."
        +"objective is to create a unified view of the LA theme, its institutional purposes, as well as the ethical guidelines adopted by the Institution.",
        "STR4.2. A multidisciplinary team carries out training courses that provide teachers with the necessary knowledge regarding data interpretation."        
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Presentations on laws and institutional rules, resolutions, and policies on the use of LA; and Training material for data interpretation. "       
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea  

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "PS-PPS"
      this.processArea.category= "PS"
      this.processArea.description= "Pedagogical planning of solutions"
      this.processArea.purpose= "To facilitate the integration of pedagogical foundations within the LA solutions."
      this.processArea.relatedProcessesAreas= [
        "Evaluating the Effectiveness of Solutions: It contains guidelines for evaluating solutions, which can guide the evaluation of the pedagogical effectiveness of solutions."
      ]
      this.processArea.goals= [
        "To consider pedagogical aspects in LA solutions;",
        "To involve an educational team in the LA projects planning process;",
        "To support teachers and students regarding the use of LA tools; and",
        "To monitor the LA solutions in order to assess whether they reach their pedagogical goals."        
      ]
      this.processArea.level01= [
        "PPS1.1. The planning of LA solutions gives priority to technological issues, which can lead to neglecting pedagogical aspects. "
        +"In many contexts, the development of LA solutions uses the available data and analysis techniques that researchers are already familiar with. Therefore, "
        +"the planning of solutions is more focused on technologies and less on pedagogical objectives."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Guides for using tools that inform the aspects considered in their design."        
      ]
      this.processArea.level02= [
        "PPS2.1. The planning of LA solutions takes pedagogical objectives into consideration. "
        +"This planning identifies the pedagogical objectives to be achieved, as well as the outline which the data analysis must follow in order to reach the planned objectives. This action is carried out through cooperation between educators specialists and LA project leaders.",
        "PPS2.2. Education specialists aid the adoption of LA tools, supporting the teacher with integrating these tools into their pedagogical practices."
        +"These actions can take place through lectures, training, forums, or working groups.",
        "PPS2.3. Education specialists guide teachers and students in the use of tools and also with respect to the changes that LA can bring to teaching and learning."
        +"A support team can help clarify students’ and teachers’ doubts about the use of these new technologies. They can also contribute to steering pedagogical changes, if necessary."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Survey of the pedagogical objectives as requirements for the tools; and",
        "Training and lecture materials on pedagogical adoption of LA. "       
      ]
      this.processArea.level03= [
        "PPS3.1. In addition to the pedagogical objectives, the planning for the development of LA tools considers the necessary pedagogical resources and possible interventions to be performed by teachers.",
        "PPS3.2. The planning of LA solutions takes place necessarily in conjunction with a pedagogical team. Moreover, LA solutions align with theories and pedagogical evidence.",
        "PPS3.3. An educational team monitors the use of LA tools in order to assess whether they reach their pedagogical objectives. "
        +"The concerned parties set out and approve the relevant evaluation criteria, from the moment the tool is conceived. Quantitative and qualitative research can be used for that purpose.",
        "PPS3.4. The pedagogical aspects of the solutions are planned in line with the Institution objectives for the use of LA."
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Survey of the pedagogical planning carried out by the teachers in association with the datasets used; and",
        "Reports on pedagogical assessment of the tools."
      ]
      this.processArea.level04= [
        "PPS4.1. There is a set of pedagogical guidelines approved for the design and use of LA solutions in the Institution.",
        "PPS4.2. The monitoring of solutions generates proposals aiming at their improvement."        
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of pedagogical guidelines for the development of LA tools; and",
        "Reports identifying suggestions for improving the tools.  "      
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea 

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "PS-SIR"
      this.processArea.category= "PS"
      this.processArea.description= "Support in Interpreting Results"
      this.processArea.purpose= "To employ pedagogical knowledge in order to support researchers, teachers, and students in the interpretation of the results presented by the LA tools."
      this.processArea.relatedProcessesAreas= [
        "Pedagogical Planning of Solutions: It contains guidelines for pedagogical planning, which also directs data interpretation. "       
      ]
      this.processArea.goals= [
        "To align data interpretation to the context and to previously defined pedagogical objectives;",
        "To expand the perspectives for interpreting the analysis results carried out in LA projects through the participation of Education specialists; and",
        "To define pedagogical guidelines for the interpretation of the analysis results."
      ]
      this.processArea.level01= [
        "SIR1.1. The analysis results available in the LA tools are mostly interpreted by their developers, based upon scientific foundations."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Guides for tools using that inform the aspects considered in the data analysis."
      ]
      this.processArea.level02= [
        "SIR2.1. The interpretation process of LA results takes into consideration the pedagogical objectives defined for the use of the tool.",
        "SIR2.2. The interpretation process of LA results is supported by Education specialists."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Specification of the pedagogical design used in the data interpretation."
      ]
      this.processArea.level03= [
        "SIR3.1. Besides the pedagogical objectives defined for the use of the tool, the interpretation process of LA results considers the context in which the data were obtained, as well as interventions carried out by the teachers. "
        +"Since all those issues (objectives, context, and teachers’ interventions) may interfere in the interpretation of results, it is necessary to take them into consideration in that process (LOCKYER et al., 2013). Such analysis can be carried out, for example, by using qualitative or quantitative methods.",
        "SIR3.2. A formally established pedagogical team (who is responsible for planning pedagogical issues in ongoing LA projects) also contributes to the interpretation of LA results. "
        +"Such support is made available to the users as well as to the developers of the tools.",
        "SIR3.3. LA tools incorporate the interpretation of the results in formats that are easy for users to understand. "
        +"The most appropriate techniques for presenting results should be evaluated (for example, using data visualization techniques)."
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Survey of the objectives, context, and interventions of teachers associated with the datasets;",
        "Documents that formalize the pedagogical team establishment and their responsibilities; and"   
      ]
      this.processArea.level04= [
        "SIR4.1. The concerned parties approve the data interpretation outline for each project. "
        +"That is, the pedagogical team defines, and the stakeholders approve, which data interpretation frameworks the Institution should adopt for each tool. An example of an interpretation framework is available in the work of Bakharia et al. (2016).",
        "SIR4.2. The Institution provides the concerned parties with access to the data interpretation models of the tools in each LA project."
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of guidelines for data interpretation. ",
        "Specification and publication of data interpretation models."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea 

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "PS-RBI"
      this.processArea.category= "PS"
      this.processArea.description= "Result-based Intervention"
      this.processArea.purpose= "To support pedagogical intervention based on LA results."
      this.processArea.relatedProcessesAreas= [
        "Pedagogical Planning of Solutions: It guides the planning of LA solutions, and it must include the necessary pedagogical interventions in this planning;",
        "Support in Interpreting Results: It supports the process of interpreting the results, which should support the pedagogical intervention actions;",
        "Evaluating the Effectiveness of Solutions: It contains guidelines for evaluating LA solutions, which includes the success of the interventions carried out by teachers; and",
        "Legislation, Privacy, and Ethics: It contains guidelines for carrying out interventions that meet legal, ethical, and privacy criteria."
      ]
      this.processArea.goals= [
        "To support the definition of criteria for carrying out pedagogical interventions, so that they meet legal, ethical and privacy requirements;",
        "To support the expansion of pedagogical interventions; and",
        "To involve a pedagogical team in the planning and execution of interventions."
      ]
      this.processArea.level01= [
        "RBI1.1. The developers of LA applications themselves define the criteria that guide the pedagogical interventions.",
        "RBI1.2. Teachers who use LA tools carry out interventions, in most cases, manually."
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Messages reporting the interventions made by teachers."
      ]
      this.processArea.level02= [
        "RBI2.1. Members of each project define and approve criteria that guide pedagogical interventions. "
        +"All teachers participating in LA projects act in a uniform manner.",
        "RBI2.2. LA projects carry out interventions semi-automatically, but they use personalized information about each student or teacher. ",
        "RBI2.3. A more significant number of students, such as a course or department, receive pedagogical interventions. ",
        "RBI2.4. Interventions take place under the occasional guidance of educators. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Specification of the criteria for carrying out pedagogical interventions for each project;",
        "Specification of personalized messages sent to students; and",
        "Specification of pedagogical guidelines for carrying out interventions."
      ]
      this.processArea.level03= [
        "RBI3.1. The concerned parties define and approve the criteria for carrying out pedagogical interventions at an institutional level. "
        +"All interventions, in the different projects, take place in a uniform way, according to the educational, legal, ethical, and privacy criteria defined by the Institution.",
        "RBI3.2. Interventions take place automatically, using personalized data, for all the participants in LA projects. "
        +"The pedagogical team supports the design of feedback messages.",
        "RBI3.3. There is a formally established pedagogical team that supports teachers in planning pedagogical interventions. "
        +"Each intervention must define its objectives, actions, expected results, and the persons in charge.",
        "RBI3.4. The pedagogical team monitors the interventions to assess whether their results follow the planning. "
        +"If the interventions do not meet the previously established objectives, the pedagogical team can provide new directions to the teachers. They also support teachers and students in case of doubts and difficulties."
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of institutional criteria for carrying out pedagogical"
        +"interventions;",
        "Documents formalizing the pedagogical team establishment and their"
        +"responsibilities;",
        "Specification of feedback messages for students and teachers; and",
        "Intervention evaluation reports and their results. There should also be"
        +"guides to teachers on possible changes in strategy, if necessary."
      ]
      this.processArea.level04= [
        "RBI4.1. The Data Use Policy defines and guides pedagogical interventions "
        +"based on the analysis results."        
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Reports that certify that the pedagogical interventions carried out on "
        +"projects follow the Data Use Policy."
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea 

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DA-DOS"
      this.processArea.category= "DA"
      this.processArea.description= "Development of own solutions"
      this.processArea.purpose= "To support the Institution in the planning and execution of LA solutions."
      this.processArea.relatedProcessesAreas= [
        "Data Acquisition: It directs the acquisition of data to be used in data "
        +"analysis; ",
        "Data Quality: It contains guidelines for assessing and improving the quality "
        +"of data to be used in data analysis; ",
        "Infrastructure: It guides the establishment of the necessary IT infrastructure "
        +"for LA projects, whether they are developed or acquired by the Institution; ",
        "Pedagogical planning of solutions: It guides the use of pedagogical "
        +"concepts in the development of LA solutions; ",
        "Stakeholders Identification and Involvement: It supports the identification of "
        +"relevant stakeholders to support the development of solutions; ",
        "Communication: It guides communication and tools’ sales; and "
        +"Legislation, Privacy, and Ethics: It contains guidelines for the development "
        +"solutions that meet legal, ethical, and privacy criteria.  "
      ]
      this.processArea.goals= [
        "To develop solutions that meet the Institution and relevant stakeholders’ "
        +"needs; ",
        "To support the improvement and evolution of the complexity level of the "
        +"solutions developed; and ",
        "To involve different departments and professionals in the design and "
        +"development of LA solutions. "
      ]
      this.processArea.level01= [
        "DOS1.1. Researchers in personal initiative projects are the leading developers of "
        +"LA solutions. ",
        "DOS1.2. The projects meet the research objectives of the leading researcher. ",
        "DOS1.3. LA applications developed at the Institution have a complexity level ",
        +"considered low (see Siemens et al., 2013, about the level of LA "
        +"sophistication). ",
        "DOS1.4. Only specific classes or courses use LA applications. "
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Guides for using tools that inform the objectives to achieve."
      ]
      this.processArea.level02= [
        "DOS2.1. The LA solutions developed at the Institution involve a group of "
        +"researchers or a department. "
        +"There is broad participation of the collaborators both regarding the tools "
        +"conception and their use. ",
        "DOS2.2. LA projects meet the objectives of the group or department in which "
        +"they are carried out. ",
        "DOS2.3. Different stakeholders in other departments use and support the "
        +"improvement of solutions, by giving feedback on their use. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Survey of other groups’ needs in order to guide the design and "
        +"development of LA tools; and ",
        "Tool usage assessment reports. "
      ]
      this.processArea.level03= [
        "DOS3.1. A multidisciplinary work team is formally established for the "
        +"development of LA solutions. "
        +"The work team may involve professionals from different fields of knowledge, "
        +"such as Education, Computer Science, and Pedagogy, among others. ",
        "DOS3.2. The Institution objectives guide the development of LA solutions. "
        +"Nevertheless, Institution and research professionals have their interests "
        +"aligned. "
        +"The concerned parties define and approve a work plan to attend the "
        +"Institution’s strategic planning for the use of LA. ",
        "DOS3.3. The solutions become comprehensive to different institutional "
        +"departments and meet their specific needs. ",
        "DOS3.4. LA applications increase their complexity level. "
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Documents formalizing the establishment of the multidisciplinary work team "
        +"for LA and their responsibilities; and ",
        "Work Plan for LA containing a survey of the Institution objectives. " 
      ]
      this.processArea.level04= [
        "DOS4.1. Key stakeholders have their objectives considered when designing LA "
        +"solutions. ",
        "DOS4.2. There is a defined and approved policy for analyzing the impact LA "
        +"tools may cause on the Institution, determining the criteria for assessing "
        +"whether or not they should be developed. "
        +"The concerned parties define and approve this policy and establish the "
        +"possible impacts (educational, financial, institutional, commercial, among "
        +"others) on the Institution and the evaluation criteria to decide for the tool’s "
        +"development or not. ",
        "DOS4.3. Mature solutions are made public or sold. "
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "The Work Plan for LA includes a survey of the key stakeholders’ "
        +"objectives; ",
        "Specification of the Impact Analysis Policy; and ",
        "Sales Plan for LA tools specification. "
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea       

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DA-ACQ"
      this.processArea.category= "DA"
      this.processArea.description= "Acquisition of ready-made solutions"
      this.processArea.purpose= "To support the acquisition process of LA solutions available at the academy and at "
        +"the market, whether free or paid. This process area considers the activities contained "
        +"in ISO 12207:2017 for software acquisition, adequately adapted to the context of this "
        +"model. "
      this.processArea.relatedProcessesAreas= [
        "Data Acquisition: It guides the data acquisition process, helping to inform if "
        +"the necessary data for the execution of the tools to be acquired can be "
        +"obtained; ",
        "Stakeholders Identification and Involvement: It supports the identification of "
        +"important stakeholders to assist the process of evaluating the LA tools’ "
        +"acquisition; ",
        "Stakeholders’ Training: It guides the stakeholders’ training, including for "
        +"using LA tools; and ",
        "Infrastructure: It guides the establishment of the necessary IT infrastructure "
        +"for LA projects, whether developed by the Institution or acquired. "
      ]
      this.processArea.goals= [
        "To guide the acquisition of tools for LA, based on the institutions needs and "
        +"objectives; ",
        "To involve key stakeholders in the process of tool acquisition; ",
        "To define the requirements for acquisition and criteria for acceptance of the "
        +"tools; and ",
        "To understand in advance the costs involved in purchasing tools, which "
        +"may not be limited to the tool’s price. "
      ]
      this.processArea.level01= [
        "ACQ1.1. Senior management centralizes the decision to acquire LA tools. There "
        +"are no clearly defined criteria. "
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "E-mails, requests, or contracts in the Institution standard formats."
      ]
      this.processArea.level02= [
        "ACQ2.1. The Institution consults researchers in LA and related fields about the "
        +"acquisition of new tools. ",
        "ACQ2.2. The acquisition of tools may cause the need for unplanned adaptations "
        +"by the Institution. "
        +"The Institution may have to undergo adaptations to adopt the tool acquired, "
        +"concerning, for example, the systems used or the necessary infrastructure. "   
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "E-mails with informal inquiries about tool acquisition. "
      ]
      this.processArea.level03= [
        "ACQ3.1. The Institution knows its needs, and it is possible to convert them into "
        +"requirements the LA tools must meet. "
        +"The stakeholders identify and specify the requirements. ",
        "ACQ3.2. The acquired solutions are in line with the Institution objectives for the "
        +"use of LA. ",
        "ACQ3.3. The concerned parties define and approve the criteria for accepting "
        +"each solution. That is, the requirements the tools must meet to be considered "
        +"ready for use and approved. ",
        "ACQ3.4. The concerned parties also define and approve the acquisition costs, "
        +"including not only the price (in the case of paid tools) but also the costs of "
        +"infrastructure, human resources training, and data acquisition, among others. ",
        "ACQ3.5. The Institution previously takes notice of the infrastructure requirements "
        +"for the use of the tool to be purchased. "
        +"For example, it identifies the data needed to use the tools before the "
        +"purchase decision. If it is not available, the Institution must demonstrate that it "
        +"is feasible to acquire the data and takes this issue into consideration when "
        +"making decisions. ",
        "ACQ3.6. The parties sign a purchase contract. "
        +"It must include clauses to cover details such as the tool objectives and scope, "
        +"pricing and payment conditions of each part, implementation schedule, "
        +"person responsible for the contract performance (internal and external), "
        +"prerequisites (which must include human and infrastructure resources), "
        +"expected objectives, conditions of acceptance, risks, tool copyright, and data "
        +"usage rights. For freely available tools, this contract may not apply. ",
        "ACQ3.7. A manager is formally appointed to monitor the progress of the contract "
        +"execution. "
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of the Institution requirements for using LA; ",
        "Specification of the acceptance criteria for each solution; ",
        "Spreadsheets for tool acquisition costs; ",
        "Documents that formalize the establishment of the responsible person for "
        +"monitoring the contract and its duties; and ",
        "Specification of an Acquisition Contract that takes into account the "
        +"specificities of LA. "
      ]
      this.processArea.level04= [
        "ACQ4.1. The Institution defines criteria that support the decision to acquire or "
        +"develop the LA solution. ",
        "ACQ4.2. The acquisition process of LA solutions includes consultation of "
        +"different suppliers in order to identify which proposal is best suited to the "
        +"Institution needs. ",
        "ACQ4.3. The Institution assesses and manages the impact of changes on "
        +"procurement contracts. ",
        "ACQ4.4. There is a defined process to be followed in the acquisition of LA "
        +"solutions. "
        +"The process considers the assessment of the Institution needs, the cost, "
        +"acceptance requirements, and, where applicable, the signature and, finally, "
        +"the termination of the contract with the acceptance of the product. "
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the criteria that define the decision to acquire or develop "
        +"the tools; and ",
        "Specification of the LA Solutions Acquisition Process. "
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea   

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "DA-EVA"
      this.processArea.category= "DA"
      this.processArea.description= "Evaluating the effectiveness of solutions"
      this.processArea.purpose= "Promote the evaluation of LA solutions in use in order to identify whether they meet"
        +"the objectives which they were planned for."
      this.processArea.relatedProcessesAreas= [
        "Pedagogical planning of solutions: It guides the pedagogical planning of "
        +"solutions, which also influences the evaluation of their effectiveness; and ",
        "Results’ based Intervention: Guides intervention actions, which must have "
        +"their effectiveness evaluated. "
      ]
      this.processArea.goals= [
        "To define criteria and assessment means for the solutions; ",
        "To standardize procedures for assessing the effectiveness of LA solutions; "
        +"and ",
        "To encourage the adoption of tools that have undergone evaluation "
        +"procedures. "
      ]
      this.processArea.level01= [
        "EVA1.1. The LA solutions developed by the Institution either do not undergo "
        +"processes for the evaluation of effectiveness, or only apply non-standardized "
        +"evaluations, carried out exclusively by their developers. ",
        "EVA1.2. LA solutions come into use before a rigorous assessment of their "
        +"effectiveness. "
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Reports describing the evaluation processes; and ",
        "Reports including the results of the tools’ assessment. "
      ]
      this.processArea.level02= [
        "EVA2.1. The solutions developed by the Institution are in use and bring about "
        +"results that allow qualitative assessment. "
        +"Such an assessment includes the effectiveness of the intervention carried out "
        +"by the teachers. ",
        "EVA2.2. Project members assign questionnaires to be filled in by students and "
        +"teachers in order to understand their perception of the influence of LA tools "
        +"on their performance. "
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Questionnaires and interviews to assess the tools; and ",
        "Reports including the results of the tools’ assessment. "
      ]
      this.processArea.level03= [
        "EVA3.1. The concerned parties set out and approve the criteria to be considered "
        +"when evaluating the solutions. "
        +"The criteria can be related, for example, to the quality of feedback, analysis "
        +"accuracy, ability to explain the analysis process, and ease of use, among "
        +"others. ",
        "EVA3.2. The tools are put in place at the institutional level only after its "
        +"effectiveness is evaluated, that is, if they reach their previously defined "
        +"operation objectives. "        
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Specification of criteria for evaluating LA solutions; ",
        "Reports that include the results of the tools’ assessment; and ",
        "Documents for authorization to put the tools in place. "
      ]
      this.processArea.level04= [
        "EVA4.1. There is a policy for evaluating solutions set out and approved by the "
        +"concerned parties. "
        +"This policy defines the evaluation aims, as well as its criteria and the person "
        +"responsible for the evaluation process. It also establishes the evaluation "
        +"frequency. ",
        "EVA4.2. The Institution evaluates the tools on a long term basis. "
        +"The Institution removes from use those tools that do not reach their "
        +"development objectives.  ",
        "EVA4.3. Stakeholders define and approve standardized methods for assessing "
        +"the effectiveness of solutions in the Institution. All projects are supposed to "
        +"adopt it. "
        +"A framework can be used, like, for example, EFLA (Evaluation Framework for "
        +"Learning Analytics, http://www.laceproject.eu/evaluation-framework-for-la/). "  
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the Solutions’ Assessment Policy; ",
        "Reports on the long-term evaluation of LA solutions; and ",
        "Specification of standard methods for evaluating solutions. "
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea  

      // ----------------------------------------------------------------
      this.processArea= new Object
      this.processArea.id= "LPE-LPE"
      this.processArea.category= "LPE"
      this.processArea.description= "Legislation, Privacy, and Ethics"
      this.processArea.purpose= "To support the LA use in the Institution, " 
          +" ensuring that projects comply with the laws, " 
          +" and guaranteeing the students’ and teachers’ privacy as well as the ethical use of " 
          +" data."
      this.processArea.relatedProcessesAreas= [
        "Data Acquisition, Data Ownership, Infrastructure, Communication, ", 
        " Stakeholders’ Training, Development of Own Solutions, Results’ based ", 
        " Intervention: Legislation, ethics, and privacy issues influence these " 
          +" processes areas. "         
      ]
      this.processArea.goals= [
        "To enforce LA projects compliance with the law and the Institution " 
          +" resolutions and rules; ", 
        "To support the establishment of an Ethics Committee to evaluate LA " 
          +" projects; and ", 
        "To support the specification of a Data Use Policy at the Institution. "         
      ]
      this.processArea.level01= [
        "LEP1.1. LA projects comply with the laws related to their execution. " 
          +" The Institution identifies those laws and ensures that LA projects always " 
          +" comply with them. For example, in Brazil, there is the General Law for the " 
          +" Protection of Personal Data (LGPD - Law No. 13.853, of July, 8th 2019). And, " 
          +" in the UK, the 1998 Data Protection Act. "      
      ]
      this.processArea.level01Examples= []
      this.processArea.level01WorkProducts= [
        "Survey of laws affecting the adoption of LA; and ", 
        "Reports attesting the projects’ compliance with the current legislation.  "        
      ]
      this.processArea.level02= [
        "LEP2.1. LA projects comply with the Institution’s internal policies that influence " 
          +" its execution."
      ]
      this.processArea.level02Examples= []
      this.processArea.level02WorkProducts= [
        "Reports attesting the compliance of projects with the Institution internal " 
          +"policies. "
      ]
      this.processArea.level03= [
        "LEP3.1. The Institution includes specific LA issues in its policies. ", 
        "LEP3.2. There is a formally appointed Ethics Committee, which can evaluate LA " 
          +"projects according to the Institution LA policies. ", 
        "LEP3.3. The Ethics Committee evaluates all LA projects before their execution. ", 
        "LEP3.4. The Ethics Committee can investigate and resolve complaints received " 
          +"through the ombudsman.  "          
      ]
      this.processArea.level03Examples= []
      this.processArea.level03WorkProducts= [
        "Institution policies and standards that contain specific LA issues; ", 
        "Documents that formalize the establishment of the Ethics Committee and "
          +"its obligations and guidelines; and ", 
        "Evaluation reports from the Ethics Committee about LA projects. "
      ]
      this.processArea.level04= [
        "LEP4.1. T The stakeholders define and approve a Data Use Policy focused on " 
          +" - LA. The following issues are relevant to the policy, although the list is not " 
          +"exhaustive: ", 
          " - Objective - To explain the purpose of the Data Use Policy; ", 
          " - Anonymity - Defines in which situations the Institution must anonymize " 
          +" the students’ and teachers’ data; " ,
          " - Consent - Defines in which situations students and teachers must " 
          +" explicitly allow the storage, access, and manipulation of data that are " 
          +" previously informed by the LA projects; ", 
          " - Permissions - Defines whether it should be explicit for each LA project " 
          +" who will have access to the stored data (including whether the student " 
          +" himself will be granted the access) and at what level of permission; " ,
          " - Processing transparency - Defines in which situations students and " 
          +" teachers must be clearly informed about the methods used in data " 
          +" processing and the logic used to interpret data in each tool. " ,
          " - Opt-out - Defines in which situations the student or teacher should have " 
          +" the option of voluntarily leave the LA project; ", 
          " - Data storage - Defines what should happen to data when a student " 
          +" completes the course (should the data remain stored and in use or " 
          +" should it be deleted?); ", 
          " - Sharing with third parties - Defines in which situations the LA projects " 
          +" data can be shared with third parties. If so, under what criteria; " ,
          " - Obligation to act - Defines in which situations the Institution must act or " 
          +" not (for example, if it identifies that a student is about to fail a course, " 
          +" should it be forced to intervene?); " ,
          " - Intention and intervention based on LA results: in addition to specifying " 
          +" the purpose of using LA, the Institution must specify which types of "   
          +" interventions are appropriate and allowed, according to the results " 
          +" obtained by the analysis; " ,
          " - Assessment - Defines in which situations the LA projects can be part of " 
          +" the students’ assessment; " ,
          " - Students’ responsibility - defines what responsibilities students have over " 
          +" their data in the teaching-learning process (for example, are students " 
          +" responsible for their actions in the Learning Management Systems, which " 
          +" are reflected in the stored data?); " ,
          " - Relevant data to be used - defines criteria to determine if the data are " 
          +" relevant for LA projects. For example, should data on religion and " 
          +" ethnicity be used?; " ,
          " - Data quality - ensures that the analysis uses reliable data in order to " 
          +" avoid errors and inaccuracies; " ,
          " - Limitations - define the technology limits (for example, LA cannot, on its " 
          +" own, fulfill all the requirements for an appropriate teaching and learning " 
          +" process); " ,
          " - Acquired data - defines the criteria for the LA projects to obtain data; ", 
          " - Consequences: specification of the consequences for each stakeholder’s " 
          +" action in disagreement with the clauses of the Data Use Policy. ", 
        "LEP4.2. The Ethics Committee periodically evaluates the established Data Use"
        +" Policy and adjusts it to the new demands of the Institution, or new laws or"
        +" standards, whenever necessary.",
        "LEP4.3. The Ethics Committee evaluates the execution of the LA projects,"
        +" identifying and ensuring the correction of deviations from the Data Use Policy,"
        +" if any."      
      ]
      this.processArea.level04Examples= []
      this.processArea.level04WorkProducts= [
        "Specification of the Data Use Policy; ",
        "Periodic evaluation reports of the Data Use Policy with suggestions for"
        +" changes; and",
        "Report on the evaluation of the LA projects’ execution concerning"
        +" compliance with the Data Use Policy."      
      ]
      this.processArea.questions= []
      this.processAreas[idx++]= this.processArea 

      console.log("ProcessAreas:")
      for (x = 0; x < this.processAreas.length; x++) {
        let entity= this.processAreas[x]
        db.collection("processAreas").doc(entity.id).set(entity)
        .then(function() {
          console.log(entity)
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