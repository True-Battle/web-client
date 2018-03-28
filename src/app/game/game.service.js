import gameCore from '../../game-core/index';

export default class GameService {

  /* @ngInject */
  constructor(socketService, $dispatcher){
    this.gameCore = gameCore;
    this.socketService = socketService;
    this.dispatcher = $dispatcher;
  }

  init() {
    this.socketService.connect();
    const socket = this.socketService.getSocket();

    socket.on('gameError', (err) => {console.log(err)});

    this.gameCore({ socket: socket, dispatcher: this.dispatcher });
  }
}