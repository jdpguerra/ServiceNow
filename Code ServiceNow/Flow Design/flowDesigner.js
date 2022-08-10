//Code in flow designer
//https://docs.servicenow.com/pt-BR/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/inline-scripts.html
/*
**Access Flow/Action data using the fd_data object. Script must return a value.
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
//not posible used CURREN in subflow
//input : string_variabel_servicenow

var flowInput = parseInt(fd_data.trigger.string_variabel_servicenow);
gs.info(corruptionCountry);

var flowInput1 = fd_data.trigger.string_variabel_servicenow_1;
var flowInput2 = fd_data.trigger.string_variabel_servicenow_2;
var flowInput3 = fd_data.trigger.string_variabel_servicenow_3;
var flowInput4 = fd_data.trigger.string_variabel_servicenow_4;

return flowInput4;


/*
**Access Flow/Action data using the fd_data object. Script must return a value.
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
//teste

//If condition four values sum all;

var flowInput10 = parseInt(fd_data.trigger.string_variabel_servicenow);
var flowInput11 = parseInt(fd_data.trigger.string_variabel_servicenow);

var question1;
var question2;
var question3;
var question4;
var question5;
if( flowInput10==="yes") {question1 =30} else {question1 = 0 }
if( flowInput11==="Yes") {question2 =20} else { question2=0}
if( flowInput12===0||flowInput12===1) {question3 =120} else { question3=0}
if( flowInput13==="Yes") {question4 =120} else { question4=0}


var sumTotal = parseInt((question1)+parseInt(question2)+parseInt(question3)+parseInt(question4)+parseInt(corruptionCountry)+parseInt(corruptionTaxo));

return sumTotal;
//Sum all values

// inProgress