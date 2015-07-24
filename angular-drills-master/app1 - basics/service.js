

angular.module('basicsApp').service('basicsService', function() {   // step 6 declare the serice
			return myServiceObject; 
	
	}); 

var myServiceObject = {
			getMeWords: function(){
				return "these are words";
		}
}; 


	