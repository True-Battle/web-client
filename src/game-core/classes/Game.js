import Canvas from './Canvas'
import Keyboard from './Keyboard'
import Player from './Player'
import {animate} from './Animate'
import crop from '../utils/crop'

export default class Game {

  constructor(canvasId, width, height, gameViewId, dispatcher, socket, assets, skins) {
    this.width = width;
    this.height = height;
    this.gameViewId = gameViewId;
    this.dispatcher = dispatcher;
    this.socket = socket;
    this.assets = assets;
    this.skins = skins;
    this.canvas = new Canvas(canvasId, this.width, this.height);
    this.keyboard = new Keyboard(socket);
    this._storage = {players: {}};
    this.run = false;
    this._init();
  }

  _init() {
    this.canvas.add(this.gameViewId);
    this.images = crop(this.assets);
    this.dispatcher.emit('game_loaded', true);
    this.socket.on('init', this.addPlayer.bind(this));
    this.socket.on('me', this.setMe.bind(this));
    this.socket.on('update', this.updatePlayers.bind(this));
    this.socket.on('remove', this.removePlayers.bind(this));
    this.start();
  }

  setSize(w, h) {
    this.canvas.setSize(w, h);
  }

  setAssets(assets) {
    this.assets = assets;
  }

  setMe(hero) {
    this.me = hero;
  }

  setMyPosition(x, y) {
    this.canvas.setOffset(x, y);
  }

  addPlayer(data) {
    for (let i = 0; i < data.players.length; i++) {
      const player = new Player(data.players[i]);
      this._storage.players[player.getId()] = player;
    }
  }

  updatePlayers(newData) {
    for (let i = 0; i < newData.players.length; i++) {
      let pack = newData.players[i];
      let player = this._storage.players[pack.id];
      if (player) {
        player.update(pack);
        //if (pack.id === this.me.id) {
        //    this.setMyPosition(pack.x, pack.y);
        //}
      }
    }
  }

  removePlayers(data) {
    for (let i = 0; i < data.players.length; i++) {
      delete this._storage.players[data.players[i]];
    }
  }

  _draw() {
    this.canvas.clear();
    this.canvas.bgDraw(this.images, this.assets["assets/true-battle.json"]);

    for (let i in this._storage.players) {
      var player = this._storage.players[i];
      player.draw(this.canvas, this.skins, this.assets, animate);
    }
  }

  gameLoop() {
    if (!this.isRun()) return;
    this._draw();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  start() {
    this.setRun(true);
    this.gameLoop()
  }

  isRun() {
    return this.run;
  }

  setRun(bool) {
    this.run = bool;
  }

  stop() {
    this.setRun(false);
  }

}
