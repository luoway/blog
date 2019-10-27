'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Created by luoway on 2019/10/27
 *
 */
function testFn() {
    new Promise(function (resolve) { resolve(require('./dynamic-import-chunk-cjs.js')); }).then(console.log);
}

exports.testFn = testFn;
