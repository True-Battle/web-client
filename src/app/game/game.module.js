import game from './game.component'
import canvas from './canvas-root/canvas-root.component'
import hud from './hud/hud.component'
import statusLine from './hud/status-line/status-line.component'
import heroAva from './hud/hero-ava/hero-ava.component'
import chat from './chat/chat.component'
import chatInput from './chat/chat-input/chat-input.component'
import chatScreen from './chat/chat-screen/chat-screen.component'

import routing from './game.routing'

//-- Services --//
import GameService from './game.service'
import GuiService from './gui.service'
import SoundService from './sound.service'
import ChatService from './chat/chat.service'

//-- Define module --//
const gameModule = angular.module('game', []);

gameModule.component('game', game);
gameModule.component('canvasRoot', canvas);
gameModule.component('hud', hud);
gameModule.component('statusLine', statusLine);
gameModule.component('heroAva', heroAva);

gameModule.component('chat', chat);
gameModule.component('chatInput', chatInput);
gameModule.component('chatScreen', chatScreen);

gameModule.service('gameService', GameService);
gameModule.service('guiService', GuiService);
gameModule.service('soundService', SoundService);
gameModule.service('chatService', ChatService);

//-- Define module routing --//
gameModule.config(routing);

export default gameModule;