(function executeRule(current, previous /*null when async*/) {
	var attachment = new GlideSysAttachment();
	
	var screquest = new GlideRecord('sc_request');
	screquest.addQuery('sys_id', current.table_sys_id);
	screquest.query();
	
	if(screquest.next()){
		var sctask = new GlideRecord('sc_task');
		sctask.addQuery('request', current.table_sys_id);
		sctask.query();
		if(sctask.next()){
			attachment.copy('sc_request', screquest.sys_id, 'sc_task', sctask.sys_id);
		} 
	}
})(current, previous);