module.exports = api => {
  const development = api.env(['development', 'test']);

  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-typescript'),
      require('@babel/preset-react')
    ]
  };
}
