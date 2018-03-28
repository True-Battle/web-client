import './status-line.component.styl'
import template from './status-line.component.jade'

class Controller {

  /* @ngInject */
  constructor($element, guiService, $scope, $attrs) {
    this.$element = $element;
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.guiService = guiService;
  }

  $onInit() {
    this.value = 100;
    this.guiService.onStatusLine(this.$attrs.statusName, this.setValue.bind(this));
  }

  setValue(val) {
    this.value = val;
    this.$element.css('width', val + '%');
    this.$scope.$apply();
  }
}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;