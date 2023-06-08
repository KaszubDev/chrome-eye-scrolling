# It's Google Chrome Extension

TypeScript based extension that adding ability to scroll web pages by eyes only

## Used external library - [WebGazer.js](https://webgazer.cs.brown.edu)

Due to some chrome browser security issues related to Eval() inside `numeric.js` I have used [different unofficial WebGazer version](https://github.com/koll93/WebGazer/tree/refactor-remove-numeric-landmarks)

## How to setup project?

1. `git clone https://github.com/KaszubDev/chrome-eye-scrolling`
2. `npm install`
3. `cd node_modules`
4. `git clone https://github.com/koll93/WebGazer webgazer`
5. `cd webgazer`
6. `npm install`