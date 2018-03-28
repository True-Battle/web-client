import './sound.component.styl'
import template from './sound.component.jade'

class Controller {

  /* @ngInject */
  constructor($element, $attrs, $timeout, soundService) {
    this.$element = $element;
    this.$attrs = $attrs;
    this.$timeout = $timeout;
    this.soundService = soundService;
  }

  // todo component for refactoring

  $onInit() {
    this.soundSrc = this.$attrs.soundSrc;
    this.sound = this.$element.find('audio')[0];
    this.sound.load();

    //temp demo!
    // todo delete
    this.$timeout(() => {
      this.setState(true)
    }, 0);

    // listening change state event (play / stop)
    this.soundService.onSoundState(this.$attrs.soundName, this.setState.bind(this))
  }

  setState(state) {
    if (state) {
      this.sound.play();
    } else {
      this.sound.pause();
    }
  }

}

let component = {
  bindings: {},
  template: template(),
  controller: Controller
};

export default component;