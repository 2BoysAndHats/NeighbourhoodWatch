angular.module('starter.controllers', [])

.controller('GreenCtrl', function($scope,Email,GeoService) {
	$scope.title = "Green";

	$scope.formdata = {
		name:"",
		location: "",
		comment:""
	};

	$scope.submit = function () {
		 Email.sendEmail($scope);
		 $scope.formdata = {};
	}

	//Get location
	GeoService.getPosition().then(function (pos) {
		$scope.formdata.location = pos.coords.latitude + "," + pos.coords.longitude;
	},function (error) {	
		console.log(error)
	});

})

.controller('AmberCtrl', function($scope,Email,GeoService) {
  	$scope.title = "Amber";

  	$scope.formdata = {
		name:"",
		location: "",
		comment:""
	};

	$scope.submit = function () {
		Email.sendEmail($scope);
		$scope.formdata = {};
	}

	//Get location
	GeoService.getPosition().then(function (pos) {
		$scope.formdata.location = pos.coords.latitude + "," + pos.coords.longitude;
	},function (error) {	
		console.log(error)
	});
})

.controller('RedCtrl', function($scope,Email,GeoService) {
  	$scope.title = "Red";

	$scope.formdata = {
		name:"",
		location: "",
		comment:""
	};

	$scope.submit = function () {
		Email.sendEmail($scope);	
		$scope.formdata = {};
	}

	
});