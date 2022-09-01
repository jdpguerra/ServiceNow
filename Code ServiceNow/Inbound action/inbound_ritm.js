

    gs.log("Entrei inbound");
    //Capture subject - email.subject.toString();
    var str = email.subject.toString();
    var numCorrelation = str.split("Chamado: ")[1];
    var num_correlation_id = numCorrelation.split(";")[0];
    current.correlation_id = num_correlation_id; //code correlation ID

    //Search number RITM email in table sc_req_item and field Correlation ID
    //Variables with values code
   
    var group_inboundAction = "sys_id_grupo";
    var item_inboundAction = "sys_id_item";
    var category_inboundAction = "sys_id_category";
    var stateRitm = str.substring(str.indexOf(" - Chamado"));
    var stateRitm_end = stateRitm.split("- ")[1];
    var contLength = stateRitm_end.length;
	
	//code state (Atendimento iniciado)
	var stateRitm_1 = str.substring(str.indexOf(" - Chamado"));
    var stateRitm_end_1 = stateRitm.split("-")[2];

    //Chamado aguardando atendimento(30 - 1) > open (1)
    //Chamado encaminhado a outro responsável (39 - 2) > in progress (2)
    //Atendimento iniciado (22 -3)> in progress (2)
    //Chamado aguardando confirmação de encerramento (46 - 4) > resolvido (6)
	
    //Count string
    var stateChoice;
    if (contLength == 30) stateChoice = 1;
    else if (contLength == 39) stateChoice = 2;
    else if (contLength == 22) stateChoice = 3;
    else if (contLength == 46) stateChoice = 4;

    var grRitm = new GlideRecord('sc_req_item');
    grRitm.addEncodedQuery('active=true^correlation_id=' + num_correlation_id);
    grRitm.query();

    //Comparate update state new email all info != email 
    if (grRitm.next()) {

        //ticket with correlation found and update state RITM
        if (stateChoice == 1) grRitm.setValue('state', '1');
        else if (stateChoice == 2) grRitm.setValue('state', '2');
        else if (stateChoice == 3) grRitm.setValue('state', '2');
        else if (stateChoice == 4) grRitm.setValue('state', '6');

		if(stateChoice==3)stateRitm_end=stateRitm_end_1;
        //Comments RITM update
        grRitm.work_notes = "Estado Atualizado para : " + stateRitm_end;
        grRitm.update(); // Ritm update
        current.setAbortAction(true); //not create Ritm new

    } else {
        //ticket with correlation empty  found and generate new ticket

        // Set value category and subcategory
        current.setValue('contact_type', 'email');
        // current.setValue('assignment_group', group_inboundAction);
        current.setValue('cat_item', item_inboundAction);
        current.setValue('u_categoria', category_inboundAction);

        //set value state
        if (stateChoice == 1) grRitm.setValue('state', '1');
        else if (stateChoice == 2) grRitm.setValue('state', '2');
        else if (stateChoice == 3) grRitm.setValue('state', '2');
        else if (stateChoice == 4) grRitm.setValue('state', '6');


        current.work_notes = "Ticket criado por integração de email, numero do chamado: " + num_correlation_id + " com estado inicial: " + stateRitm_end;
    }

