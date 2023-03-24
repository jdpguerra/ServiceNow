//function ($uibModal, $scope, spUtil) {
	var c = this;

	$scope.$on('record.updated', function(name, data) {
		c.data.reopenComments = '';
		spUtil.update($scope);
	})

	c.uiAction = function(action) {
		c.data.action = action;
		c.server.update().then(function() {
			c.data.action = undefined;
		})
		c.modalInstance.close();
	}
	c.openModalReopen = function() {
		c.modalInstance = $uibModal.open({
			templateUrl: 'modalTemplateReopen1',
			scope: $scope
		});
	}

	c.closeModal = function() {
		c.modalInstance.close();
	}
//}