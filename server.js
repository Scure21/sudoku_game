const path = require('path'),
   express = require('express'),
   webpack = require('webpack'),
   webpackConfig = require('./webpack.config.js'),
   app = express(),
   port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.use(express.static('public'))

let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath,
   stats: { colors: true },
   writeToDisk: true,
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(port, () => { console.log(`App is listening on port ${port}`) });