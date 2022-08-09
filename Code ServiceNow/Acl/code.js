
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
