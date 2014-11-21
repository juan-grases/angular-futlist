var controllers = angular.module('futlist.controllers', []);

controllers.controller('AppCtrl', function($scope){

});

controllers.controller('SportCenterListCtrl', function($scope, $http){
	$scope.list;

	$http.get('http://localhost:3001/establecimientos.json').then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});