export default {

    parseSpritesAssets: function(assets, storage) {
        for (let key in assets) {
            let frames = assets[key].frames;
            if (!frames) continue;

            let skinName = assets[key].name.split('/')[1].split('.')[0];

            if (!storage[skinName]) {
                storage[skinName] = {};
            }
            for (let i = 0; i < frames.length; i++) {
                let name = frames[i].filename;
                let arr = name.split(' ');
                let action = arr[0];
                let temp = arr[1].split('0', 1);
                let dir = temp[0];

                if (!storage[skinName][action]) {
                    storage[skinName][action] = {};
                }
                if (!storage[skinName][action][dir]) {
                    storage[skinName][action][dir] = [];
                }
                storage[skinName][action][dir].push(Number(i));
            }
        }
    }
};