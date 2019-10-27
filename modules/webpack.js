const path = require('path')
const webpack = require('webpack')

const outputDir = 'dist-webpack'
function build() {
    const targetArray = ['amd', 'umd', 'commonjs', 'window']
    targetArray.forEach(target=>{
        const outputFilename = target + '.js'
        webpack({
            context: path.resolve(__dirname, 'src'),
            entry: './es6.js',
            output:{
                path: path.resolve(__dirname, outputDir),
                filename: outputFilename,
                library: target,
                libraryTarget: target
            },
            optimization: {
                minimize: false
            }
        }, (err, stats) => {
            console.log(outputFilename + ' done')
        })
    })
}

function buildDynamicImport() {
    const targetArray = ['amd', 'umd', 'commonjs', 'window']
    targetArray.forEach(target=>{
        const outputFilename = 'dynamic-import-'+target + '.js'
        webpack({
            context: path.resolve(__dirname, 'src'),
            entry: './dynamic-import.js',
            output:{
                path: path.resolve(__dirname, outputDir),
                filename: outputFilename,
                chunkFilename: `${outputFilename}-chunk-${target}.js`,
                library: target,
                libraryTarget: target
            },
            optimization: {
                minimize: false
            }
        }, (err, stats) => {
            if(err){
                console.log(err)
                return
            }
            console.log(outputFilename + ' done')
        })
    })
}

build()
buildDynamicImport()