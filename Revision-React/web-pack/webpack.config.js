const path = require("path/posix");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"), //folder name
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
