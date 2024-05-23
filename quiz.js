"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var quiz = await inquirer_1.default.prompt([
    {
        name: "question_1",
        type: "list",
        message: "what is the correct way to check if two values are not equal in Typescript?",
        choices: ["a==b", "a!==b", "a=b", "a===b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "which of the following characters is allowed in variable name in Typescript?",
        choices: ["@", "#", "$", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "which operator is used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: " In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [",", ".", ";", ":"]
    },
    {
        name: "question_5",
        type: "list",
        message: "which method of inquirer.js is used to start the prompt interface and recieve user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
]);
var score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log("1.correct");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "$":
        console.log("2.correct");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "+":
        console.log("3.correct");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case ";":
        console.log("4.correct");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5.correct");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log("your score is ".concat(score));
