const fs = require('fs');
const input =  fs.readFileSync('input1.txt', 'utf8');
const _ = require('underscore');
const allNumbers = input.split('\n').map(Number)
const allNumbersHash = {};
//allNumbers.forEach(x => allNumbersHash[x] = true);
for (const n1 of allNumbers) {
  for(const n2 of allNumbers){
    if(n1 + n2 < 2020 && n1 != n2){
      allNumbersHash[n1+n2] = {n1:n1, n2:n2};
    }
  }
}


for (const number of allNumbers) {
  const needed = 2020  -number;
  if(allNumbersHash[`${needed}`]){
    console.log(allNumbersHash[`${needed}`].n1 * allNumbersHash[`${needed}`].n2 * number)
    return;
  }
}


//console.log(allNumbersHash)