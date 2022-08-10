//type query > when > before
var condition = gs.hasRole('vendor_contact') && !gs.hasRole('admin');

(function executeRule(current, previous /*null when async*/) {

	// Show only records in which the requester is the vendor_contact user
	// or in which the requester's company is the same as the user's company
//	current.addEncodedQuery('u_requester=' + gs.getUserID() + '^ORu_requester.company=' + gs.getUser().getCompanyID());
	current.addEncodedQuery('^ORopened_by=' + gs.getUserID() + '^ORopened_by.company=' + gs.getUser().getCompanyID());
	

})(current, previous);