angular.module('userProfiles')
.service("mainService", function(){ //you will never makye your service dependent on scope so you don't need to include it into the parens

var data = [
{
    "id": 1,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 2,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 3,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}];

this.getUsers = function() {
	return data; 
}

}); 