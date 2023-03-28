//RITM
(function() {

    // Get table & sys_id
    data.table = input.table || $sp.getParameter("table");
    data.sys_id = input.sys_id || $sp.getParameter("sys_id");
   
    // Valid GlideRecord
    gr = new GlideRecord(data.table);
    if (!gr.isValid())
      return;
   
    // Valid sys_id
    if (!gr.get(data.sys_id))
      return;
   
     //Button Visibility
     if(data.table == 'sc_req_item' && gr.active == true && gr.state == 6 && (gs.hasRole("itil") || gs.getUserID() == gr.caller_id)){
       data.showWidget = true;
       data.showReopen = true;
           data.showClose = true;
     }
     else {
       data.showWidget = false;
       data.showReopen = false;
           data.showClose = false;
     }
   
    //input
    if (input && input.action) {
      var action = input.action;
   
      //Incident table
      if (data.table == 'sc_req_item') {
        if (action == 'reopen' && input.reopenComments !='') {
         // gr.setValue('incidstate', 2);
          gr.setValue('state', 2);
          gr.setValue('resolved_by', gs.getUserID());
                gr.comments.setJournalEntry(input.reopenComments, gs.getUserName());
          gr.update();
          data.response1 = gs.getMessage('Requisição '+gr.number+' was reopened');
        }
            else if(action == 'close') {
        //  gr.setValue('incident_state', 7);
          gr.setValue('state', 3);
          gr.setValue('closed_by', gs.getUserID());
          gr.update();
          data.response1 = gs.getMessage('Requisição '+gr.number+' was closed');
        }
      }
    }
   })();

   // INCIDENT

   (function() {

    // Get table & sys_id
    data.table = input.table || $sp.getParameter("table");
    data.sys_id = input.sys_id || $sp.getParameter("sys_id");
   
    // Valid GlideRecord
    gr = new GlideRecord(data.table);
    if (!gr.isValid())
      return;
   
    // Valid sys_id
    if (!gr.get(data.sys_id))
      return;
   
     //Button Visibility
     if(data.table == 'incident' && gr.active == true && gr.incident_state == 6 && (gs.hasRole("itil_admin") || gs.getUserID() == gr.caller_id)){
       data.showWidget = true;
       data.showReopen = true;
           data.showClose = true;
     }
     else {
       data.showWidget = false;
       data.showReopen = false;
           data.showClose = false;
     }
   
    //input
    if (input && input.action) {
      var action = input.action;
   
      //Incident table
      if (data.table == 'incident') {
        if (action == 'reopen' && input.reopenComments !='') {
          gr.setValue('incident_state', 2);
          gr.setValue('state', 2);
          gr.setValue('resolved_by', gs.getUserID());
                gr.comments.setJournalEntry(input.reopenComments, gs.getUserName());
          gr.update();
          data.response1 = gs.getMessage('Incident '+gr.number+' was reopened');
        }
            else if(action == 'close') {
          gr.setValue('incident_state', 7);
          gr.setValue('state', 7);
          gr.setValue('closed_by', gs.getUserID());
          gr.update();
          data.response1 = gs.getMessage('Incident '+gr.number+' was closed');
        }
      }
    }
   })();