const HTTP = new WeakMap();

class SmartHttp
{
  constructor($http) {
    HTTP.set(this, $http);
  }

  getTest(url) {
    return HTTP.get(this).get(url).then(result => result.data);
  }

  static smartHttpFactory($http) {
    return new SmartHttp($http);
  }
}

export default SmartHttp;
