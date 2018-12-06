function toInt(inputData) {
    return inputData.map(stringNumber => Number(stringNumber));
}

function calculateFrequencyReachedTwice(inputData) {
    const intInputData = toInt(inputData);
    const calculatedFrequencies = [ 0 ];

    function findDuplicatedFrequency(frequency, intInputData) {
        for (let i = 0; i < intInputData.length; i++) {
            frequency += intInputData[i];

            if (calculatedFrequencies.includes(frequency)) {
                return frequency;
            }

            calculatedFrequencies.push(frequency);
        }

        return findDuplicatedFrequency(frequency, intInputData);
    }

    return findDuplicatedFrequency(0, intInputData);
}

module.exports = calculateFrequencyReachedTwice;
