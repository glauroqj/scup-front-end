'use strict';

angular.module('scup_tel')
.factory('PlansService', function($http, $q) {
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
		planing: function () {
			return $http.get('http://private-fe2a-scuptel.apiary-mock.com/plans')
			.then(returnResponseData, handleResponseError('Error ao efetuar login!'));
		}
	};
});