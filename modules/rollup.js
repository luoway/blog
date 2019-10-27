const rollup = require('rollup')

const inputOptions = {
    input: 'src/es6.js',
}
const outputDir = 'dist-rollup'

async function build() {
    const formatArray = ['amd', 'umd', 'cjs', 'iife', 'es']
    formatArray.forEach(async (format)=>{
        const bundle = await rollup.rollup(inputOptions);
        await bundle.write({
            name: format,
            file: `${outputDir}/${format}.js`,
            format: format
        });
        console.log(format+'.js done')
    })
}

async function buildDynamicImport() {
    const formatArray = ['amd', 'cjs', 'es']    //不支持umd、iife
    formatArray.forEach(async (format)=>{
        const bundle = await rollup.rollup({
            input: 'src/dynamic-import.js'
        });
        await bundle.write({
            name: format,
            dir: outputDir,
            entryFileNames: '[name]-[format].js',
            chunkFileNames: '[name]-[format].js',
            format: format
        });
        console.log(`dynamic-import ${format} done`)
    })
}

build()
buildDynamicImport()