import { Application } from 'pixi.js'
import {RedHoodA} from './scenes/animations';
import loadRRH from './scenes/animations';

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: innerWidth,
    height: innerHeight
});

loadRRH()
console.log(RedHoodA.rIdle);

RedHoodA.rIdle.position.set(250)
RedHoodA.rIdle.play()
RedHoodA.rIdle.scale.set(2)
console.log(RedHoodA.rIdle);

app.stage.addChild(RedHoodA.rIdle)