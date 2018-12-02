const { getUniqueLetterCount, checksum, getCommonLetters } = require('./2.js');

describe('2', () => {
    describe('part1', () => {
        const cases = [
            ['abcdef', [1]],
            ['bababc', [3,2,1]],
            ['abbcde', [1,2]],
            ['abcccd', [1,3]],
            ['aabcdd', [2,1]],
            ['abcdee', [1,2]],
            ['ababab', [3]],
            ['aaaaaa', [6]],
            ['cccccc', [6]],
        ];    

        describe('getUniqueLetterCount', () => {
            it('gets unique letter count', () => {
                cases.forEach(([input, expected]) => {
                    expect(getUniqueLetterCount(input)).toEqual(expected);
                });
            });
        });
        
        describe('checksum', () => {
            it('computes checksum of given array of strings', () => {
                const values = cases.reduce((acc, [value]) => acc.concat(value), []);
                expect(checksum(values)).toBe(24);
            });
        });
    });

    describe('part2', () => {
        const cases = [
            [['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'], ['fgij']],
            [['aabbb', 'acsdd', 'abaaa', 'acaaa'], ['aaaa']],
        ];

        describe('getCommonLetters', () => {
            it('gets common letters for words which differ one letter at same position', () => {
                cases.forEach(([input, expected]) => {
                    expect(getCommonLetters(input)).toEqual(expected);
                });
            });
        });
    });
});

