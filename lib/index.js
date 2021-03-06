"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compareVersion = function (v1, v2) {
    var v1_arr = v1.split('.');
    var v2_arr = v2.split('.');
    var len = Math.max(v1_arr.length, v2_arr.length);
    while (v1_arr.length < len) {
        v1_arr.push('0');
    }
    while (v1_arr.length < len) {
        v2_arr.push('0');
    }
    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1_arr[i]);
        var num2 = parseInt(v2_arr[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};
exports.default = compareVersion;
