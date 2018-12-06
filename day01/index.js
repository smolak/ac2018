const fileToArray = require('../fileToArray');
const calculateFrequency = require('./calculateFrequency');
const calculateFrequencyReachedTwice = require('./calculateFrequencyReachedTwice');

const inputData = fileToArray('./inputData.txt');

console.log(calculateFrequency(inputData));
console.log(calculateFrequencyReachedTwice(inputData));
