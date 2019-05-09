const path = require('path');

module.exports = {
    entry: './transformValuesToTransformCommands.mjs',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'transformValuesToTransformCommands.js',
        library: 'transformValuesToTransformCommands',
        libraryTarget: 'umd'
    }
};