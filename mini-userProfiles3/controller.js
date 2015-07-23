var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsersData = function() {
    mainService.getUsers().then(function(dataFromService) {
      $scope.users = dataFromService;
    });
  }

  $scope.getUsersData();

});
