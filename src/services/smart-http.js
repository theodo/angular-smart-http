const HTTP = new WeakMap();

class SmartHttp
{
  constructor($http) {
    HTTP.set(this, $http);
  }

  getTest() {
    return HTTP.get(this).get('http://google.fr').then(result => result.data);
  }

  static smartHttpfactory($http) {
    return new SmartHttp($http);
  }
}

export default SmartHttp;
