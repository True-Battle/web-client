import './hero-ava.component.styl'
import template from './hero-ava.component.jade'

class Controller {

  /* @ngInject */
  constructor($element, guiService, $scope, $attrs) {
    this.$element = $element;
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.guiService = guiService;
  }

  $onInit() {
    this.value = 1;
    this.guiService.onLvlValue(this.$attrs.statusName, this.setValue.bind(this));
  }

  setValue(val) {
    this.value = val;
    this.$scope.$apply();
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;