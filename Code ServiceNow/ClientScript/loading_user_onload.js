
function onLoad() {
	
	var ga = new GlideAjax('userInfo');
	ga.addParam('sysparm_name','getInfo');
	ga.addParam('sysparm_userId',g_user.userID + "");
	//ga.addParam('sysparm_userId',g_form.getValue('u_caller_id'));
	
	ga.getXML(responseParse);
	
	//Nao preencher quando vier da funcionalidade converter em incidente
//	var vCaller = g_user.getClientData('req_u_caller_contact');
	
	
	function responseParse(response) {
		
		//if (vCaller == "")
			//{
				var answer = response.responseXML.documentElement.getAttribute("answer");
				var user_info = JSON.parse(answer);
				g_form.setValue('u_caller_id',g_user.userID);
				g_form.setValue('u_caller_department', (!user_info.department ? "" : user_info.department));
				g_form.setValue('u_caller_email', (!user_info.email ? "" : user_info.email));
				g_form.setValue('u_caller_phone', (!user_info.branch_line ? "" : user_info.branch_line));
				g_form.setValue('u_caller_manager',(!user_info.manager ? "" : user_info.manager));
				g_form.setValue('u_caller_office',(!user_info.cargo ? "" : user_info.cargo));
				//g_form.setValue('u_caller_office',(!user_info.department ? "" : user_info.department));
		
				
			//}
	}
}