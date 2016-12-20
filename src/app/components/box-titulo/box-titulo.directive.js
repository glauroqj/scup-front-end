(function() {
	'use strict';

	angular
	.module('scup_tel')
	.directive('boxtitulo', function() {
		return {
			scope: {
				title: '='
			},
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'app/components/box-titulo/box-titulo.html'
		};
	});

})();