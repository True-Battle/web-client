import './menu.component.styl'
import template from './menu.component.jade'

class Controller {

  /* @ngInject */
  constructor($rootScope, $state, authService, socketService, $element) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.authService = authService;
    this.socketService = socketService;
    this.$element = $element;

    this.onToggle = this.onToggle.bind(this);
  }

  $onInit() {
    this.$rootScope.$on('gui_menu', this.onToggle)
  }

  onToggle() {
    toggle.call(this)
  }

  logout() {
    this.socketService.disconnect();
    this.authService.logout();
    this.$state.go('login');
  }

  close() {
    close.call(this)
  }

}

/**
 * @jsDoc method
 * @name close
 * @private
 * @description close popup menu.
 * */
function close() {
  this.$element.removeClass('menu_open')
}

/**
 * @jsDoc method
 * @name toggle
 * @private
 * @description toggle popup menu.
 * */
function toggle() {
  this.$element.toggleClass('menu_open')
}

const component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;