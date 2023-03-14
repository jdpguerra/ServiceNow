//Client-side scripting
//Server-side
//Scripted Rest APIs

//Client script > onLoad
//Loaded 
//Script que carrega no momento que renderiza a pagina
//OnChange
//Script executa quando tem alguma ação em algum campo determinado.
//OnSubmit
//Validação dos campos antes de fazer o imput de submitt

//Script > onLoad

function onload() {

    alert("Teste de inicio de script de alerta")

}

//Script > onSubmit

function onSubmit(){

    alert ("Teste de onsubmit para o campo");

}

//Script > onChange

function onChange(control, oldvalue, newValue, isLoading, isTemplate){
    if(isLoading || newValue === '') {

        return;
    }

}

//https://developer.servicenow.com/dev.do#!/reference/api/tokyo/client/c_GlideFormAPI
//GlideForm > g_form . <method name>
/*

-Retrieve a field value on a form
-Hide a field
-Make a field read-only
-Write a message on a form or a field
-Add fields to a choice list
-Remove fields from a choice list

*/

function onLoad(){
    alert (g_form.getValue('short_description'));

}

//URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/client/

/*

addOption()
clearOptions()
addInfoMessage()
addErrorMessage()
showFieldMsg()
clearMessages()
getSections()
getSectionName()

*/

// GlideUSer > g_user. < method name>

function onLoad() {

    alert("g_user.firstName = " + g_user.firstName 
    + ", \n g_user.lastName = " + g_user.lastName 
    + ", \n g_user.userName = " + g_user.userName 
    + ", \n g_user.userID = " + g_user.userID);

    g_user.hasRole('client_script_admin'); // se tem a role em questao
    g_user.hasRoleExactly('client_script_admin');  // Se tem a role da forma requerida

}

//Exercice
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if ( newValue == '') {
      return;
    }
    
    var whatneeded = g_form.getValue('u_what_needed');
    
    // Clear all of the choices from the What needed field choice list
    g_form.clearOptions('u_what_needed');
    
    // If the value of the Request type field is hr, add
    // two hr choices and other to the What needed field choice list
    if(newValue == 'hr'){
      g_form.addOption('u_what_needed','hr1','Human Resources 1');
      g_form.addOption('u_what_needed','hr2','Human Resources 2');
      g_form.addOption('u_what_needed','other','Other');
    }
    // If the value of the Request type field is facilities, add
    // two facilities choices and other to the What needed field
    // choice list
    if(newValue == 'facilities'){
      g_form.addOption('u_what_needed','facilities1','Facilities 1');
      g_form.addOption('u_what_needed','facilities2','Facilities 2');
      g_form.addOption('u_what_needed','other','Other');
    }
    // If the value of the Request type field is legal, add
    // two legal choices and other to the What needed field
    // choice list
    if(newValue == 'legal'){
      g_form.addOption('u_what_needed','legal1','Legal 1');
      g_form.addOption('u_what_needed','legal2','Legal 2');
      g_form.addOption('u_what_needed','other','Other');
    }
    
    // If the form is loading and it is not a new record, set the u_what_needed value to the
    // value from the record before it was loaded
    if(isLoading && !g_form.isNewRecord()){
      g_form.setValue('u_what_needed', whatneeded);
    }
  }

  // UI policy Script

  function onCondition(){

    alert ("E verdade este alerta");
  }
  
  function onCondition() {
    // Display a message under the Other field to explain what to put in the
    // Other field.
    g_form.showFieldMsg('u_other','Briefly explain what you need.','info');
   }

  // URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/client/c_GlideFormAPI#r_GlideFormHideFieldMsg_String_Boolean
//https://docs.servicenow.com/bundle/tokyo-application-development/page/script/client-scripts/concept/client-side-scripting-overview.html
// https://developer.servicenow.com/dev.do#!/guides/tokyo/now-platform/tpb-guide/client_scripting_technical_best_practices

  