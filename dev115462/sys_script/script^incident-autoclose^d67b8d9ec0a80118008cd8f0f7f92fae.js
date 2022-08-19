// This script automatically closes incidents that are resolved
// and haven't been updated in the specified number of days.
// This number is a property in System Properties.
// To place a comment in the incident, uncomment the "gr.comments" line.

autoCloseIncidents();

function autoCloseIncidents() {
	var ps = gs.getProperty('glide.ui.autoclose.time');
	var pn = parseInt(ps);
	var queryTime = new GlideDateTime();
	queryTime.addDaysUTC(-pn);

	if (pn > 0) {
		var gr = new GlideRecord('incident');
		gr.addQuery('incident_state', IncidentState.RESOLVED);
		if (gs.getProperty('com.snc.incident.autoclose.basedon.resolved_at', 'false') === 'true') {
			gr.addQuery('resolved_at', '<', queryTime);
		}
		else {
			gr.addQuery('sys_updated_on', '<', queryTime);
		}
		if (pm.isActive('com.snc.incident.mim')) {
			var mim = gr.addNullQuery('major_incident_state');
			mim.addOrCondition('major_incident_state', '!=', new sn_major_inc_mgmt.MajorIncidentTriggerRulesSNC().MAJOR_INCIDENT_STATE.ACCEPTED);
		}
		gr.query();
		while(gr.next()) {
			gr.incident_state = IncidentState.CLOSED;
			//  gr.comments = 'Incident automatically closed after ' + pn + ' days in the Resolved state.';
			gr.active = false;
			gr.closed_by = gr.resolved_by;
			gr.update();
		}
	}
}