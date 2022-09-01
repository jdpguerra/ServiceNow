
// URL: https://community.servicenow.com/community?id=community_Blog&sys_id=cd10352e1b251d94c465ece6b04bcb80
/*
Best Practices Checklist

Readable Code
Code should have proper alignment and readable.
Include comments appropriately, so it helps the reader to understand the purpose my piece code serves.
Use Descriptive Variable and Function Names
Function name should be verb.
variable name should be noun
 

Naming Convention
Capitalize constructors: MyConstructor()
Functions lower camel case: lowerCamelCase()
variables: myLocalVariable
constants: MY_CONSTANT
private: _myPrivateMethod()
 

Variables Properties
Check if the script returns a 'null' OR 'undefined' and handle it appropriately.
Use 'var' keyword for all your variables to prevent from accidently creating global variables.
Embed code and variable declarations into functions
 

Handel Exception
Use 'try' and 'catch' to handle exceptions
Use a MAX_LOOP variable to prevent endless loops.
 

Avoid calling repeated function
Avoid repeated function calls by calling the functions once and storing the returned values/object in a variable and use these variables as required. For example
              var ourUser = gs.getUser();

              gs.­print(­ourUser.­getFirstName());

              gs.­print (­ourUser. getLastName());

Use g_scratchpad - use this when required as this can be used to store parent data so instead of multiple server round trips use this to cache the data.
Construct reusable function.
String Comparision
The strings to be compared should be in the same case. Use toUpperCase() and toLowerCase() functions as required before string comparison.
 

Remove unwanted code
Remove all gs.log, gs.addinfoMessage(), alert(), etc. and unwanted code statements before marking the update set as 'complete'.
 

Servicenow best practices
Don't use current.update in a business rule
Don’t' use global business rules - Use script includes
Don't use RowCount - Count records with GlideAggregate
Don't hard coded sys_id's and other strings like 'manager_name' or 'group_name'.
Do not use glideRecord or g_form.getReference() in client scripts. Instead, use a GlideAjax call to that function asynchronously.
Use "Switch" statement to handle multiple conditions instead of if-else.
 

GlideRecord
Rather than creating a series of addQuery() and addOrCondition() calls to obtain a result, use addEncodedQuery() to make the query easier to create and maintain.
Avoid Complex Queries on Large Data Sets: Limit the number of times you search large tables. As your instance grows, these searches can affect performance.
 

Update Sets
Follow Naming Standards : A consistent naming system for update sets makes it easier to coordinate changes from multiple developers or when applying changes from one instance to another one.
Provide descriptions for update sets.
Inspect your update set: Check that it contains only the desired changes. Remove any unwanted changes that were captured while development.
Do not make an update set in 'Complete' state to 'In Progress' again and try to capture changes into that. After a completed update set is transferred to another instance, any future changes to the source update set are ignored.
JS Docs comments
Add JSDOC comments
    12.  JSON

do not use "new JSON().encode" & "answer.evalJSON "instead use JSON.stringify(answer) & JSON.parse(answer) respectively. Always check first if the JSON object has the key which you are referring to.
   13. Others

Each 'if' statement should have braces enclosed
Before calling function, check whether function parameter for null value
 */