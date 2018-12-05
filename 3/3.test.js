const { getInches, getNotOverlappingId } = require('./3.js');

describe('day 3', () => {
    const input = '#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2';

    it('returns square inches which are within two or more squares', () => {
        expect(getInches(input)).toBe(4);
    });

    it('returns not overlapping square id', () => {
       expect(getNotOverlappingId(input)).toBe(3);
    });
});
