module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@i18n': './src/config/i18n',
          '@constants': './src/constants',
          '@helper': './src/helper',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
