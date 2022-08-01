//Validate in progress
var cpf = newValue;
var cpfPattern = /^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/; //000.000.000-00
if (!cpfPattern.test(cpf)) {
cpf = cpf.replace(/\D/g, ''); // remove caracteres que não sejam dígitos
var regex = /^\d{11}$/;
var is_valid = regex.test(cpf);
if (!is_valid) {
g_form.clearValue("u_cpf");
g_form.hideFieldMsg('u_cpf');
g_form.showFieldMsg('u_cpf', 'CPF inválido. O CPF deve conter 11 dígitos numéricos.', 'error');
return;
}
cpf = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
g_form.setValue('u_cpf', cpf);
}
//}
//}
