app.controller('mainCtrl', function($scope, dataServices){

	//$scope.quotes = dataServices.getData();

	var getData = function(){
		$scope.quotes = dataServices.getData(); 
	};

	$scope.addData = function(){
		dataServices.addData($scope.quote, $scope.newAuthor);
	};

	getData(); 

});