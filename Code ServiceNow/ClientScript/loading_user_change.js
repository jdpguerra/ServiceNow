
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	
	var ga = new GlideAjax('userInfo');
	ga.addParam('sysparm_name','getInfo');
	ga.addParam('sysparm_userId',g_form.getValue('u_caller_id'));
	//ga.addParam('sysparm_userId',g_form.getValue('u_caller_id'));
	
	ga.getXML(responseParse);
	
	//Nao preencher quando vier da funcionalidade converter em incidente
//	var vCaller = g_user.getClientData('req_u_caller_contact');
	
	
	function responseParse(response) {
		
		//if (vCaller == "")
			//{
				var answer = response.responseXML.documentElement.getAttribute("answer");
				var user_info = JSON.parse(answer);
				//g_form.setValue('u_caller_id',g_user.userID);
				g_form.clearValue('u_caller_department');
				g_form.setValue('u_caller_department', (!user_info.department ? "" : user_info.department));
				g_form.setValue('u_caller_email', (!user_info.email ? "" : user_info.email));
				g_form.setValue('u_caller_phone', (!user_info.branch_line ? "" : user_info.branch_line));
				g_form.setValue('u_caller_manager',(!user_info.manager ? "" : user_info.manager));
				g_form.setValue('u_caller_office',(!user_info.cargo ? "" : user_info.cargo));
				
		
				//g_form.setValue('u_caller_office',(!user_info.department ? "" : user_info.department));
		
				
			//}
	}
}




// // Modified the if to return if the newValue == oldValue to avoid
// // unecessary trips to the server
// if (isLoading || newValue === '' || newValue == oldValue) {
// return;
// }

// // Instantiate the GetEmailAddress Script Include
// var getEmailAddr = new GlideAjax('GetEmailAddress');
// // Specify the getEmail method
// getEmailAddr.addParam('sysparm_name','getEmail');
// // Pass the Requested for sys_id
// getEmailAddr.addParam('sysparm_userID', g_form.getValue('u_requested_for'));
// // Send the request to the server
// getEmailAddr.getXML(populateEmailField);


// // When the response is back from the server
// function populateEmailField(response){
// // Extract the email address from the response, clear any value from the email field,
// // set new value in the email field
// var emailFromScriptInclude = response.responseXML.documentElement.getAttribute("answer");
// g_form.clearValue('u_requested_for_email');
// g_form.setValue('u_requested_for_email',emailFromScriptInclude);
// }
// }