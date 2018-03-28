export default (assets) => {
    const img = assets['assets/atlas.png'];
    const map = assets['assets/true-battle.json'];
    const space = map.tilesets[0].spacing;
    const imageW = map.tilesets[0].imagewidth;
    const imageH = map.tilesets[0].imageheight;
    const tileW = map.tilesets[0].tilewidth;
    const tileH = map.tilesets[0].tileheight;

    let result = [];
    let height = Math.floor(imageH / tileH);
    let width = Math.floor(imageW / tileW);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            result.push({
                img: img,
                x: (tileW + space) * x,
                y: (tileH + space) * y,
                width: tileW,
                height: tileH
            });
        }
    }
    return result;
}