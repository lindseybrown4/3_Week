var app = angular.module("friendsList"); 


// a controller allows us to access properties that are on a $scope object and stick those properties on our view (aka html pages)

app.controller("mainCtrl", function($scope) { 
   //function is the call back and scope is the data that you will put into the controller
	$scope.friends = ['Jordan', 'Ryan', 'Chelsey', 'Emily', 'Krisen']; 

$scope.addFriend = function () {
	$scope.friends.push($scope.newFriends); 

}

}); 









