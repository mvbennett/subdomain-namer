const fs = require("fs");
const readline = require("readline");

function deHyphen(branchName) {
  if (!/-$/.test(branchName)) return branchName;

  const deHyphenedName = branchName.slice(0, branchName.length - 1);
  return deHyphen(deHyphenedName);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter branch name: ", (input) => {
  const lowerCased = input.toLowerCase();
  const shortenedName = lowerCased.slice(0, 28);
  const deHyphenedName = deHyphen(shortenedName);

  console.log(deHyphenedName);
  rl.close();
});
