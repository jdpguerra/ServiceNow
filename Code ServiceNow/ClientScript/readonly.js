
//Fields readonly
// URL> http://conyxit.com/make-all-form-fields-read-only-servicenow-client-script/
// URL > https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0752560
// URL > https://github.com/iamkalai/SNTIL/issues/61
var fields = g_form.getEditableFields();
for (var x = 0; x < fields.length; x++) {
    g_form.setReadOnly(fields[x], true);
}

//Other code
g_form.setVariablesReadOnly(true);

