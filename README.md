### Subdomain Name Tool

For qwikly determining all of your pesky long branch subdomain names

## How To Run

After cloning repo, navigate to repo and run

### Option 1

Please replace example brnach with your branch in the example below:

```
node app.js <my-super-long-branch-name-that-is-way-longer-than-28-characters>
```

It will immediately print the correct subomain name for that branch without any extra steps!

### Option 2

```
node app.js
```

It will prompt you to enter your subdomain name, please enter it and it will spit out the correct subdomain name for that branch, wow!

## With Zsh Aliases

Go to your `~/.aliases` or `~/.zshrc` file and add an alias that equals `node` and your absolute path to the `app.js` file in the repo.

For example:

```
alias subdomain="node ~/projects/subdomain-namer/app.js"
```
