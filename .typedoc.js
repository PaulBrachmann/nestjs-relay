module.exports = {
  entryPoint: '"nestjs-relay"',
  exclude: '**/*+(index|.spec|.e2e).ts',
  excludeExternals: true,
  excludeNotExported: true,
  inputFiles: ['src'],
  out: 'public',
  plugin: 'typedoc-neo-theme',
  theme: './node_modules/typedoc-neo-theme/bin/default',
};
