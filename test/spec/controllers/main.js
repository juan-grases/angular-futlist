describe('Unit: SportCenterListCtrl', function() {
  // Load the module with MainController
  beforeEach(module('futlist'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('SportCenterListCtrl', {
      $scope: scope
    });
  }));

  it('should create $scope.list', 
    function() {
      expect(scope.list).toBeUndefined();
  });
})