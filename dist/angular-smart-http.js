var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(this, function () {
  'use strict';

  var HTTP = new WeakMap();

  var SmartHttp = (function () {
    function SmartHttp($http) {
      _classCallCheck(this, SmartHttp);

      HTTP.set(this, $http);
    }

    _createClass(SmartHttp, [{
      key: 'getTest',
      value: function getTest(url) {
        return HTTP.get(this).get(url).then(function (result) {
          return result.data;
        });
      }
    }], [{
      key: 'smartHttpFactory',
      value: function smartHttpFactory($http) {
        return new SmartHttp($http);
      }
    }]);

    return SmartHttp;
  })();

  var moduleName$1 = 'ngSmartHttp.services';

  angular.module(moduleName$1, []).factory('SmartHttp', SmartHttp.smartHttpFactory);

  var moduleName = 'ngSmartHttp';

  var app = angular.module(moduleName, [moduleName$1]);
});
//# sourceMappingURL=angular-smart-http.js.map
