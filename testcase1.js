const path = require("path");

const SHARP_0_29_3_PATH = path.join(__dirname, "pkg1/node_modules/sharp");
const SHARP_0_30_2_PATH = path.join(__dirname, "pkg2/node_modules/sharp");

console.log("Test case 1");

try {
  console.log("Requiring sharp 0.30.2 then sharp 0.29.3");
  const sharp1 = require(SHARP_0_30_2_PATH);
  const sharp2 = require(SHARP_0_29_3_PATH);
  console.log("Success");
} catch (err) {
  console.log("Failure", err);
}
