const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe5Webcomponent",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false,
    chunkIds: 'named',

    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //   },
    // },

    // splitChunks: {
    //   chunks: 'all',
    //   filename: 'bundle.js',
    // }
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      // library: { type: "module" },

      // For remotes (please adjust)
      name: "mfe5Webcomponent",
      filename: "remoteEntry.js",
      exposes: {
        './Mfe5AngularElement': './projects/mfe5-webcomponent/src/app/app.module.ts',
        // './Mfe5AngularElement': './projects/mfe5-webcomponent/src/bootstrap.ts',
        // './AppModule': './projects/mfe5-webcomponent/src/app/app.module.ts',
        // './AppComponent':'./projects/mfe5-webcomponent/src/app/app.component.ts'
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe2": "http://localhost:4300/remoteEntry.js",
      //     "hostMfe": "http://localhost:4200/remoteEntry.js",
      //     "mfe3": "http://localhost:4400/remoteEntry.js",
      //     "mfe4": "http://localhost:4500/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
