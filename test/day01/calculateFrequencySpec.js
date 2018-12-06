const assert = require('assert');

const calculateFrequency = require('../../day01/calculateFrequency');

describe('calculateFrequency', () => {
    it('should return positive value for one positive string-number', () => {
        const inputData = [ '+1' ];

        assert.equal(calculateFrequency(inputData), 1);
    });

    it('should return negative value for one negative string-number', () => {
        const inputData = [ '-1' ];

        assert.equal(calculateFrequency(inputData), -1);
    });

    it('should return sum of numbers when all positive', () => {
        const inputData = [ '+1', '+2' ];

        assert.equal(calculateFrequency(inputData), 3);
    });

    it('should return sum of numbers when all negative', () => {
        const inputData = [ '-1', '-2' ];

        assert.equal(calculateFrequency(inputData), -3);
    });

    it('should return sum of numbers when mixed (positive and negative)', () => {
        const inputData = [ '+1', '-2', '+3' ];

        assert.equal(calculateFrequency(inputData), 2);
    });
});