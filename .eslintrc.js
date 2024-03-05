module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    semi: [1, 'never'],
    'prettier/prettier': ['warn'],
  },
  ignorePatterns: ['coverage/'],
}
