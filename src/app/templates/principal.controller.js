(function() {
	'use strict';

	angular
	.module('scup_tel')
	.controller('PrincipalController', PrincipalController);

	function PrincipalController($rootScope, $uibModal, $log, Notification, $location, DetailsService, PriceService, $cookies) {
		var vm = this;

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
			});
		}


		/*separação
		var posicao = 0;
		var login_status_admin = false;
		var login_status_user = false;

		vm.submit = function submit (user, password) {
			vm.response = {};
			AuthLoginService.verify().then(function(response) {
				vm.roles = response;
				vm.roles.worker.forEach(function(role){
					vm.name = role.name;
					vm.pass = role.pass;
					vm.access = role.access;

					if ((user === vm.name) && (password === vm.pass) && (vm.access === 'admin')) {
						//alert("ADMIN");
						$location.path('/dashboard');
						create_auth('admin');
						Notification({message: 'Olá '+vm.name+', você está logado!'}, 'success');
						login_status_admin = true;
					}
					else if ((user === vm.name) && (password === vm.pass) && (vm.access === 'user')) {
						//alert("USER")
						$location.path('/dashboard');
						create_auth('user');
						Notification({message: 'Olá '+vm.name+' você está logado!'}, 'success');
						login_status_user = true;
					}

				})

				if ( (login_status_admin != true) && (login_status_user != true ) ) {
					Notification({message: 'Login ou Senha inválidos!'}, 'error');
				}

			});

		};

		function create_auth (param) {
			$cookies.put('logado', param);
		}

		// var actualCookie = $cookies.get('logado');
		// console.log(actualCookie);

		*/

	}/*end*/

})();