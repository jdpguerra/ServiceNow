
	var c = this;
	c.selectedOthers = false;
	c.textInputs = {};

	// generate the label according to the star selected
	c.generateEvaluationLabel = function(value) {
		switch(value) {
			case '1':
				//c.valueText = "${Survey Widget - Very poor}";
				c.valueText = "${Satisfaction Survey - Very poor}";
				break;
			case '2':
				c.valueText = "${Satisfaction Survey - Poor}";
				break;
			case '3':
				c.valueText = "${Satisfaction Survey - Satisfactory}";
				break;
			case '4':
				c.valueText = "${Satisfaction Survey - Good}";
				break;
			case '5':
				c.valueText = "${Satisfaction Survey - Outstanding}";
				break;
			case 'confirmed':
				c.valueText = "${Satisfaction Survey - Thank you!}";
		}
	};

	//get survey as soon as ticket is closed
	spUtil.recordWatch($scope, 'task_survey', 'survey=' + c.data.survey + '^task=' + c.data.recordId + '^sent_to=' + c.data.user + '^state=requested', function(name, data) {
		c.server.get({}).then(function(res) {
			c.data = res.data;
		});
	});

	$scope.$watch('c.value', function(newValue, oldValue) {

		if (newValue) {
			//Added new value
			if (newValue <= 4) {
				for (var i in c.data.questions) {
					if (c.data.feedbackQuestionId == c.data.questions[i].id) c.data.questions[i].mandatory = true;
					else c.data.questions[i].mandatory = false;
				}
			} else {
				for (var j in c.data.questions) {
					c.data.questions[j].mandatory = false;
				}
			}
			c.generateEvaluationLabel(newValue);
			c.firstRatingDone = true; // switch to the complete view
		}

		if (newValue == 5 || oldValue == 5) {
			c.improvement = '';
			c.textInputs = '';
		}

	});

	c.toggleInput = function(id) {

		if (c.improvement) {
			if (c.improvement[id] == true) {
				return true;
			}
		}

		c.textInputs[id] = '';
		c.fillInput = false;

		return false;
	};

	// check if at least one improvement is selected
	c.validateCheckboxes = function(obj) {
		var array = [];

		if (obj) {
			for (var key in obj) {
				if (obj[key]) {
					array.push(obj[key]);
				}
			}

			if (array.length == 0) {
				return false;
			}

			return true;
		}
	};

	// check if there's no inputs empty
	c.validateInputs = function(obj) {

		if (obj) {
			for (var key in obj) {
				if (!obj[key] && c.improvement[key]) {
					return false;
				}
			}
		}

		return true;
	};

	c.resetValidation = function(type) {
		if (type == 'option') {
			c.selectOption = false;
		}

		if (type == 'input') {
			c.fillInput = false;
			//Added new value
			if (c.textInputs[c.data.feedbackQuestionId]) {
				for (var i in c.data.questions) {
					c.data.questions[i].mandatory = false;
				}
			} else {
				for (var j in c.data.questions) {
					if (c.data.feedbackQuestionId == c.data.questions[j].id) c.data.questions[j].mandatory = true;
					else c.data.questions[j].mandatory = false;
				}
			}
		}
	};

	c.confirmEvaluation = function() {

		if (!c.validateCheckboxes(c.improvement)) {
			c.selectOption = true;

			return;
		}

		if (!c.validateInputs(c.textInputs)) {
			c.fillInput = true;

			return;
		}

		var obj = {
			'action': 'submit',
			'rating': c.value,
			'survey': c.data.survey,
			'response': c.improvement,
			'recordID': c.data.recordId,
			'textOther': c.textInputs,
			'instance': $scope.data.instanceId
		};

		c.server.get(obj).then(function(res) {

			c.data = res.data;
			c.evaluationConfirmed = true;
			c.generateEvaluationLabel('confirmed');
		});

	};

	//Added new value
	c.verfifyDisabled = function() {
		var disabled = c.data.questions.find(function(obj, index) {
			if (obj.mandatory == true) return true;
			else return false;
		});
		if (disabled) return true;
		else return false;
	}
