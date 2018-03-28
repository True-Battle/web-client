export class Dispatcher {

    /* @ngInject */
  constructor() {
    this._callbacks = {};
  }

  on(eventName, callback) {
    if (!this._callbacks[eventName]) {
      this._callbacks[eventName] = [];
    }
    this._callbacks[eventName].push(callback);
    return {destroy: this._destroy(eventName, callback).bind(this)}
  }

  emit(eventName, data) {
    if (!this._callbacks[eventName]) return;
    this._callbacks[eventName].forEach((item, index) => item(this._createBodyEvent(index+1), data));
  }

  _destroy(eventName, fn) {
    return () => {
      this._callbacks[eventName].splice(this._callbacks[eventName].indexOf(fn), 1);
    };
  }

  _createBodyEvent(num) {
    return {
      timestamp: new Date().getMilliseconds(),
      countExec: num
    }
  }

  onCount(event_name, c, callback) {
    let dataObj= {
      count: c,
      data: []
    };
    let count = c;
    let dest;
    let on = (event, data) => {
      --count;
      dataObj.data.push(data);
      if (count === 0) {
        callback(event, dataObj);
        dest.destroy();
      }
    };
    dest = this.on(event_name, on);
  }
}