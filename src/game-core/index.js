import Canvas from './classes/Canvas';
import Keyboard from './classes/Keyboard';
import core from './utils/core'
import Game from './classes/Game';
import Player from './classes/Player';
import loader from './utils/loader';
import {skins} from './utils/skins';

export default function(conf) {

    const socket = conf.socket;
    const dispatcher = conf.dispatcher;
    const assets = loader(dispatcher);

    assets.load([
        "assets/hero1.png",
        "assets/hero1.json",
        "assets/atlas.png",
        "assets/true-battle.json"
    ]).then(main);

    function main() {
        socket.emit('gameLogin', 'log in game');
        socket.on('gameError', (msg) => {console.log(msg)});

        let screenW = window.innerWidth;
        let screenH = window.innerHeight - 4;
        let skins = {}; // set all skins collection
        core.parseSpritesAssets(assets, skins);

        const game = new Game('canvas', screenW, screenH, 'canvas_root', dispatcher, socket, assets, skins);

        window.addEventListener('resize', function() {
            game.setSize(window.innerWidth, window.innerHeight - 4);
        });
    }
}