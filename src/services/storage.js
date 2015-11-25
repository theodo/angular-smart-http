const prefix = 'SMHTTP_';
const expires = 5000;

const WINDOW = new WeakMap();

class Storage
{
  constructor($window) {
    WINDOW.set(this, $window);
  }

  get(k) {
    return JSON.parse(this.getString(key));
  }

  set(key, value) {
    this.setString(key, JSON.stringify(value));
  }

  getString(key) {
    var now = new Date();
    var entry = JSON.parse(WINDOW.localStorage.getItem(prefix + key));
    if (now - entry.date < expires) {
      return entry.value;
    } else {
      //this.remove(key);
      return null;
    }
  }

  setString(key, value) {
    var now = new Date();
    var entry = JSON.stringify({
      date: new Date(),
      value: value
    });
    WINDOW.localStorage.setItem(prefix + key, entry);
  }

  static storageFactory($window) {
    return new Storage($window);
  }
}

export default Storage;
