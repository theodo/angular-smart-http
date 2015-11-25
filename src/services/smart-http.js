const HTTP = new WeakMap();
const Q = new WeakMap();

class SmartHttp
{
  constructor($http, $q) {
    HTTP.set(this, $http);
    Q.set(this, $q);
    this.trads = undefined;
  }

  get(url) {
    let deferred = Q.get(this).defer();
    if (this.trads) {
      deferred.resolve(this.trads);
    } else {
      HTTP.get(this).get(url).then((result) => {
        this.trads = result.data;
        deferred.resolve(result.data);
      });
    }
    return deferred.promise;
  }

  static smartHttpFactory($http, $q) {
    return new SmartHttp($http, $q);
  }
}

export default SmartHttp;
