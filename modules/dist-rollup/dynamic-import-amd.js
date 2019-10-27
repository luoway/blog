define(['require', 'exports'], function (require, exports) { 'use strict';

    /**
     * Created by luoway on 2019/10/27
     *
     */
    function testFn() {
        new Promise(function (resolve, reject) { require(['./dynamic-import-chunk-amd'], resolve, reject) }).then(console.log);
    }

    exports.testFn = testFn;

    Object.defineProperty(exports, '__esModule', { value: true });

});
