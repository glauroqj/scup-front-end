(function() {
  'use strict';

  angular
  .module('scup_tel', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngCookies',
    'ngResource', 'ngRoute', 'ui.bootstrap', 'gajus.swing', 'chart.js','ui-notification'])
  .config(config);


  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/principal', {
      templateUrl: 'app/templates/principal.html',
      controller: 'PrincipalController',
      controllerAs: 'Principal'
    })
    .otherwise({
      redirectTo: '/principal'
    });

  }

  angular
  .module('notificationTest', ['ui-notification'])
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 30,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'left',
      positionY: 'bottom'
    });
  });

})();
