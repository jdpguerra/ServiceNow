var userInfo = Class.create();
userInfo.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getInfo: function() {
        var userId = this.getParameter('sysparm_userId') + "";
        var user = new GlideRecord('sys_user');
        user.get(userId);
        var userInfo = '{';
        userInfo += '"email":"' + user.email + '"';
        userInfo += ',"employID":"' + user.u_employid + '"';
        userInfo += ',"department":"' + user.department + '"';
        userInfo += ',"branch_line":"' + user.phone + '"';
        userInfo += ',"business_unit":"' + user.u_business_unit + '"';
        userInfo += ',"cargo":"' + user.u_cargo + '"';
        userInfo += ',"manager":"' + user.manager.sys_id + '"';
        userInfo += ',"location":"' + user.location + '"';
        userInfo += '}';
        return userInfo;
    },
    updateUserPhone: function() {
        var id = this.getParameter("sysparm_id");
        var phone = this.getParameter("sysparm_phone");

        var gr = new GlideRecord("sys_user");
        gr.get(id);
        gr.setValue("phone", phone);
        gr.update();
    },

    getMed: function() {
        var arrayMed = [];
        var siglaName = '';

        var sysMed = this.getParameter('sysparm_userId');
        var regional = this.getParameter('sysparm_regional');

        var gr = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        gr.addEncodedQuery('sys_id=' + sysMed + '^active=true^ORDERBYDESCname');
        gr.query();
        while (gr.next()) {
            siglaName = gr.getDisplayValue('name');
        }


        var grMedico = new GlideRecord('x_ibmfs_csc_v2_tabela_user');

        grMedico.addEncodedQuery('active=true^prod_sl_exame=' + siglaName + '^regionais_especificas.sys_idIN' + regional);
        grMedico.query();

        while (grMedico.next()) {
            var listMedico = grMedico.getUniqueValue();
            arrayMed.push({
                medicoid: grMedico.getUniqueValue(),
                mediconame: grMedico.getValue('nome_medico')
            });
        }



        var unique = [];
        var output = [];

        for (var i = 0; i < arrayMedico.length; i++) {
            if (unique[arrayMedico[i].mediconame]) continue;
            unique[arrayMedico[i].mediconame] = true;
            output.push(arrayMedico[i].medicoid);
        }


        var answer = output;
        return answer.toString();
    },

    getSection: function() {
        var sysSection = this.getParameter('sysparm_userId');
        //var obj = {};
        var grUnidade = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        //  grUnidade.addEncodedQuery('u_deadlineISEMPTY^sys_idIN'+sysSection);
        grUnidade.addEncodedQuery('u_brandISNOTEMPTY^sys_idIN' + sysSection);

        grUnidade.query();

        if (grUnidade.next()) {
            // 			obj.active = gr.u_deadline;
            // 			obj.number = gr.u_deadline.getUniqueValue();
            // 		}
            // 		var json = new JSON();
            // 		var data = json.encode(obj);
            // 		return data;
            //	var dead = grUnidade.u_deadline.getUniqueValue();
            return true;

        }
    },

    getAllUnits: function() {
        var unit = this.getParameter('sysparm_unit');
        var brand = this.getParameter('sysparm_brand');
        var sys_id = [];

        if (unit && brand && unit.includes(gs.getProperty('x_ibmfs_csc_v2.unit_sysid_todas'))) {
            var grUnits = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
            grUnits.addEncodedQuery('active=true^u_brand=' + brand + '^ORDERBYname');
            grUnits.query();

            var units = [];

            while (grUnits.next()) {

                var unitAux = {};
                unitAux.id = grUnits.getUniqueValue();
                unitAux.name = grUnits.getDisplayValue();
                units.push(unitAux);
            }
            //var jsonUtils = new JSON();
            return JSON.stringify(units);
            // return sys_id;

        }


    },

    type: 'userInfo'
});