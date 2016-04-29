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
  stepTen: require("./step10.png")
}, (v) => v.replace("/", ""));
