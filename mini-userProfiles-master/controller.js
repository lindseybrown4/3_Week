angular.module('userProfiles').controller('MainController', function($scope, mainService) {
	// create a function in our controller that gathers the data and prepares it to be sent to the view
// OR app.controller('MainController', function($scope) { you don't need to redefine global variable in application
 
 $scope.getUsers = function(){
 	$scope.users = mainService.getUsers(); 

 }

//  *In the controller.js file, create a function on the $scope object named "getUsers"
// *Then, inject the mainService in the controller
// *Now, within the new getUsers function, we can access the mainService's getUsers function
//    * Let's set a variable called $scope.users equal to the result of the mainService's function
//    *Also, we should invoke our $scope.getUsers function after we have declared it or it won't run

 $scope.getUsers()
	
console.log($scope.users)


})