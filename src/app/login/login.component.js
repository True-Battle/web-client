import './login.component.styl'
import template from './login.component.jade'

class Controller {

  /* @ngInject */
  constructor($state, authService) {
    this.$state = $state;
    this.authService = authService;
  }

  $onInit() {
    this.checkAuth();
  }

  checkAuth() {
    if (this.authService.isAuth()) {
      this.$state.go('shell');
    }
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;