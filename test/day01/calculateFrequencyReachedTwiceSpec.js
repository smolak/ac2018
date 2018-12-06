const assert = require('assert');

const calculateFrequencyReachedTwice = require('../../day01/calculateFrequencyReachedTwice');

describe('calculateFrequencyReachedTwice', () => {
    describe('when repeated frequency is found while going through the input data once', () => {
        it('should return repeated frequency', () => {
            const inputData = [ '+1', '+1', '-1' ];

            assert.equal(calculateFrequencyReachedTwice(inputData), 1);
        });

        it('should return repeated frequency without iterating over remaining items', () => {
            const inputData = [ '+1', '+1', '-1', '+1000' ];

            assert.equal(calculateFrequencyReachedTwice(inputData), 1);
        });
    });

    describe('when repeated frequency is found while going through the input data once', () => {
        describe('iteration should be done all over again and', () => {
            it('should return repeated frequency', () => {
                const inputData = [ '+1', '-1' ];

                assert.equal(calculateFrequencyReachedTwice(inputData), 0);
            });

            it('should return repeated frequency without iterating over remaining items', () => {
                const inputData = [ '+1', '+2', '-1' ];

                assert.equal(calculateFrequencyReachedTwice(inputData), 3);
            });
        });
    });

    describe('more complex examples', () => {
        it('should return 10', () => {
            const inputData = [ '+3', '+3', '+4', '-2', '-4' ];

            assert.equal(calculateFrequencyReachedTwice(inputData), 10);
        });

        it('should return 5', () => {
            const inputData = [ '-6', '+3', '+8', '+5', '-6' ];

            assert.equal(calculateFrequencyReachedTwice(inputData), 5);
        });

        it('should return 14', () => {
            const inputData = [ '+7', '+7', '-2', '-7', '-4' ];

            assert.equal(calculateFrequencyReachedTwice(inputData), 14);
        });
    });
});
