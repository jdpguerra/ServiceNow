
function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	if(newValue.length > 10 && newValue.length < 18) {
		newValue = newValue.replace(/[^\d]+/g, '');
		newValue = newValue.replace(/^0+/g, '');
	}
	
	if (newValue.length != 10 && newValue.length != 11) {
		g_form.addErrorMessage('Formato de Telefone inválido. XX-XXXX-XXXX ou XX-XXXX-XXXX');
		g_form.clearValue('u_caller_phone');//nome da variavel
		return false;
	}
	
	if (!(/^\d+$/g.test(newValue))) {
        g_form.addErrorMessage('Formato de Telefone inválido. XX-XXXX-XXXX ou XX-XXXX-XXXX');
		g_form.clearValue('u_caller_phone');//nome da variavel
		return false;
	}
	
	if (newValue.length == 10) {
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{4})(\d{4})/g, "\$1\-\$2\-\$3"));//nome da variavel
	} else {
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{5})(\d{4})/g, "\$1\-\$2\-\$3"));//nome da variavel
	}

}