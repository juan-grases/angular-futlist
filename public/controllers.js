var controllers = angular.module('futlist.controllers', []);

controllers.controller('AppCtrl', function($scope){

});

controllers.controller('SportCenterListCtrl', function($scope, $http, futlistData){
	$scope.list;

	futlistData.sportCenters().then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});