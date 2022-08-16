
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

	    var taskType = g_form.getValue('u_task1');
	

	var formatDate = g_form.getValue('u_date_and_time');
    var message = 'A data programada deverá considerar minimamente o prazo de 2 dias do SLA';
	var messagefinal = 'Não e possivel agendar aos finais de semana';
	var messageferiado = 'A data selecionada e um feriado, por favor escolha uma nova data';
	
    
	
    var gAjax = new GlideAjax("scrip_include");
    gAjax.addParam('sysparm_name', 'functionDate');
    gAjax.addParam('sysparm_value', formatDate);
    gAjax.getXML(returnBack);

    function returnBack(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");

        if (answer == '1') {

            g_form.clearValue('u_date_and_time', true);
            g_form.showFieldMsg('u_date_and_time', message, 'error');
            g_form.setMandatory('u_date_and_time', true);

        }
		else if (answer == '2') {

            g_form.clearValue('u_date_and_time', true);
            g_form.showFieldMsg('u_date_and_time', messagefinal, 'error');
            g_form.setMandatory('u_date_and_time', true);

        }
		else if (answer == '3') {

            g_form.clearValue('u_date_and_time', true);
            g_form.showFieldMsg('u_date_and_time', messageferiado, 'error');
            g_form.setMandatory('u_date_and_time', true);

        }
    }
}