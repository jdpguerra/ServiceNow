(function() {
	var gr = $sp.getRecord();

	if (gr == null)
		return;

	data.canRead = gr.canRead();
	if (!data.canRead) 
		return;

	var state = $sp.getField(gr, 'state');

	// the survey that is being taken
	data.survey = options.survey;
	data.table = 'asmt_metric_type';
	data.recordId = $sp.getParameter('sys_id');
	data.user = gs.getUser().getID();
	data.alreadyTaken = false;
	var pageId = $sp.getParameter('id');
	var portal = $sp.getPortalRecord().getDisplayValue("url_suffix");
	data.showSurvey = true;
	data.overallQuality = gs.getProperty('metric.question.overall.quality');
	
	if (portal == 'auren' && pageId != 'survey_widget_custom') {
		data.showSurvey = false;
	}

	if (input) {
		if (input.action == 'submit') {
			var grAnswer = new GlideRecord('asmt_assessment_instance_question');
			grAnswer.addEncodedQuery('instance=' + input.instance);
			grAnswer.query();

			while (grAnswer.next()) {
				var type = grAnswer.getElement('metric.datatype');
				var id = grAnswer.getElement('metric.sys_id');
				var value;

				// if (type == 'scale') {
				// 	grAnswer.setValue('value', 0);
				// 	grAnswer.setValue('value', input.rating);

				// } 
				if (id == data.overallQuality) {
					grAnswer.setValue('value', 0);
					grAnswer.setValue('value', input.rating);

				} else if (type == 'string') {
					if (input.textOther[id]) {
						grAnswer.setValue('string_value', input.textOther[id]);
					}
					grAnswer.setValue('value', 0);

				} else if (type == 'checkbox') {
					if (input.response[id]) {
						grAnswer.setValue('value', 1);
						grAnswer.setValue('string_value', 'true');
					} else {
						grAnswer.setValue('value', 0);
						grAnswer.setValue('string_value', 'false');
					}
				} else if (type == 'numericscale') {
					grAnswer.setValue('value', 0);
				}

				grAnswer.update();
			}

			var grInstance = new GlideRecord('asmt_assessment_instance');
			grInstance.get(input.instance);
			grInstance.setValue('state', 'complete');
			var gd = new GlideDateTime();
			grInstance.setValue('taken_on', 'gd');
			grInstance.update(); 
		}
	}

	if (canTakeSurvey(data.survey, data.recordId, data.user)) {
		data.canTakeSurvey = true;
		data.questions = getQuestions(data.survey);
		//Added new value
		data.feedbackQuestionId = gs.getProperty("feedback_question_id");
	}

	// check if the survey exists
	function canTakeSurvey(survey, id, user) {
		var takenSurveys = new GlideRecord('asmt_assessment_instance');
		takenSurveys.addEncodedQuery('metric_type.evaluation_method=survey^trigger_id=' + id + '^metric_type=' + survey + '^user=' + user);
		takenSurveys.setLimit(1);
		takenSurveys.query();

		if (takenSurveys.next()) {
			if (takenSurveys.getValue('state') == 'ready') {
				data.instanceId = takenSurveys.getValue('sys_id');
				return true;
			} else if (takenSurveys.getValue('state') == 'complete') {
				data.surveyAlreadyTaken = true;
				return false;
			}
			else 
				return false;
		}
	}

	// retrieve questions
	function getQuestions(survey) {
		var gr = new GlideRecord('asmt_metric');
		gr.addEncodedQuery('metric_type.evaluation_method=survey^metric_type=' + survey);
		gr.query();

		questions = [];

		while (gr.next()) {
			var obj = {};

			obj.id = gr.getValue('sys_id');
			obj.question = gs.getMessage(gr.getValue('question'));
			obj.type = gr.getValue('datatype');
			obj.formId = '_' + Math.random().toString(36).substr(2, 7);
			//Added new value
			obj.mandatory = false;

			questions.push(obj);
		}

		return questions;
	}

})();