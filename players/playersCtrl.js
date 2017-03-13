angular.module('myApp')
.controller('playersCtrl', function($scope, playersService) {
  
  $scope.players = playersService.getPlayers();
})