export let animate = function(canvas, player, skins, sprite, img) {

  let skin = player.skin;
  let dir = player.dir;
  let action;

  if (player.attack) {
    action = 'attack';
  } else {
    action = 'walking';
  }

  let framesArr = skins[skin][action][dir];
  let frameNum = Math.floor(player.frame);

  frameNum %= framesArr.length; // остаток от длинны массива фраймов, времмено 10

  canvas.drawSprite(player, sprite.frames[framesArr[frameNum]].frame, img);

  if (player.moving) {
    player.frame +=  player.frameIncrement * player.frameMultiplyer;
  }
  if (player.attacking) {
    player.attack = true;
    //player.frame = 0;
    frameNum = 0;
  }
  if (player.attack) {

    if (frameNum === framesArr.length - 1) {
      player.attack = false;
    }
    player.frame += (player.frameIncrement * 1.7) * player.frameMultiplyer;
  }


};