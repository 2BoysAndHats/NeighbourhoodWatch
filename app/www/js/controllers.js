angular.module('starter.controllers', [])

.controller('GreenCtrl', function($scope,Email) {
	$scope.title = "Green";

	$scope.formdata = {
		name:"",
		location:"",
		comment:""
	};

	$scope.submit = function () {
		 Email.sendEmail($scope);
	}

})

.controller('AmberCtrl', function($scope,Email) {
  	$scope.title = "Amber";

  	$scope.formdata = {
  		name:"",
		location:"",
		comment:""
	};

	$scope.submit = function () {
		Email.sendEmail($scope);
	}
})

.controller('RedCtrl', function($scope,Email) {
  	$scope.title = "Red";

  	$scope.formdata = {
  		name:"",
		location:"",
		comment:""
	};

	$scope.submit = function () {
		Email.sendEmail($scope);	
	}
});
