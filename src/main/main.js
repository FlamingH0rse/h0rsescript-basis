const fs = require('fs');
const path = require('path');
let main = {};

for (let [, fileName] of fs.readdirSync(__dirname).entries()) {
    if (fileName == 'main.js') continue;

    fileName = fileName.replace('.js', '');
    fileClasses = require(path.join(__dirname, fileName));
    Object.assign(main, fileClasses);
}

module.exports = {
    main: main
}