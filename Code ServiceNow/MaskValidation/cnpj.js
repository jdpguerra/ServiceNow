function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}

	var cnpj = newValue;
	var cnpjPattern = /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})$/; //##.###.###/####-## 

	if (!cnpjPattern.test(cnpj)) {
		cnpj = cnpj.replace(/\D/g, ''); // remove caracteres que não sejam dígitos

		var regex = /^\d{14}$/;
		var is_valid = regex.test(cnpj);

		if (!is_valid) {
			g_form.hideFieldMsg('cnpj');
			g_form.showFieldMsg('cnpj', 'cnpj inválido. O cnpj deve ter 14 dígitos numéricos.', 'warning');

			return;
		}

		cnpj = cnpj.slice(0, 2) + '.' + cnpj.slice(2, 5) + '.' + cnpj.slice(5, 8) + '/' + cnpj.slice(8, 12) + '-' + cnpj.slice(12, 14);
		
		g_form.setValue('cnpj', cnpj); // cnpj nome da variavel
	}
}