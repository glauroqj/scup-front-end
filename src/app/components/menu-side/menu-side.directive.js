(function() {
	'use strict';

	angular
	.module('scup_tel')
	.directive('menuside', function() {
		return {
			scope: true,
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/menu-side/menu-side.html' 
		};
	})

})();