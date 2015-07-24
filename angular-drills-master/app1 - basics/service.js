var mod = angular.module('basicsApp'); 

var myServiceObject = {
			getMeWords: function(){
				return "these are words";
		}
}; 


	mod.service('basicsService', function() {   // step 6 declare the serice
			return myServiceObject; 
	
	}); 