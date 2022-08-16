


    var dateWanted = this.getParameter('sysparm_value');


    //======================================

    var currentDate = new GlideDate();
    var currentDayValue = currentDate.getDayOfWeekUTC();
  
    //======================== adicionando +2 dias ao dia de hoje

    var twoDays = new GlideDate();
    twoDays.addDaysLocalTime(2);
    var twoDayValue = twoDays.getDayOfWeekUTC();
    // gs.info('hoje  helena mais 2 ' + twoDays);
    // gs.info('hoje mais 2 semana ' + twoDayValue);

    // teste  ======================= alterando formato para YYYY-DD-MM

    var date = dateWanted;

    date = date.split('/');
    date = date[2] + '-' + date[1] + '-' + date[0];

    //  gs.info('dia que quero - - - ' + date);



    //================= de string para glidedate


    //gs.info('date '+date);
    var gdt = new GlideDateTime(date);
    //gs.info('dia escolhido : ' + gdt);

    var newDayValue = gdt.getDayOfWeekUTC();
    //gs.info('dia escolhido semana : ' + newDayValue);


    //======================= verifica se dia escolhido é feriado

    var d = new GlideDateTime();
    d.setDisplayValue(gdt);
    //mention your schedule sys_id here.
    var schedule = new GlideSchedule('sys_id');

    if (schedule.isInSchedule(d)) {

        //  gs.info('verdadeiro');
        return "3";

    }

    //==================================== verificando se nos proximos 2 dias do dia de hoje tem feriado

    var todayOne = GlideDate();
    todayOne.addDaysLocalTime(1);
    var todayOneWeek = todayOne.getDayOfWeekUTC();
  

    var todayTwo = GlideDate();
    todayTwo.addDaysLocalTime(2);
    var todayTwoWeek = todayTwo.getDayOfWeekUTC();
  

    //===================== se os prox dias pertencem ao final de semana = FALSE

    if (todayOneWeek != 6 || todayOneWeek != 7 || todayTwoWeek != 6 || todayTwoWeek != 7) {

        //gs.info('helena entrei');

        // ================== verifica se primeiro dia é feriado, sem sim add um dia a contagem final da regra de ser 2 dias após dia de hoje

        var holOne = new GlideDateTime(todayOne);
        //gs.info('helena holOne '+holOne);

        var hol = new GlideDateTime();
        hol.setDisplayValue(holOne);
        //mention your schedule sys_id here.
        var schedulee = new GlideSchedule('sys_id');

        if (schedulee.isInSchedule(hol)) {

            // gs.info('helena primeiro TRUE');
            twoDays.addDaysLocalTime(1);
            //gs.info('helena add 1 dia '+twoDays);


        }

        // =============== verifica segundo dia é feriado, sem sim add um dia a contagem final da regra de ser 2 dias após dia de hoje

        var holTwo = new GlideDateTime(todayTwo);
        //gs.info('helena holTwo '+holTwo);


        var holidayTwo = new GlideDateTime();
        holidayTwo.setDisplayValue(holTwo);
        //mention your schedule sys_id here.
        var scheduli = new GlideSchedule('sys_id');

        if (scheduli.isInSchedule(holidayTwo)) {

            // gs.info('helena segundo');
            twoDays.addDaysLocalTime(1);

        }
    };

    // ========================== se o dia for final de semana

    if (newDayValue == 6 || newDayValue == 7) {

        return "2";
    };


    if (date <= twoDays) {
        //    gs.info('1 não valido');
        return "1";

    } else if (currentDayValue == 3) {
        twoDays.addDaysLocalTime(3);
        if (date < twoDays) {
            //gs.info('date '+date);
            //	gs.info('twodays '+twoDays);
            //    gs.info('2 não valido');
            return "1";
        }
    } else if (currentDayValue == 4) {
        twoDays.addDaysLocalTime(3);
        if (date < twoDays) {
            // gs.info('3 não valido');
            return "1";
        }
    } else if (currentDayValue == 5) {
        twoDays.addDaysLocalTime(3);
        if (date < twoDays) {
            // gs.info('4 não valido');
            return "1";
        }
    } else if (currentDayValue == 6) {
        twoDays.addDaysLocalTime(3);
        if (date < twoDays) {
            //  gs.info('5 não valido');
            return "1";
        }
    } else if (currentDayValue == 7) {
        twoDays.addDaysLocalTime(1);
        // gs.info('date quero ' + date);
        //  gs.info('date modificada ' + twoDays);
        if (date < twoDays) {
            // gs.info('7 não valido');
            return "1";

        }

    }

//Current Date

var date = this.getParameter('sysparm_date');


date = date.split('/');
date = date[2] + '-' + date[1] + '-' + date[0];
var dateTwo = new GlideDate();

if (date <= dateTwo) {

    return true;
}
return false;