(function executeRule(current, previous /*null when async*/ ) {
    var vendor = current.getValue('vendor');
	
    //query para Filter
	var filter = 'vendor='+vendor+'^stateIN1,2,8,5^NQstateIN9,3,7^u_exception_required!=true^vendor='+vendor;
	
    var ga = new GlideAggregate('sn_vdr_risk_asmt_assessment');
    ga.addEncodedQuery(filter);
    ga.query();
	
    if (!ga.next()) {
        try {
            var inputs = {};
            inputs['supplier'] = vendor; // String 

            // Execute Synchronously: Run in foreground. Code snippet has access to outputs.
            var result = sn_fd.FlowAPI.getRunner().subflow('sn_vdr_risk_asmt.teste_subflow').inForeground().withInputs(inputs).run();



        } catch (ex) {
            var message = ex.getMessage();
            gs.error(message);
        }

    }
})(current, previous);