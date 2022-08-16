
function onLoad() {
    //Type appropriate comment here, and begin script below

    //Use the 'getParameterValue' function below to get the parameter values from the URL   
    var id = getParameterValue('sysparm_id');

    if (id) {
        g_form.setValue('project_id', id);

    }

    function getParameterValue(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(top.location);
        if (results == null) {
            return "";
        } else {
            return unescape(results[1]);
        }
    }
}