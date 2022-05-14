module.exports = (api) => {
  api.cache(true);
  const presets = [
    [
      '@babel/env',
      {
        'modules': false,
      },
    ], '@babel/preset-react'];
  const plugins = ['@babel/proposal-object-rest-spread'];
  return { presets, plugins };
};
