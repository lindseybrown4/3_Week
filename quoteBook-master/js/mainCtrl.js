app.controller('mainCtrl', function($scope, dataServices){

	//$scope.quotes = dataServices.getData();

	var getData = function(){
		$scope.quotes = dataServices.getData(); 
	};

	$scope.addData = function(){
		dataServices.addData($scope.quote, $scope.newAuthor);
	};

	getData(); 

	$scope.removeData = function(){
		dataServices.removeData()  
	}



});

##Step 4: Add Options to Filter, Add, and Remove Items from your Quotes Array
* Create three buttons, Add Quote, Remove Quote, and Filter Quotes
* Using ng-click and the methods we set up on our dataService object earlier, make those three buttons do the appropriate action.
* Once you've finished, add some ng-shows to 'toggle' the input boxes for add, remove, and filter making sure you only show one at a time.

##Step 5: Persist your Quotes using your browser's local storage
* Use JSON.stringify and JSON.parse to store the quotes object in your browser's local storage.