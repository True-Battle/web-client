import './chat-input.component.styl'
import template from './chat-input.component.jade'

class Controller {

  /* @ngInject */
  constructor(chatService) {
    this._chatService = chatService;
  }

  sendMessage() {
    this._chatService.send(this.message);
    this.message = '';
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;