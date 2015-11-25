angular.module('angularSmartHttpDemo', ['ngSmartHttp'])
  .controller('DemoCtrl', function($scope, SmartHttp) {
    SmartHttp.get('http://bnp-ip-onecms-api-integration.bearstech.com/translation/locale/fr_FR')
    .then(function(data) {
      $scope.data = data;
      console.log(data);
      return SmartHttp.get('http://bnp-ip-onecms-api-integration.bearstech.com/translation/locale/fr_FR')
    })
    .then(function(data) {
      console.log(data);
    });
  });
