angular.module('myApp')
.controller('aboutCtrl', function($scope, $stateParams, playersService) {
  $scope.player = playersService.getPlayerById($stateParams.id);
})