

    //  Capture number Inc
    var text = email.body_text;
    var numberInc = text.split("number: ")[1];
    numberInc = numberInc.split("Severity:")[0];
    numberInc = numberInc.trim();
    current.correlation_id = numberInc; //Add table Correlation ID
    


    //Search number inc email in table incident and field Correlation ID
    var inc = new GlideRecord('incident');
    inc.addEncodedQuery('active=true^correlation_id=' + numberInc);
    inc.query();

    //Capture Severity subject - email.subject.toString();
    var str = email.subject.toString();
    var res = str.substring(str.indexOf(":"));
    var res1 = res.substring(1, 33).trim();
	
	//Comparate update Severity new email all info != email 
    if (inc.next()) {
        switch (res1) {
            case 'Low':
                inc.setValue('urgency', '4');
                inc.setValue('impact', '4');
                break;
				
			case 'Informational':
                inc.setValue('urgency', '4');
                inc.setValue('impact', '4');
                break;
				
            case 'Medium':
                inc.setValue('urgency', '3');
                inc.setValue('impact', '3');
                break;

            case 'High':
                inc.setValue('urgency', '2');
                inc.setValue('impact', '2');
                break;
        }
       
        //Comparate array email
        
        var BoEmail = email.body_text;
        var entities = BoEmail.split("Entities:")[1];
        entities = entities.split("[SOC ACCENTURE]")[0];
        entities = entities.trim();
        entities = entities.replace(/(\r\n|\n|\r)/gm, "");
        
        inc.u_description_id = entities;
        var strformat = entities.replaceAll('\\', '\\\\');
        var libraryObj = JSON.parse(strformat);

        inc.work_notes = new global.ACN_inboundUtils().groupInfoNew(libraryObj);
        inc.update(); // Incident update
        current.setAbortAction(true); //not create incident new
    } else {

        // Set value category and subcategory
        
        current.category = 'security_services';
        current.subcategory = 'other';

        //Comparate new Severity new email and setValue Priority
		switch (res1) {
            case 'Low':
                current.setValue('urgency', '4');
                current.setValue('impact', '4');
                break;
				
			case 'Informational':
                current.setValue('urgency', '4');
                current.setValue('impact', '4');
                break;
				
            case 'Medium':
                current.setValue('urgency', '3');
                current.setValue('impact', '3');
                break;

            case 'High':
                current.setValue('urgency', '2');
                current.setValue('impact', '2');
                break;
        }
		
        //Extract info ENTITIES Array and ajust.
        var Boemail1 = email.body_text;
        var entities1 = Boemail1.split("Entities:")[1];
        entities1 = entities1.split("[SOC ]")[0];
        entities1 = entities1.trim();
        entities1 = entities1.replace(/(\r\n|\n|\r)/gm, "");
        current.u_description_id = entities1;
        current.correlation_id = numberInc;
       

        //Extract info per JSON and separate group 
        var strformat1 = entities1.replaceAll('\\', '\\\\');
        var libraryObj1 = JSON.parse(strformat1);

        current.work_notes = new global._inboundUtils().groupInfoNew(libraryObj1);
    }


