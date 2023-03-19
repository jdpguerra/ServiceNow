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

//GlideRecord
// URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/c_GlideRecordScopedAPI

//Example coded:
// 1. Create an object to store rows from a table
var myObj = new GlideRecord('table_name');

// 2. Build query
myObj.addQuery('field_name','operator','value');
myObj.addQuery('field_name','operator','value');

// 3. Execute query 
myObj.query();

// 4. Process returned records
while(myObj.next()){
  //Logic you want to execute.  
  //Use myObj.field_name to reference record fields
}
//Query
//Numbers: =, !=, >, >=, <, <=
//Strings: =, !=, STARTSWITH, ENDSWITH, CONTAINS, DOES NOT CONTAIN, IN, NOT IN, INSTANCEOF

//While
// iterate through all records in the GlideRecord and set the Priority field value to 4 (low priority).
// update the record in the database
while(myObj.next()){
  myObj.priority = 4;
  myObj.update(); 
}
//IF
// Set the Priority field value to 4 (low priority) for the first record in the GlideRecord
// update the record in the database
if(myObj.next()){
  myObj.priority = 4;
  myObj.update(); 
}
//Update Multiple
// When using updateMultiple(), use the setValue() method.  
// Using myObj.priority = 4 may return unexpected results.
myObj.setValue('priority',4);
myObj.updateMultiple();

//About (update)
//URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordUpdateMultiple

//Counting records
//GlideAgregate
// If you need to know the row count for a query on a production instance do this
var count = new GlideAggregate('x_snc_needit_needit'); 
count.addAggregate('COUNT'); 
count.query(); 
var recs = 0; 
  if (count.next()){ 
    recs = count.getAggregate('COUNT');
  }
gs.info("Returned number of rows = " +recs);

// Do not do this on a production instance. 
var myObj = new GlideRecord('x_snc_needit_needit');
myObj.query();
gs.info("Returned record count = " + myObj.getRowCount());

//GlideDateTime
//URL > https://developer.servicenow.com/dev.do#!/reference/api/tokyo/server/c_APIRef
