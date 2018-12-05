const fs = require('fs');

function fileToArray(file) {
    return fs.readFileSync(file).toString().split("\n");
}

module.exports = fileToArray;
