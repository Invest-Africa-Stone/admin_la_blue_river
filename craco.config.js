const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@navigation': path.resolve(__dirname, 'src/navigation/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages/index'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@contexts': path.resolve(__dirname, 'src/contexts/index'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.ngrok-free.app',],
  },
};
