(function() {
	'use strict';

	angular
	.module('scup_tel')
	.directive('navbarheader', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/navbar-header/navbar-header.html'
		};
	});

})();