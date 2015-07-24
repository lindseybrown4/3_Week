(function () {
    "use strict";

    angular.module('chatroom')
        .service('parseService', function ($http) {

            this.getData = function () {
                return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt');
            };

            this.postData = function (message) {
                return $http.post('https://api.parse.com/1/classes/chat', message);
            };

        });

} ());


  //On the line below create the postData method. This method will add data to the parse backend.

  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Because we're making a POST request, we need a way to tell parse the data we want to give it, 
    //***in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
  
  //postData method here
  
  
  //getData method here

