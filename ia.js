/*
 * Script Name: ia
 * Author: David Skarka, Jiri Luzny, ©HuMaInn
 * Purpose: library for other scripts
 * Date: 1.6.2017
 * version 2
 */

"use strict";

/*
GLOBAL VARIABLES
*/

//if special testing routine will be executed. For production purpose should be set to false
var TEST = true; 

//MAXIMUM_DEPTH: limit for Breadth-first traversal
//DIAGRAM_PREFIX: diagram will be created with this name: DIAGRAM_PREFIX+<name of selected package>
//SELECTED_PACKAGE: selected package in the repository
var configuration ={MAXIMUM_DEPTH:10,DIAGRAM_PREFIX:"iagen_",REPOSITORY:"",SELECTED_PACKAGE:""};

//object definition for wrapper of Sparx EA Element
var element = {eaElement:"",stereoType:"",depth:"", name: function() {return this.eaElement.Name + " [" + this.stereoType+"]";}};

//array for impacted elements. Should be filled by array.push(...) method
var impactedElements = new Array();


//!INC .......
//TODO: NEEDS TO BE COMMENTED MANUALLY
//STANDALONE ENVIRONMENT
///*
var ActiveXObject, GetObject;
eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("ea_utils.js", 1).ReadAll());
//*/

//EMBEDED SPARX EA ENVIRONMENT
/*
!INC HuMaInn.ea_utils
*/

//INITIALIZING
function init() {
    info("ia initialization started");
    //TODO: if not selected package then display ERROR and finish
    var ea_repo = GetObject("", "EA.App").repository;
    var ea_pckg =  ea_repo.GetTreeSelectedPackage();
    if (TEST) {
        test(ea_pckg);    
    }
    configuration["SELECTED_PACKAGE"]=ea_pckg;
    configuration["REPOSITORY"]=ea_repo;
    info("ia initialization finished");
}

//TESTING functions-----------------------------------------------------------------------------
function test(ea_pckg) {
    var start = new Date();
    var result;
    info("testing started");
    info("Invoking script on selected package: " + ea_pckg.Name);
    result = testPackage(ea_pckg);
    info(result + " in " + ((new Date() - start) / 1000) + " seconds!");
    info("testing finished");
}

function testPackage(eaPackage) {
  var elements = findAllElements(eaPackage, true);
  if (elements) {
    var i = 0;
    while (i < elements.length) {
      var element = elements[i];
      info("Testing " + element.Name);
      i += 1;
    }

  }
  return "SUCCESS";
}

function prepareConfiguration(configuration) {
    info("prepareConfiguration started")
    info("prepareConfiguration finished")
    return configuration;
}

function getImpactedElements(configuration, impactedElements) {
    info("getImpactedElements started")
    info("getImpactedElements finished")
    return impactedElements;
}

function createDiagram(configuration, impactedElements) {
    info("createDiagram started")
    info("createDiagram finished")
    //success
    return 0;
}

function finish(configuration, impactedElements) {
    info("finish started")
    //push something to clean here
    info("finish finished")
    //success
    return 0;
}

//-- START -----------------------------------------------------------------------
init();
configuration = prepareConfiguration();
impactedElements = getImpactedElements(configuration);
createDiagram(configuration, impactedElements);
finish();
//-- END ----------------------------------------------------------------------

