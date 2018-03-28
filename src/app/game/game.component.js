import './game.component.styl'
import template from './game.component.jade'

class Controller {

  /* @ngInject */
  constructor(gameService) {
    this.gameService = gameService;
  }

  $onInit() {
    this.gameService.init();
  }

}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;