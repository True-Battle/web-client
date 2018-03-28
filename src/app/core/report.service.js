import { BaseService } from '../core';

export class ReportService extends BaseService {

  /* @ngInject */
  constructor($http, $env, $dispatcher) {
    super($http, $env, 'error_report');
    this.dispatcher = $dispatcher;
    this.init();
  }

  init() {
    this.dispatcher.on('error_report', this._eventHandler(this))
  }

  _eventHandler(ctx) {
    return (e, d) => {
      ctx.send(d)
    }
  }

  send(error) {
    let data = {
      name: 'Custom Error',
      message: 'Custom Error',
      stack: error
    };
    if (error instanceof Error) {
      data = {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    }
    this.post(data);
  }

}