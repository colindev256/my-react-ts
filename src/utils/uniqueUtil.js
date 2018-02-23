"use strict";
exports.__esModule = true;
// Selecting 5 unique random jockeys
exports.getUniqueJockeys = function (allArray) {
    var colin = [];
    while (colin.length < 5) {
        var unique = Math.floor(Math.random() * allArray.length);
        if (colin.indexOf(allArray[unique]) > -1) {
            continue;
        }
        colin.push(allArray[unique]);
    }
    return colin;
};
