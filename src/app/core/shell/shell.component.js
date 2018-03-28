import './shell.component.styl'
import template from './shell.component.jade'

class Controller {

  /* @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  $onInit() {
    this.$state.go('shell.game');
  }

}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;