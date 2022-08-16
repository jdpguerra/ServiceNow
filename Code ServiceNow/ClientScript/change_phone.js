
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	
    if (oldValue != newValue || oldValue != '') {
        var ga = new GlideAjax('userInfo');
        ga.addParam('sysparm_name', 'updateUserPhone');
        ga.addParam('sysparm_id', g_form.getValue('u_caller_id'));
		ga.addParam('sysparm_phone', g_form.getValue('u_caller_phone'));
        ga.getXML(callback);
    }
}

function callback(answer){
	// Not necessary
}