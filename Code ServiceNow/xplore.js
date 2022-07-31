 //Bad practice used sys_id, used getUniqueValue(); , read bestpractice.js
//Example call script include xplore servicenow

var request_Id = "d43645771b38d550d1abda4ce54bcb07";
//sn_customerservice > Application Servicenow
var callInclude = new sn_customerservice.CatalogUtils().getFunction(request_Id);
//print Result consult
gs.print(callInclude);