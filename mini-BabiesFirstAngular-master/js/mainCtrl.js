var app = angular.module("friendsList"); 

// command 3
app.controller("mainCtrl", function($scope) { //function is the call back and scope is the data that you will put into the controller
	$scope.friends = ['Jordyn', 'Ryan', 'Chelsey']; 


$scope.addFriend = function() {
		$scope.friends.push($scope.newFriends);
	}

}); 