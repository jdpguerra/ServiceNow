
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


(function executeRule(current, previous /*null when async*/) {


	
	//find the parent
	var grCase = new GlideRecord('sn_customerservice_supplier_case');
	grCase.addQuery('sys_id',current.parent.sys_id);
	
	
	grCase.query();

	if(grCase.next()){
		//get the variables from multi-row variable set
		var rowcount = grCase.variables.business_group.getRowCount();

		for(var rc = 0; rc < rowcount; rc++){
			var row = grCase.variables.business_group.getRow(rc);
			var brand = row.co_brand;
			var country = row.select_variables;
			var accountType = row.u_account;
			var smcode = row.sm_code;


			//set the values of multi-row set on the task.
			var newRow = current.variables.business_group.addRow();
			newRow.co_brand = brand;
			newRow.select_variables = country;
			newRow.u_account = accountType;
			newRow.sm_code = smcode;
			

		}
		current.update();
	}



})(current, previous);