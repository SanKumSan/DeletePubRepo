const fs = require('fs');

// Write a value to GITHUB_STATE (so it's available in cleanup.js)
fs.appendFileSync(process.env.GITHUB_STATE, `name=${process.env.INPUT_NAME}\n`);

console.log(`Hello ${process.env.INPUT_NAME}! (from main.js)`);
