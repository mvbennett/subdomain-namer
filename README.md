### Subdomain Name Tool

For qwikly determining all of your pesky long branch subdomain names

## How To Run

After cloning repo, navigate to repo and run

```
node app.js
```

It will prompt you to enter your subdomain name, please enter it and it will spit out the correct subdomain name for that branch, wow!

## With Zsh Aliases

Go to your `~/.aliases` or `~/.zshrc` file and add an alias that equals `node` and your absolute path to the repo.

For example:

```
alias subdomain="node ~/projects/subdomain-namer/app.js"
```
