'use strict';

angular.module('scup_tel')
.factory('PriceService', function($http, $q) {
	var returnResponseData = function (response) {
		return response.data;
	};
	var handleResponseError = function (logMessage) {
		return function (errResponse) {
			console.error(logMessage);
			return $q.reject(errResponse);
		};
	};
	return {
		pricing: function () {
			return $http.get('http://private-fe2a-scuptel.apiary-mock.com/ddd/pricing')
			.then(returnResponseData, handleResponseError('Error ao buscar preços!'));
		}
	};
});