const path = require('path');
const fs = require('fs');

// Get all files in the dist directory
const distPath = path.resolve(__dirname, 'dist/angular19-babel/browser');

function getJsFiles(directory) {
  const entries = {};

  fs.readdirSync(directory).forEach(file => {
    const filePath = path.join(directory, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      // Recursively process subdirectories
      Object.assign(entries, getJsFiles(filePath));
    } else if (fileStats.isFile() && path.extname(file) === '.js') {
      // Add JS files to entries
      const relativePath = path
        .relative(distPath, filePath)
        .replace(/\\/g, '/');
      entries[relativePath.replace('.js', '')] = filePath;
    }
  });

  return entries;
}

const entryFiles = getJsFiles(distPath);

// Path to the generated index.html
const indexPath = path.join(
  __dirname,
  'dist',
  'angular19-babel/browser',
  'index.html'
);

// Read the index.html file
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Add type="text/javascript" to all <script> tags
indexContent = indexContent.replace(
  /<script /g,
  '<script type="text/javascript" '
);

// Write the modified content back to the file
fs.writeFileSync(indexPath, indexContent, 'utf8');

module.exports = {
  target: ['browserslist'],
  entry: entryFiles,
  output: {
    path: distPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'production', // or 'development' based on your needs
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

// npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env core-js regenerator-runtime
