const promptImport = require("prompt-sync")({ sigint: true });

console.log("Even or Odd Application\n=======================");
const number = +promptImport("Number to be checked: ");

const checkEvenOrOdd = (number) => {
  if (number == null || number == undefined || !number) {
    console.log("Input is not a number");
    return;
  }
  if (number > 100_000_000 || number < 0) {
    console.log(
      `Number is ${
        number < 0 ? "too small" : number > 100_000_000 ? "too big" : null
      }`
    );
    return;
  }
  // automation.txt
};

checkEvenOrOdd(number);
