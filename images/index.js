import _ from "lodash";

export default _.mapValues({
  stepZero: require("./step0.png"),
  stepOne: require("./step1.png"),
  stepTwo: require("./step2.png"),
  stepThree: require("./step3.png"),
  stepFour: require("./step4.png"),
  stepFive: require("./step5.png"),
  stepSix: require("./step6.png"),
  stepSeven: require("./step7.png"),
  stepEight: require("./step8.png"),
  stepNine: require("./step9.png"),
  stepTen: require("./step10.png"),
  babel: require("./babel.png"),
  babelTower: require("./babel.jpg"),
  webpack: require("./webpack.png"),
  react: require("./react.png"),
  vdom: require("./vdom.png"),
  webpackGraph: require("./webpack_graph.png"),
  lifecycle: require("./lifecycle.png"),
  flux: require("./flux.png"),
  testingPyramid: require("./testing_pyramid.png"),
  lint: require("./lint.jpg"),
  cowboy: require("./cowboy.jpg"),
  npmShape: require("./npm_shape.png")
}, (v) => v.replace("/", ""));
