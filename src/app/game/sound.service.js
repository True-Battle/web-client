export default class SoundService {

  /* @ngInject */
  constructor($dispatcher) {
    this.dispatcher = $dispatcher;
  }

  onSoundState(soundName, callback) {
    this.dispatcher.on(soundName, (e, d) => {
      callback(d)
    })
  }

}