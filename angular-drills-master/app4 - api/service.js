app.service('starWarsService', function ($http) {

 // I am the function ready to recieve the answer    
var handleResponse = function(webResponse){
	return webResponse.data;
};

    this.getStarWarsPeople = function() {
    	//Hearing the question
    	// Doesnt know the anskwer 
    	// asks HTTP 
	var promise = $http({
		// I dont know but I promise I'll get it
		method: 'GET',
		url: 'http://swapi.co/api/people/1/'
	})
	promise.then(
		//Tell this guy when we have an anser: Bottom
		//Will get the anser first becaue he's at the bottom
	handleResponse); 
	return promise;
}

});

