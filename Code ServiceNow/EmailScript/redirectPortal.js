//Redirect portal
(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
/* Optional EmailOutbound */
email, /* Optional GlideRecord */ email_action,
/* Optional GlideRecord */
event) {


// Add your code here
var url = '<a href="' + gs.getProperty('glide.servlet.uri') + 'sp?id=ticket&table=x_ibmfs_csc_v2_cadastro&sys_id=' + current.sys_id + '">' + current.number + '</a>';
template.print(url);

})(current, template, email, email_action, event);
