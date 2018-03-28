export default class Canvas {

  constructor(id, w, h) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.id = id;
    this.offset = {x: 0, y: 0};

    return this;
  }
  add(parentId) {
    document.getElementById(parentId).appendChild(this.canvas);
    return this;
  }
  getCtx() {
    return this.ctx;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  setSize(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
  }
  drawRect(obj) {
    this.ctx.fillRect(obj.x, obj.y, 10, 10);
  }
  drawSprite(obj, sprite, img) {
    this.ctx.drawImage(img, sprite.x, sprite.y, sprite.w, sprite.h, obj.x, obj.y, sprite.w, sprite.h);
  }
  setOffset(x, y) {
    this.offset.x = x;
    this.offset.y = y;
  }
  bgDraw(images, map) {
    const data = map.layers[0].data;
    const tileWidth = map.tilewidth;
    const tileHeight = map.tileheight;
    const mapWidth = map.width;
    const mapHeight = map.height;

    let tileIndex = 0;
    for(let y = 0; y < mapHeight; y++) {
      for(let x = 0; x < mapWidth; x++) {
        this.ctx.drawImage(
          images[data[tileIndex]-1].img,
          images[data[tileIndex]-1].x,
          images[data[tileIndex]-1].y,
          images[data[tileIndex]-1].width,
          images[data[tileIndex]-1].height,
          x * tileWidth - Math.round(this.offset.x + this.canvas.width / 2),
          y * tileHeight - Math.round(this.offset.y + this.canvas.height / 2),
          images[data[tileIndex]-1].width,
          images[data[tileIndex]-1].height
        );
        tileIndex++;
      }
    }
  }
}