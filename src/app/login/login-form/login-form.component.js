import './login-form.component.styl'
import template from './login-form.component.jade'

class Controller {

  /* @ngInject */
  constructor(authService, profileService, $state) {
    this._authService = authService;
    this._profileService = profileService;
    this._$state = $state;
  }

  $onInit() {
    this.form = {};
  }

  _loginHandler(ctx) {
    return (user) => {
      ctx._profileService.setUser(user);
      ctx._$state.go('shell');
    };
  }

  login() {
    this.login = this._authService.login(this.form);
    this.login.then(this._loginHandler(this));
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;