// Run script database 
/*
Update record fields when a database query runs
Set field values on related records when a record is saved
Manage failed log in attempts
Determine if a user has a specific role
Send email
Generate and respond to events
Compare two dates to determine which comes first chronologically
Determine if today is a weekend or weekday
Calculate the date when the next quarter starts
Log messages
Initiate integration and API calls to other systems
Send REST messages and retrieve results
*/

// Business rules

//before 
//executa antes de alterar os dados no database

//after 
//Executa depois de atualizar a database

//async 
//Executa entre a database e o after da BR

//display
//executa depois de executar a BR

//current and previous
//URL> https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/no-namespace/c_GlideElementScopedAPI#r_ScopedGlideElementChangesTo_Object_o

//The Short description field has a value:
!current.short_description.nil()
//URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/no-namespace/c_GlideElementScopedAPI#r_ScopedGlideElementNil


//dot-walking
//<object>.<related_object>.<field_name>

if(current.u_requested_for.email == "beth.anglin@example.com"){  
    //logic here
  }

//Glide system
//URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/c_GlideSystemScopedAPI
gs.info ("Teste mensagem de log");