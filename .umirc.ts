import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  chainWebpack(config) {
    config.module
      .rule('woff')
      .test(/.(woff|eot|woff2|TTF|OTF)$/)
      .use('file-loader')
      .loader('file-loader');
  }
});
