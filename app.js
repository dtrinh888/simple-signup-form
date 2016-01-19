var app = angular.module('myApp', []);

app.directive('optIn', function(){
	return {
		restrict: 'E',
		transclude: true,
		template: '<opt-in><div class="brand-logo col-md-6" ng-transclude><img src="http://empoweredteamleaders.com/wp-content/uploads/2013/04/sign_up_blue.png" /></div></opt-in>',
		replace: true
	};
});