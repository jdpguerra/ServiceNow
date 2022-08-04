//https://community.servicenow.com/community?id=community_question&sys_id=11a68365db1cdbc01dcaf3231f961976
//http://www.servicenowguru.com/showcase/servicenow-security-tips/
//https://community.servicenow.com/community?id=community_question&sys_id=f082c321dbd8dbc01dcaf3231f96195c&view_source=searchResult
//https://community.servicenow.com/community?id=community_article&sys_id=8b8f72fd1babd810d2ccea89bd4bcb14
//https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0564887
//https://www.servicenowelite.com/blog/2019/10/2/access-controls

//search role user
grUr = new GlideRecord('sys_user_has_role');
grUr.addQuery("user", gs.getUser().getID());  
grUr.query();  
while (grUr.next()){
	gr = new GlideRecord('sys_group_has_role');
	gr.addQuery("role", grUr.role);
	gr.query();
	while (gr.next()){
		if (gs.name == gr.name)
			answer = true;
		else
			answer = false;
	}
}
