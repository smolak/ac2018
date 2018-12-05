const fileToArray = require('../fileToArray');
const calculateFrequency = require('./calculateFrequency');

const inputData = fileToArray('./inputData.txt');

console.log(calculateFrequency(inputData));
