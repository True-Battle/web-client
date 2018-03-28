export class SocketService {

  /* @ngInject */
  constructor($rootScope, authService, $env) {
    this.$rootScope = $rootScope;
    this.authService = authService;
    this.$env = $env;

    this.socket = null;
    this.connecting = false;
    this.connect();
  }

  connect() {
    if (!this.isConnecting() && !this.isConnected()) {
      this.connecting = true;
      this.socket = io.connect(this.$env.getGameUrl(), { query: "access-token=" + this.authService.getToken() });
      this.socket.on('connect', () => {
        this.connecting = false;
      })
    }
  }

  disconnect() {
    this.logoutGameServer();
  }

  isConnected() {
    return this.socket && this.socket.connected;
  }

  isConnecting() {
    return this.connecting;
  }

  getSocket() {
    return this.socket;
  }

  logoutGameServer() {
    this.socket.emit('gameLogout', 'logout');
    this.socket.close();
  }

  emit(event, data, cb) {
    this.socket.emit(event, data, () => {
      const args = arguments;
      this.$rootScope.$apply(() => {
        if (cb) {
          cb.apply(this.socket, args)
        }
      })
    });
  }

  on(event, cb) {
    this.socket.on(event, () => {
      const args = arguments;
      $rootScope.$apply(() => {
        cb.apply(this.socket, args);
      });
    });
  }

}