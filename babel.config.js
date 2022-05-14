module.exports = (api) => {
  api.cache(true);
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['@babel/plugin-proposal-optional-chaining', '@babel/proposal-object-rest-spread'];
  return { presets, plugins };
};
