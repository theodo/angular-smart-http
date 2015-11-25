const prefix = 'SMHTTP_';
const expires = 5000;

const WINDOW = new WeakMap();

class Storage
{
  constructor($window) {
    WINDOW.set(this, $window);
  }

  get(key) {
    return JSON.parse(this.getString(key));
  }

  set(key, value) {
    this.setString(key, JSON.stringify(value));
  }

  getString(key) {
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

  setString(key, value) {
    var now = new Date();
    var entry = JSON.stringify({
      date: new Date(),
      value: value
    });
    WINDOW.get(this).localStorage.setItem(prefix + key, entry);
  }

  static storageFactory($window) {
    return new Storage($window);
  }
}

export default Storage;
