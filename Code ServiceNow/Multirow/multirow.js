(function executeRule(current, previous /*null when async*/ ) {

    // Add your code
    var sys_task = current.getUniqueValue();
    var var_set = "sys_id";

    var task_sm_code;
    var sys_parent;

    var grSMRQA = new GlideRecord('sc_multi_row_question_answer');
    grSMRQA.addEncodedQuery("variable_set=" + var_set + "^parent_id=" + sys_task + "^item_option_new=sys_id");
    grSMRQA.orderByDesc('sys_created_on');
    grSMRQA.setLimit(1);
    grSMRQA.query();
    if (grSMRQA.next()) {
        task_sm_code = grSMRQA.getValue("value");
    }

    var grTask = new GlideRecord('task');
    grTask.addEncodedQuery("sys_idSTARTSWITH" + sys_task);
    grTask.orderBy('number');
    grTask.setLimit(1);
    grTask.query();
    if (grTask.next()) {
        sys_parent = grTask.getValue("parent");
    }

    var grCase = new GlideRecord('sc_multi_row_question_answer');
    grCase.addEncodedQuery("variable_set=" + var_set + "^parent_id=" + sys_parent + "^item_option_new=sys_id");
    grCase.orderByDesc('sys_created_on');
    grCase.setLimit(1);
    grCase.query();
    if (grCase.next()) {
        grCase.setValue('value', task_sm_code);
       grCase.update();
    }

})(current, previous);

//Copy field to multirow
//UR>  https://www.servicenow.com/community/developer-articles/solved-issue-with-mrvs-multi-row-variable-set-accessing-the-form/ta-p/2319347
