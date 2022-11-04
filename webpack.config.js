const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin');

module.exports = async (env, agrv) => {
  console.log(agrv);
  const isDev = agrv.mode === "development"

  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "./src/assets/images/t.jpeg"
    }),
    new CopyPlugin({
      patterns: [
        {from: "templates", to: ""},
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.DefinePlugin({
      WP_ENV: JSON.stringify(env.WP_ENV),
    }),
  ]
  let prodPlugins = [
    ...basePlugins,
    new CleanWebpackPlugin(),
    // new CompressionPlugin({
    //     test: /\.(css|js|html|svg)$/
    // })
  ]

  return {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ["ts-loader"],
          exclude: /node_modules/
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {sourceMap: isDev}
            },
            {
              loader: "sass-loader",
              options: {sourceMap: isDev}
            }
          ]
        },
        // {
        //   test: /\.(eot|ttf|woff|woff2)$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "[name]"
        //       }
        //     }
        //   ]
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: isDev
                  ? "[name].[ext]"
                  : "[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        "@": path.resolve("src"),
        "@@": path.resolve()
      }
    },
    output: {
      path: path.resolve("dist"),
      publicPath: "/",
      filename: "main.js",
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
      port: 3003,
      hot: true,
      historyApiFallback: true,
      open: true
    },
    plugins: isDev ? basePlugins : prodPlugins,
  }
}
