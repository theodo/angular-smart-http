const HTTP = new WeakMap();
const Q = new WeakMap();

class SmartHttp
{
  constructor($http, $rootScope, $q) {
    HTTP.set(this, $http);
    Q.set(this, $q);
    this.data = undefined;
  }

  get(url) {
    let deferred = Q.get(this).defer();
    var dataAvailable = this.trads;
    if (dataAvailable) {
      deferred.resolve(this.trads);
    }
    HTTP.get(this).get(url).then((result) => {
      this.data = result.data;
      if (dataAvailable) {
        $rootScope.$broadcast('dataAvailable', result.data);
      } else {
        deferred.resolve(result.data);
      }
    });
    return deferred.promise;
  }

  static smartHttpFactory($http, $rootScope, $q) {
    return new SmartHttp($http, $rootScope, $q);
  }
}

export default SmartHttp;
