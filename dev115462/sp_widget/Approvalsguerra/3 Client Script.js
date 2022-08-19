function ($scope, spUtil, spUIActionsExecuter, $timeout) {
	var ESIGNATURE = {
		TYPE: "form",
		APPROVE_SYS: "cbfe291147220100ba13a5554ee4904d",
		REJECT_SYS: "580f711147220100ba13a5554ee4904b"
	};

	if ($scope.options.portal == true || $scope.options.portal == 'true') {
		$scope.contentColClass = "col-xs-12";
		$scope.options.portal = true;
	} else {
		$scope.options.portal = false;
		$scope.contentColClass = "col-sm-8";
	}

	$scope.data.op = "";
	spUtil.recordWatch($scope, "sysapproval_approver", "state=requested^approverIN" + $scope.data.myApprovals.toString(), function(data) {
		// don't double-roundtrip if update came from record just approved/rejected
		if (data.data.sys_id != $scope.data.target)
			spUtil.update($scope);
	});

	function get(id) {
		spUtil.update($scope).then(function(result) {
			$timeout(function () {
				var approvalIds = result && result.ids;
				// Set focus on last element
				if (id == -1)
					id = approvalIds[approvalIds.length - 1];
				// set focus on first element
				else if (id == 0)
					id = approvalIds[0];
				var key = id == "no-approval" ? "no-approval" : ("approval_task_" + id);
				setFocus(key);
			}, 500);
		});
	}

	function setFocus(id) {
		var ele = document.getElementById(id);
		if (ele)
			ele.focus();
	}

	function getNextApproval(id) {
		var approvals = $scope.data.ids,
		currentIndex = approvals.indexOf(id),
		hasNext = $scope.data.pagination.hasNext,
		hasPrevious = $scope.data.pagination.hasPrevious;

		// Action on only approval and no approval left
		if (approvals.length == 1 && !hasNext && !hasPrevious)
			return "no-approval";
		// Action on only approval in last page
		if (approvals.length == 1 && !hasNext)
			return 0;
		// Action on last approval item in current page
		if (currentIndex == approvals.length - 1 && hasNext)
			return -1;
		// Action on last approval item in last page
		if (currentIndex == approvals.length - 1)
			return approvals[currentIndex - 1];

		if (currentIndex >= 0 && currentIndex < approvals.length - 1)
			return approvals[currentIndex + 1]
	}

	$scope.approve = function(id, esigRequired) {
		var requestParams = {
			username: $scope.data.esignature.username,
			userSysId: $scope.data.esignature.userSysId
		};

		if($scope.data.esignature.e_sig_required && esigRequired) {
			spUIActionsExecuter.executeFormAction(ESIGNATURE.APPROVE_SYS, "sysapproval_approver" , id, [] , "", requestParams).then(function(response) {
			});			
		} else {
			$scope.data.op = "approved";
			$scope.data.target = id;
			get(getNextApproval(id));
		}
  }

	$scope.reject = function(id, esigRequired) {
		var requestParams = {
			username: $scope.data.esignature.username,
			userSysId: $scope.data.esignature.userSysId
		};

		if($scope.data.esignature.e_sig_required && esigRequired) {
			spUIActionsExecuter.executeFormAction(ESIGNATURE.REJECT_SYS, "sysapproval_approver" , id, [] , "", requestParams).then(function(response) {
			});
		} else {
			$scope.data.op = "rejected";
			$scope.data.target = id;
			get(getNextApproval(id));
		}
	}

	// pagination
	$scope.previousPage = function() {
		if ($scope.data.pagination.currentPage > 1)
			$scope.data.pagination.currentPage = $scope.data.pagination.currentPage - 1;
		else
			$scope.data.pagination.currentPage = 0;
      
		$scope.data.op = "previous";
		$scope.data.target = null;

		get(0);
	}

	$scope.nextPage = function() {
		$scope.data.op = "next";
		$scope.data.target = null;
		$scope.data.pagination.currentPage = $scope.data.pagination.currentPage+1;
		get(0);
	}
	
	$scope.getItemDisplay = function(task) {
		if (task.number && task.short_description)
			return task.number + " - " + task.short_description;
		
		return task.number || task.short_description || "";
	}
}