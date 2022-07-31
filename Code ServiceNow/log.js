//Information doc GlideSystem (gs)
//https://docs.servicenow.com/pt-BR/bundle/sandiego-platform-administration/page/administer/security/reference/r_ScriptSandboxing.html
//https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0752278


//Send debugging information to the system log
var testMessage = "Message example";

Example:
gs.log(testMessage);
gs.log();

gs.error(testMessage);
gs.error();

gs.info(testMessage);
gs.info();

gs.warn(testMessage);
gs.warn();


//Send debugging information to the top of the form
var message="Teste";
gs.addInfoMessage()
gs.addErrorMessage()
Syntax: gs.methodName(message);

Example: gs.log("The record was opened: " + current.opened_at);


{/* DESCRIPTION
Use the System Logs > System Log modules to view messages logged by the
 gs.log(), gs.error(), gs.info() and gs.warn() methods.

The gs.addInfoMessage() and gs.addErrorMessage() methods are helpful debugging.
strategies during class because the feedback is immediate.
This strategy can be less effective in an environment with multiple administrators as 
they will see your messages at the top of the form.

TIP FROM THE FIELD
The defaul source for the gs.log() method is ***Script. To use a different source,
pass and optional source parameter to method. Then save a query locating all the records in your source as a favorit. Example:
gs.log("The value of State: " + current.state, "Fred's Logs"); */}


