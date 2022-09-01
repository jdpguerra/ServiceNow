
(function executeRule(current, previous /*null when async*/) {


	//Take the parent case
	var grCase = new GlideRecord('sn_customerservice_supplier_case');
	grCase.addQuery('sys_id',current.parent.sys_id);
	grCase.query();

	var ob;

	//take Supplier company
	while(grCase.next()){
		ob = grCase.opened_by.company;
	}

	var grQual = new GlideRecord('sn_vdr_risk_asmt_qualification');
	grQual.addQuery('u_supplier.sys_id',ob);
	grQual.query();

	while(grQual.next()){
		
		if (!gs.nil(grQual.u_tx)){
		
		//set the values of multi-row set on the task.
		var newRow = current.variables.categorizaci_n.addRow();
		newRow.u_level_4_sub_category = grQual.u_tx;
		newRow.u_level_3_category = grQual.u_tx.u_parent;
		newRow.u_level_2_family	 = grQual.u_tx.u_parent.u_parent;
		newRow.u_level_1_business = grQual.u_tx.u_parent.u_parent.u_parent;
		newRow.u_supplier_type = grQual.u_supplier_type;
		}
	}





})(current, previous);