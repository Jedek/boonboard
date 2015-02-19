var jeet    = require("jeet"),
    rupture = require("rupture");

module.exports = {
    entry: "./index.js",
    output: {
        path: "../../build",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    stylus: { use: [jeet(), rupture()]},
    resolve: {alias: {}}
};