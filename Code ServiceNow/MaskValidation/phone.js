
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
	

	//55(031)33333-3333
	if (newValue.length == 10) {
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{4})(\d{4})/g, "\$1\-\$2\-\$3"));//nome da variavel
	} else {
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{5})(\d{4})/g, "\$1\-\$2\-\$3"));//nome da variavel
	}

}


//standar phone number

function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	if(newValue.length > 10 && newValue.length < 18) {
		newValue = newValue.replace(/[^\d]+/g, '');
		newValue = newValue.replace(/^0+/g, '');
	}
	
	if (newValue.length != 12 && newValue.length != 14) {
		g_form.addErrorMessage('Formato de Telefone inválido. XX-XXXX-XXXX ou XX-XXXX-XXXX');
		g_form.clearValue('u_caller_phone');//nome da variavel
		return false;
	}
	
	if (!(/^\d+$/g.test(newValue))) {
        g_form.addErrorMessage('Formato de Telefone inválido. XX-XXXX-XXXX ou XX-XXXX-XXXX');
		g_form.clearValue('u_caller_phone');//nome da variavel
		return false;
	}
	

	//55(31)33333-3333
	//+1 333 333 3333
	if (newValue.length == 11) { // standar EUA
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/g, "+\$1\(\$2\)\$3\-\$4"));//nome da variavel
	} else if (newValue.length == 13){
				g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/g, "\$1\(\$2\)\$3\-\$4"));//nome da variavel
	} else if (newValue.length == 14) {
		g_form.setValue('u_caller_phone', newValue.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/g, "\$1\(\$2\)\$3\-\$4"));//nome da variavel
	}


}

//Phone validation
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    function removeEspecialDigits(phone) {
        phone = phone.replace(/\D/gim, '');
        return phone;
    }
    var phone = removeEspecialDigits(newValue);
    var formattedPhone;
    if (phone.length == 10) { // (xx) xxxxx-xxxx
        formattedPhone = '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 6) + '-' + phone.slice(6,10);
        g_form.setValue('contact_mobile_phone', formattedPhone);
    } else if (phone.length == 11) { // (xx) xxxx-xxxx
        formattedPhone = '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 7) + '-' + phone.slice(7,11);
        g_form.setValue('contact_mobile_phone', formattedPhone);
    } else {
        g_form.clearValue('contact_mobile_phone');
        g_form.showFieldMsg('contact_mobile_phone','Número inválido', 'error');
    }
}