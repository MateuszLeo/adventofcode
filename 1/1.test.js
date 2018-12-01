const { sumArray, findFirstDuplicate } = require('./1.js')

test('sumArray', () => {
   let cases = [
        [[1,1,1], 3],
        [[1,1,-2], 0],
        [[-1,-2,-3], -6],
    ];

    cases.forEach(([input, expected]) => {
        expect(sumArray(input)).toBe(expected);
    });
});

test('findFirstDuplicate', () => {
    let cases = [
        [[1, -1], 0],
        [[3, 3, 4, -2, -4], 10],
        [[-6, 3, 8, 5, -6], 5],
        [[7, 7, -2, -7, -4], 14],
        [[1, -2, 3, 1], 2],
    ];

    cases.forEach(([input, expected]) => {
        expect(findFirstDuplicate(input).iter()).toBe(expected);
        expect(findFirstDuplicate(input).rec()).toBe(expected);
    });
});
