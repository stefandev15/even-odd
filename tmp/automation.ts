const fs = require("fs");

const FILE_NAME = "automation.txt";
const LAST_NUMBER = 18_420; // 'Invalid string length' if bigger

const getTextData = () => {
  let data = "";
  for (var i = 0; i <= LAST_NUMBER; i++) {
    var even_odd = i % 2 == 0 ? "even" : "odd";
    data += `${
      i != 0 ? "  : " : ""
    }number === ${i}\n  ? console.log("Number is ${even_odd}${
      i == 69 ? " - nice" : ""
    }")\n${i == LAST_NUMBER ? "  : null;" : ""}`;
  }
  return data;
};

fs.writeFile(FILE_NAME, getTextData(), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(`File saved as: ${FILE_NAME}`);
});
