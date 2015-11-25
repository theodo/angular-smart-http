angular.module('angularSmartHttpDemo', ['ngSmartHttp', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('first', {
      url: "/",
      template: '<p>{{data | json}}</p><button ui-sref="second">Second</button>',
      controller: 'DemoCtrl'
    })
    .state('second', {
      url: "/second",
      template: '<p>{{data | json}}</p><button ui-sref="first">First</button>',
      controller: 'DemoCtrl'
    });
  })
  .controller('DemoCtrl', function($scope, SmartHttp) {
    SmartHttp.get('http://bnp-ip-onecms-api-integration.bearstech.com/translation/locale/fr_FR')
    .then(function(data) {
      $scope.data = data;
    });
  });
