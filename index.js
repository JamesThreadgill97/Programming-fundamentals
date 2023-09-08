const calculate = require('./calculate.js');
const prompt = reqire(`simple-prompt`);
const promptsync = require(`prompt-sync`);
prompt.start();

prompt.get([num1, num2, string]);

console.log(calculate(num1, num2, string));




