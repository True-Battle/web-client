export default class ChatService {

  /* @ngInject */
  constructor(socketService, profileService) {
    this._socketService = socketService;
    this._profileService = profileService;
  }

  setPostMsgHandler(fn) {
    this._socketService.getSocket().on('chatMessage', fn);
  }

  getSocket() {
    return this._socketService.getSocket();
  }

  send(msg) {
    let user = this._profileService.getUser();
    this._socketService.emit('chatMessage', {user: user.username, message: msg})
  }

  join() {
    this._socketService.connection();
  }

}