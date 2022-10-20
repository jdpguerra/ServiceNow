function onLoad() {


    var spThis = this;

    var catItem = spThis.angular.element(spThis.$('#sc_cat_item').find('sp-variable-layout')[0]).scope();

    var parent_g_form = catItem.getGlideForm();



g_form.setValue('u_modal_ref',parent_g_form.getValue('u_codigo_medico'));

g_form.setVisible('u_modal_ref',false);





}