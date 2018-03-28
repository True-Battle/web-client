export default class Player {

  constructor(initPackage) {
    this.id = initPackage.id;
    this.dir = initPackage.dir;
    this.x = initPackage.x;
    this.y = initPackage.y;
    this.skin = initPackage.skin;
    this.attack = false;
    this.frame = 0;
    this.frameIncrement = 0.14;
    this.frameMultiplyer = 1.0;
    return this;
  }

  getId() {
    return this.id;
  }

  update(newData) {
    for (var key in newData) {
      if (newData[key] !== undefined) {
        this[key] = newData[key];
      }
    }
  }

  draw(canvas, skins, assets, animate) {
    animate(
      canvas,
      this,
      skins,
      assets["assets/hero1.json"],
      assets["assets/hero1.png"]
    );
  }
}