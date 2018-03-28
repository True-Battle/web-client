import './ui-menu-bar.component.styl'
import template from './ui-menu-bar.component.jade'

class Controller {

  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;
  }

  openContextMenu($event) {
    this.$scope.$emit('gui_menu', $event);
  }

}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;