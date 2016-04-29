import _ from "lodash";

export default _.mapValues({
  logo: require("./logo.png")
}, (v) => v.replace("/", ""));
