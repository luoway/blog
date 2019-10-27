(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.umd = {}));
}(this, (function (exports) { 'use strict';

    /**
     * Created by luoway on 2019/10/27
     *
     */
    const test = 'test';
    function testFn() {
        console.log(test);
    }

    exports.test = test;
    exports.testFn = testFn;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
