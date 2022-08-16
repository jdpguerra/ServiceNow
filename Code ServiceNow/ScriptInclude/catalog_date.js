
var catalogDate = Class.create();
catalogDate.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    functionDate: function() {
        var dateValue = this.getParameter('sysparm_value');
        var numberDay = this.getParameter('sysparm_days');
		
		var test = '00:00:00';
		
		var test1 = dateValue+' '+test;
		gs.info('helena first '+test1);
        //start validation holiday
        var gr = new GlideRecord('cmn_schedule_span');
       gr.addEncodedQuery('schedule=sys_id');
		
        gr.query();

        while (gr.next()) {
            var mes = "";
            var dia = "";
            //2021-11-02
            dia = dateValue.substring(8);
            mes = dateValue.substring(5, 7);

            var formDat = dia + "/" + mes;
            var dateTime = gr.getValue('end_date_time');

            //20180330T235959
            mes = dateTime.substring(4, 6);
            dia = dateTime.substring(6, 8);
            var formatDate = dia + "/" + mes;


            if (formatDate == formDat) {

                return "3";
            }

        }

     //   return false;



        //End validation holiday
        var grDate = new GlideDateTime(test1);
        var dayValue = grDate.getDayOfWeekUTC();
		
		
		
        var currentDate = new GlideDateTime();
        var currentDayValue = currentDate.getDayOfWeekUTC();
		
		
	
        currentDate.addDaysLocalTime(numberDay);
		
		
        if (currentDayValue == 5 && numberDay == 2){
            currentDate.addDaysLocalTime(2);
		//	validateDay =1; 
		//	return "1";
		}
        else if (currentDayValue == 5 && numberDay == 1){
            currentDate.addDaysLocalTime(1);}

        if (currentDayValue == 4 && numberDay == 2){
            currentDate.addDaysLocalTime(3);
			 //return "1";
			
		}
		
        else if (currentDayValue == 4 && numberDay == 1){
            currentDate.addDaysLocalTime(2);
		}

        if (dayValue == 6 || dayValue == 7) // If Date field selects future weekend..
            return "2";

       // if (grDate.before(currentDate))
           //return "1";
    },


    type: 'catalogDate'
});