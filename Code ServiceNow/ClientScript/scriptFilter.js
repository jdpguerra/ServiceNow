//https://docs.servicenow.com/en-US/bundle/tokyo-platform-user-interface/page/use/using-lists/task/t_ScriptedFilters.html
//([Caller] [is] [javascript:myFunction()]).

function myFunction ( ) { 
    var arrUsers  = [ ];
    gr  = new GlideRecord ( 'u_intensive_care' );
    now_GR. query ( ); 
    while (now_GR. next ( ) ) {
        arrUsers. push (now_GR. u_customer. toString ( ) ); 
    }
    return arrUsers;
}

//other link:
//https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0746219
