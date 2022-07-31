//Code in flow designer
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

// inProgress