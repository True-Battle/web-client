export class DbService {

  /* @ngInject */
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value, expiry) {
    const box = JSON.stringify({value: value, expiry: this._genExpiry(expiry)});
    this.storage.setItem(key, box);
  }

  setProperty(key, property, value, expiry) {
    const readObj = this.get(key);
    if (typeof readObj === 'object') {
      this.set(key, Object.assign(readObj, { [property]: value }), expiry)
    } else if (typeof readObj === 'array') {
      throw 'Value is not an object ';
    } else {
      this.set(key, { [property]: value }, expiry)
    }
  }

  get(key) {
    let result = undefined;
    let readValue = this.storage.getItem(key);
    if (readValue) {
      let box = JSON.parse(readValue);
      if (this.checkExpiry(box.expiry)) {
        result = box.value;
      } else {
        this.remove(key);
      }
    }
    return result;
  }

  remove(key) {
    this.storage.setItem(key, '');
  }

  _genExpiry(time) {
    return new Date().getTime() + (time * 1000);
  }

  checkExpiry(time) {
    return time === null || time - new Date().getTime() > 0
  }
}