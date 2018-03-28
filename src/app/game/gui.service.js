export default class GuiService {

  /* @ngInject */
  constructor($dispatcher) {
    this.dispatcher = $dispatcher;
  }

  onStatusLine(statusName, callback) {
    this.dispatcher.on(statusName, (e, d) => {
      callback(d)
    });
  }

  onLvlValue(statusName, callback) {
    this.dispatcher.on(statusName, (e, d) => {
      callback(d)
    });
  }
}