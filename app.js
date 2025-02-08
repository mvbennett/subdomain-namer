const fs = require("fs");
const readline = require("readline");

function deHyphen(branchName) {
  if (!/-$/.test(branchName)) return branchName;

  const deHyphened = branchName.slice(0, branchName.length - 1);
  return deHyphen(deHyphened);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter branch name: ", (input) => {
  const lowerCased = input.toLowerCase();
  const shortened = lowerCased.slice(0, 28);
  const deHyphened = deHyphen(shortened);

  console.log(deHyphened);
  rl.close();
});
