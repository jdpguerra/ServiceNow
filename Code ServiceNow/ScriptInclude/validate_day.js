//validate 2 day

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

//     var currentDateObj = new Date();
// 	alert (currentDateObj);
//     var currentDateStr = formatDate(currentDateObj, g_user_date_format);
//     var currentDate = getDateFromFormat(currentDateStr, g_user_date_format);
//     var messagefinal = "Please ensure that the Start date is one day in the future!";

//     var startDate = getDateFromFormat(newValue, g_user_date_format);
// 	alert (startDate);

//     var twoDaysMore = new Date();
//     twoDaysMore.setDate(twoDaysMore.getDate() + 2);
//     var formatTwoDayMores = formatDate(twoDaysMore, g_user_date_format);
// 	alert (formatTwoDayMores);
	
//     var currentTwoDayMore = getDateFromFormat(formatTwoDayMores, g_user_date_format);
	
// 	alert (currentTwoDayMore);

//     if (startDate < currentTwoDayMore) {

//         //alert ("entrei");
//         g_form.showFieldMsg('u_date_and_time', messagefinal, 'error');
//        // g_form.addErrorMessage(getMessage('Please ensure that the Start date is one day in the future!'));
//         g_form.clearValue('u_date_and_time');
//         //	return;
//     }

    //get the new and current date/time as an object

    var dateObjectNow = new Date();

    var dateObjectNew = new Date(newValue);

    //get the dates in days - also use floor to convert valeus to integers

    var dateNow = Math.floor(dateObjectNow.valueOf()/(1000*60*60*24));

    var dateNew = Math.floor(dateObjectNew.valueOf()/(1000*60*60*24));

    // Get day of week (Sunday = 0)

    var dayOfWeek = dateObjectNew.getDay();

 

    // Check Date if date is 2 or more days in the future and not on the weekend.

    // dateNow is the Date/Time now, whereas dateNew is the date at midnight

    // so dateNew currently equals dateNow -1.  So use 2 in the check below (not 2).

    var msg;

 //   if (dateNew >= (dateNow + 2) && dayOfWeek > 0 && dayOfWeek < 6) {
    if (dateNew >= (dateNow + 2)) {
		

        msg = 'Date is OK';

        g_form.hideFieldMsg('u_date_and_time',true);

        g_form.showFieldMsg('u_date_and_time',msg,'info',false);

    }

    else {

        msg = 'ERROR: Date must be 2 or more days in the future and not on the weekend.';

        g_form.hideFieldMsg('u_date_and_time',true);

        g_form.showFieldMsg('u_date_and_time',msg,'error',false);

    }
    //Type appropriate comment here, and begin script below

}