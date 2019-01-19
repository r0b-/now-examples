const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless'
});