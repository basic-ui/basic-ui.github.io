const path = require('path');

module.exports = {
  title: 'Basic UI Component Library',
  components: './src/**/*.jsx',
  updateWebpackConfig(webpackConfig) {
    // Your source files folder or array of folders, should not include node_modules
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push(
       // Babel loader will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel',
      }
    );
    return webpackConfig;
  },
};
