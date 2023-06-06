import { AnimatedSprite, Assets } from "pixi.js"



export let RedHoodA : {
    'rRun': AnimatedSprite,
    'rIdle': AnimatedSprite,
    'rJump': AnimatedSprite,
    'rTurn': AnimatedSprite
}

const loadRRH = () => {
    Assets.load([
        "assets/red/rrhIdle.json",
        "assets/red/rrhRun.json",
        "assets/red/rrhJump.json",
        "assets/red/rrhTurn.json"
    ]).then(() => {
        // get the sheet json data, required for resolving animations
        const runAnimations = Assets.cache.get("sprites/character/rrhRun.json").data.animations;
        const idleAnimations = Assets.cache.get("sprites/character/rrhIdle.json").data.animations;
        const jumpAnimations = Assets.cache.get("sprites/character/rrhJump.json").data.animations;
        const turnAnimations = Assets.cache.get("sprites/character/rrhTurn.json").data.animations;

        // create an animated sprite
        RedHoodA = {
            'rRun' : AnimatedSprite.fromFrames(runAnimations["run"]),
            'rIdle' : AnimatedSprite.fromFrames(idleAnimations["idle"]),
            'rJump' : AnimatedSprite.fromFrames(jumpAnimations["jump"]),
            'rTurn' : AnimatedSprite.fromFrames(turnAnimations["turn"])
            
        }
        // configure + start animation:
        const animationSpeed = 1 / 6
        RedHoodA.rRun.animationSpeed = animationSpeed
        RedHoodA.rIdle.animationSpeed = animationSpeed
        RedHoodA.rJump.animationSpeed = animationSpeed
        RedHoodA.rTurn.animationSpeed = animationSpeed

        //character.animationSpeed = 1 / 6; // 6 fps
        // character.position.set(150, ); // almost bottom-left corner of the canvas
        //character.play();

        // add it to the stage and render!
        // app.stage.addChild(character);

        // move the character to the right, restart on the left
        // app.ticker.add((delta) => {
        //     const speed = 2;
        //     character.x = (character.x + speed * delta) % (background.width + 200);
        // });
    });

}

export default loadRRH;