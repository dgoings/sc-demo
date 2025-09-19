import { calculate } from "./dist/transpiled/calculator-composed.js";

// Get command line arguments, skipping the first two (node and script name)
const [x, y, op] = process.argv.slice(2);

const opMap = {
  'add': '+',
  'multiply': '*'
}

// Convert string numbers to integers
const num1 = parseInt(x);
const num2 = parseInt(y);

console.log(`${num1} ${opMap[op]} ${num2} = ` + calculate.evalExpression(op, num1, num2));
