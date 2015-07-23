var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
  	var deferred = $q.defer() //will return a promise
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }) //close http
    .then(function(response) {
    	//play with data then resolve $q promise
    	var parsedResponse = response.data.data
    	for (var i = 0; i < parsedResponse.length; i++) {
    		parsedResponse[i].first_name = "Ralf"
    	} //end for loop
    	deferred.resolve(parsedResponse)
   }) //.then promise line 11
    return deferred.promise
  } //closes line 5

}); //end app