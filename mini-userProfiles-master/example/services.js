angular.module("name").services('service', function(){
var frnch ="thingie"; // this is not accessible to any code outside of this sercice function
this.getter = function() {
	return frnch;
	}
)};
