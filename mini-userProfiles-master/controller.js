angular.module('userProfiles')
.controller('MainController', function($scope, mainService) {
// OR app.controller('MainController', function($scope) { you don't need to redefine global variable in application
 
 $scope.getUsers = function(){
 	$scope.users = mainService.getUsers(); 

 }

 $scope.getUsers()
	
 console.log($scope.users)


})