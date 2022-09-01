
answer = (function transformEntry(source) {

	var email = source.u_mail.toString();

 	// FIX TEMPORÁRIO PARA AR
 	var dominioEmail = email.toString().split('@')[2];
	if (dominioEmail.indexOf('@ar') > -1 ) {
		return target.u_domain;
	}
	
	
})(source);