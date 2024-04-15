#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinNumber = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinNumber.pin === myPin) {
    console.log("Your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "Select one the fallowing methods",
            choices: ["Cash withdraw", "Check balance", "Fast cash"],
        },
    ]);
    if (operationAns.operations === "Cash withdraw") {
        let answerAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Select the amount to withdraw",
            },
        ]);
        if (answerAns.amount === myBalance) {
            myBalance -= answerAns.amount;
            console.log("Your remaining balance is " + myBalance);
        }
        else if (answerAns.amount > myBalance) {
            console.log("Your balance is insufficiant");
        }
        else if ((myBalance -= answerAns.amount)) {
            console.log("Your remaining balance is " + myBalance);
        }
    }
    if (operationAns.operations === "Check balance") {
        console.log("Your balance is " + myBalance);
    }
    if (operationAns.operations === "Fast cash") {
        let cashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select one of the fallowing amounts to withdraw",
                choices: ["1000", "5000", "8000", "10000"],
            },
        ]);
        if (cashAns.fastcash) {
            myBalance -= cashAns.fastcash;
            console.log("Your remaining balance is " + myBalance);
        }
    }
}
else {
    console.log("Your pin is incorrect!!!");
}
