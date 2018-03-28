import './chat-screen.component.styl'
import template from './chat-screen.component.jade'

class Controller {

  /* @ngInject */
  constructor(profileService, chatService, $scope, $element) {
    this._profileService = profileService;
    this._chatService = chatService;
    this._$scope = $scope;
    this._$element = $element;
  }

  $onInit() {
    this._chatService.setPostMsgHandler(this.postMessage.bind(this));
  }

  postMessage(msg) {
    if (msg.message == '' || msg.message == undefined) return;
    let message = this.createMessageLine(msg);

    this._$element.append(message);
    this.scrollDown();
  }

  scrollDown() {
    this._$element[0].scrollTop = this._$element[0].scrollHeight;
  }

  createMessageLine(msg) {
    return `<p class="chat-screen__message-line"><span class="message-line__sender">${msg.user}:</span><span class="message-line__message">${msg.message}</span></p>`
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;