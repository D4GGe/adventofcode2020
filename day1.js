const fs = require('fs');
const input =  fs.readFileSync('input1.txt', 'utf8');

const allNumbers = input.split('\n').map(Number)
const allNumbersHash = {};
allNumbers.forEach(x => allNumbersHash[x] = true);

for (const number of allNumbers) {
  const needed = 2020  -number;
  if(allNumbersHash[`${needed}`]){
    console.log(number*needed)
    return;
  }
}


//console.log(allNumbers.length);