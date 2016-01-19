var app = angular.module('myApp', []);

app.directive('optIn', function(){
	return {
		templateUrl: './opt-in.html',
		restrict: 'E',
		transclude: true,
		replace: false
	};
});