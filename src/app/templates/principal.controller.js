(function() {
	'use strict';

	angular
	.module('scup_tel')
	.controller('PrincipalController', PrincipalController);

	function PrincipalController($rootScope, $uibModal, $log, Notification, $location, DetailsService, PriceService, $cookies) {
		var vm = this;
		var fale30 = 0;
		var fale60 = 0;
		var fale120 = 0;
		var normal = 0;
		var acrescimo = 0;

		function call_ddd() {
			DetailsService.verify().then(function(response) {
				vm.infos = response;
				vm.infos.data.forEach(function(info) {
					vm.ddd = info.ddd;
					vm.city = info.city;
				});

			});
		}

		call_ddd();

		vm.calcular = function calcular (origem, destino, tempo) {
			console.log(origem, destino, tempo)
			PriceService.pricing().then(function(response) {
				vm.prices = response;
				vm.prices.data.forEach(function(price) {
					vm.origin = price.origin;
					vm.destiny = price.destiny;
					vm.price = price.price;

					if ( origem == vm.origin && destino == vm.destiny ) {

						if ( tempo <= 30 ) {
							fale30 = vm.price * tempo * 0;
							vm.fale30 = fale30;
							console.log(vm.fale30)
						} 
						else {
							acrescimo = 10 * vm.price / 100;
							vm.price = parseFloat( vm.price );
							fale30 =  ( tempo - 30 ) * ( vm.price + acrescimo ) ;
							vm.fale30 = fale30.toFixed(2);
							console.log(vm.fale30)
						}

						if ( tempo <= 60 ) {
							fale60 = vm.price * tempo * 0;
							vm.fale60 = fale60;
							console.log(vm.fale60)
						} 
						else {
							acrescimo = 10 * vm.price / 100;
							vm.price = parseFloat( vm.price );
							fale60 =  ( tempo - 60 ) * ( vm.price + acrescimo ) ;
							vm.fale60 = fale60.toFixed(2);
							console.log(fale60)
						}

						if ( tempo <= 120 ) {
							fale120 = vm.price * tempo * 0;
							vm.fale120 = fale120;
							console.log(vm.fale120)
						} 
						else {
							acrescimo = 10 * vm.price / 100;
							vm.price = parseFloat( vm.price );
							fale120 =  ( tempo - 120 ) * ( vm.price + acrescimo ) ;
							vm.fale120 = fale120.toFixed(2);
							console.log(vm.fale120)
						}

						if ( tempo > 0 ) {
							normal = vm.price * tempo;
							vm.normal = normal.toFixed(2);
							console.log(vm.normal)
						} 

					}
					else {
						vm.fale30 = "-"
						vm.fale60 = "-"
						vm.fale120 = "-"
						vm.normal = "-"
					}
				})
			});
		}

	}/*end*/

})();