var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(this, function () {
  'use strict';

  var prefix = 'SMHTTP_';
  var expires = 5000;

  var WINDOW = new WeakMap();

  var Storage = (function () {
    function Storage($window) {
      _classCallCheck(this, Storage);

      WINDOW.set(this, $window);
    }

    _createClass(Storage, [{
      key: 'get',
      value: function get(key) {
        return JSON.parse(this.getString(key));
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        this.setString(key, JSON.stringify(value));
      }
    }, {
      key: 'getString',
      value: function getString(key) {
        var now = new Date();
        var entry = JSON.parse(WINDOW.get(this).localStorage.getItem(prefix + key));
        console.log(now - new Date(entry.date));
        if (now - new Date(entry.date) < expires) {
          return entry.value;
        } else {
          //this.remove(key);
          return null;
        }
      }
    }, {
      key: 'setString',
      value: function setString(key, value) {
        var now = new Date();
        var entry = JSON.stringify({
          date: new Date(),
          value: value
        });
        WINDOW.get(this).localStorage.setItem(prefix + key, entry);
      }
    }], [{
      key: 'storageFactory',
      value: function storageFactory($window) {
        return new Storage($window);
      }
    }]);

    return Storage;
  })();

  var HTTP = new WeakMap();
  var Q = new WeakMap();
  var STORAGE = new WeakMap();

  var SmartHttp = (function () {
    function SmartHttp($http, $rootScope, $q, Storage) {
      _classCallCheck(this, SmartHttp);

      HTTP.set(this, $http);
      Q.set(this, $q);
      STORAGE.set(this, Storage);
    }

    _createClass(SmartHttp, [{
      key: 'get',
      value: function get(url) {
        var _this = this;

        var key = 'GET' + url;
        var fromStorageSync = STORAGE.get(this).get(key);
        var fromStorage = Q.get(this).resolve(fromStorageSync);
        var fromRemote = HTTP.get(this).get(url).then(function (data) {
          STORAGE.get(_this).set(key, data);
        });

        if (fromStorageSync == null) {
          fromStorage.$fresh = fromRemote;
          return fromStorage;
        } else {
          fromRemote.$fresh = Q.get(this).resolve(false);
          return fromRemote;
        }
        return deferred.promise;
      }
    }], [{
      key: 'smartHttpFactory',
      value: function smartHttpFactory($http, $rootScope, $q, Storage) {
        return new SmartHttp($http, $rootScope, $q, Storage);
      }
    }]);

    return SmartHttp;
  })();

  var moduleName$1 = 'ngSmartHttp.services';

  angular.module(moduleName$1, []).factory('SmartHttp', SmartHttp.smartHttpFactory).factory('Storage', Storage.storageFactory);

  var moduleName = 'ngSmartHttp';

  var app = angular.module(moduleName, [moduleName$1]);
});
//# sourceMappingURL=angular-smart-http.js.map
