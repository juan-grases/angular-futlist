var services = angular.module('futlist.services', []);

services.factory('futlistData', function ($http) {
	return {
		sportCenters: function(){
			return $http.get('http://localhost:3001/establecimientos.json');
		}
	}
});