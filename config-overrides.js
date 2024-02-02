module.exports = function override(config, env) {
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    fs: false,
    tls: false,
    net: false,
    stream: require.resolve("stream-browserify"),
    querystring: require.resolve("querystring-es3"),
  };

  return config;
};
