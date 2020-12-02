const fs = require('fs');
const input =  fs.readFileSync('input2.txt', 'utf8');
const _ = require('underscore');
String.prototype.count=function(s1) { 
  return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
}
const allPasswords = input.split('\n').map(row => {
 const [pattern,password] = row.split(': ');
 const [range, char] = pattern.split(' ');
 const [min,max] = range.split('-');
 return {char: char, min:Number(min), max:Number(max), password:password}
})

const passwordPolicy = pwObject =>{
  let {min,max,char,password} = pwObject;
  let minB = password[min-1] == char;
  let maxB = password[max-1] == char;
  return (minB || maxB) && !(minB && maxB);
}
console.log(allPasswords.filter(passwordPolicy).length);