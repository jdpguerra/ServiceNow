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

    getAcronymDescription: function() {
        var userId = this.getParameter('sysparm_userId');

        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.get(userId);
        var acronymDescription = grSigla.getValue("description");

        return acronymDescription;
    },
    getProcessing: function() {
        var userId = this.getParameter('sysparm_userId');

        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.get(userId);
        var acronymDescription = grSigla.getValue("u_section_coordinator");

        return acronymDescription;
    },
    getUnidade: function() {
        var sysUnid = this.getParameter('sysparm_userId');
        var grUnidade = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grUnidade.addEncodedQuery('u_mobile_service=true^sys_idIN' + sysUnid);
        grUnidade.query();

        if (grUnidade.next()) {

            return true;
        }
    },

    getMedico: function() {
        var arrayMedico = [];
        var siglaName = '';

        var sysMedico = this.getParameter('sysparm_userId');
        var regional = this.getParameter('sysparm_regional');

        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.addEncodedQuery('sys_id=' + sysMedico + '^active=true^ORDERBYDESCname');
        grSigla.query();
        while (grSigla.next()) {
            siglaName = grSigla.getDisplayValue('name');
        }


        var grMedico = new GlideRecord('x_ibmfs_csc_v2_tabela_user');

        grMedico.addEncodedQuery('active=true^prod_sl_exame=' + siglaName + '^regionais_especificas.sys_idIN' + regional);
        grMedico.query();

        while (grMedico.next()) {
            var listMedico = grMedico.getUniqueValue();
            arrayMedico.push({
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

    getPrazo: function() {

        var sysAcro = this.getParameter('sysparm_userAcro');
        var sysBrand = this.getParameter('sysparm_userBrand');
        var sysUnit = this.getParameter('sysparm_userUnit');
		var nomeSigla = this.getSiglaName(sysAcro);
		
	
        var grPrazo = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grPrazo.addEncodedQuery('active=true^prod_sl_exame=' + nomeSigla + '^id_unid_cd_unidade.u_brand=' + sysBrand + '^id_unid_cd_unidade=' + sysUnit);
        grPrazo.query();
        if (grPrazo.next()) {

            var dataPrazo = grPrazo.getValue("prazo_especifico");
            return dataPrazo;
        }


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


    getProcess: function() {


        var procSection = this.getParameter('sysparm_teste');


        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.addEncodedQuery('active=true^sys_id=' + procSection);
        grSigla.query();
        //gs.info('helena sigla ' + procSection);
        if (grSigla.next()) {
            var dataSigla = grSigla.getValue("section");

        }


        var grPrazo = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grPrazo.addEncodedQuery('sys_id=' + dataSigla + '^u_active=true');

        grPrazo.query();

        if (grPrazo.next()) {

            var dataPrazo = grPrazo.getUniqueValue();


            return dataPrazo;
        }

    },

    getRefQual: function(section) {
        var sys_id = [];

        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.addEncodedQuery('active=true^section=' + section);
        grSigla.query();

        while (grSigla.next()) {
            sys_id.push(grSigla.getUniqueValue());
        }
        return sys_id.toString();

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

    getProdNoExam: function() {
        var userId = this.getParameter('sysparm_userId');

        var grSigla = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grSigla.get(userId);
        var ProdNoExam = grSigla.getValue("prod_no_exame");

        return ProdNoExam;
    },

    informaPrazo: function(acron, unity) {
        var acronId = this.getParameter('sysparm_acron') || acron;
		var acroName = this.getSiglaName(acronId);
        var secId = this.getParameter('sysparm_sec'); // || unity;
        var grXICV2SRP = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grXICV2SRP.addEncodedQuery('name=' + acroName + '^id_seca_cd_secao=' + secId + '^ORDERBYname');
        grXICV2SRP.query();
        if(grXICV2SRP.next()) {
            var przo = grXICV2SRP.getDisplayValue('id_przo_cd_prazo_padrao');
        }
        return przo;
    },

    getSiglaName: function(sigla) {
        var grs = new GlideRecord('x_ibmfs_csc_v2_tabela_user');
        grs.get(sigla);
        var acron = grs.getValue('name');
        return acron;
    },

    type: 'userInfo'
});