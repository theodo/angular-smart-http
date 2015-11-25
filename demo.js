angular.module('angularSmartHttpDemo', ['ngSmartHttp'])
  .controller('DemoCtrl', function($scope, SmartHttp) {
    $scope.waou = SmartHttp.getTest('http://bnp-ip-onecms-api-integration.bearstech.com/translation/locale/fr_FR');
    console.log($scope.waou);
  });
