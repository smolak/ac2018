function calculateFrequency(inputData) {
    return inputData.reduce((sum, stringNumber) => {
        return sum + Number(stringNumber);
    }, 0);
}

module.exports = calculateFrequency;
