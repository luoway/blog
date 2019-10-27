/**
 * Created by luoway on 2019/10/27
 *
 */
function testFn() {
    import('./dynamic-import-chunk-esm.js').then(console.log);
}

export { testFn };
