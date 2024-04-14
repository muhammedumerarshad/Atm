#! /usr/bin/env node
import inquirer from "inquirer";
import inqirer from "inquirer";

let myBalance = 10000;

let myPin = 1234;

let pinNumber = await inqirer.prompt([
  {
    message: "Enter your pin",
    type: "number",
    name: "pin",
  },
]);
if (pinNumber.pin === myPin) {
  console.log("Your Pin is correct!!");

  let operationsAns = await inqirer.prompt([
    {
      name: "operations",
      type: "list",
      message: "select one of the falowing",
      choices: ["Cash withdrawl", "Balance check", "Fast cash"],
    },
  ]);
  if (operationsAns.operations === "Cash withdrawl") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amount",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Your balance is insufficiant");
    } else if (amountAns.amount === myBalance) {
      myBalance -= amountAns.amount;

      console.log("Your remaining balance is " + myBalance);
    } else if ((myBalance -= amountAns.amount)) {
      console.log("Your remaining balance is " + myBalance);
    }
  } else if (operationsAns.operations === "Balance check") {
    console.log("Your remaining balance is " + myBalance);
  } else if (operationsAns.operations === "Fast cash") {
    let answerNo = await inqirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "choose one of the fallowing amount",
        choices: ["1000", "5000", "8000", "10000"],
      },
    ]);
    if (answerNo.fastCash) {
      myBalance -= answerNo.fastCash;
      console.log("Remaining balance is " + myBalance);
    }
  }
} else {
  console.log("YOUR PIN IS INCORRECT");
}
