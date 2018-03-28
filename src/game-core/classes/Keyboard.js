export default class Keyboard {

  constructor(dispatcher) {
    this.run = true;
    this.init(dispatcher);
  }

  init(socket) {
    document.addEventListener('keydown', (e) => {
      if (!this.isRun()) return;
      if (e.keyCode === 68) socket.emit('keyPress', {inputId: 'right', state: true}); //d
      if (e.keyCode === 83) socket.emit('keyPress', {inputId: 'down', state: true}); //s
      if (e.keyCode === 65) socket.emit('keyPress', {inputId: 'left', state: true}); //s
      if (e.keyCode === 87) socket.emit('keyPress', {inputId: 'up', state: true}); //w
      if (e.keyCode === 32) socket.emit('keyPress', {inputId: 'attack', state: true}); //space
    });
    document.addEventListener('keyup', (e) => {
      if (!this.isRun()) return;
      if (e.keyCode === 68) socket.emit('keyPress', {inputId: 'right', state: false}); //d
      if (e.keyCode === 83) socket.emit('keyPress', {inputId: 'down', state: false}); //s
      if (e.keyCode === 65) socket.emit('keyPress', {inputId: 'left', state: false}); //s
      if (e.keyCode === 87) socket.emit('keyPress', {inputId: 'up', state: false}); //w
      if (e.keyCode === 32) socket.emit('keyPress', {inputId: 'attack', state: false}); //space
    });
    socket.on('keyboard_run', this.handler);
  }

  handler(e, data) {
    this.set(data);
  }

  set(bool) {
    this.run = bool;
  }

  isRun() {
    return this.run;
  }
}