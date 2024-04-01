#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// Conditional Statement True 0R False
//     1234       ===  1234  - true
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select your amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCashAns.fastcash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}