module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [">0.25%", "not ie 11", "not op_mini all"]
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties"
  ]
};
