const HTTP = new WeakMap();
const Q = new WeakMap();
const STORAGE = new WeakMap();

class SmartHttp
{
  constructor($http, $rootScope, $q, Storage) {
    HTTP.set(this, $http);
    Q.set(this, $q);
    STORAGE.set(this, Storage);
  }

  get(url) {
    var key = 'GET' + url;
    var fromStorageSync = STORAGE.get(this).get(key);
    var fromStorage = Q.get(this).resolve(fromStorageSync);
    var fromRemote = HTTP.get(this).get(url).then((data) => {
      STORAGE.get(this).set(key, data);
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

  static smartHttpFactory($http, $rootScope, $q, Storage) {
    return new SmartHttp($http, $rootScope, $q, Storage);
  }
}

export default SmartHttp;
