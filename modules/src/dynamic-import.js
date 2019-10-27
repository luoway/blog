/**
 * Created by luoway on 2019/10/27
 *
 */
export function testFn() {
    import('./dynamic-import-chunk').then(console.log)
}