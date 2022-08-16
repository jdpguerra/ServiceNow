//https://developer.servicenow.com/dev.do#!/reference/api/sandiego/client/c_GlideFormAPI%23r_GlideFormShowErrorBox_String_String?navFilter=error

g_form.showFieldMsg('impact','Low impact not allowed with High priority','error',false);
//"error","info", or "warning".
g_form.showFieldMsg('impact','Low impact response time can be one week','info');
