function getUniqueLetterCount(string) {
    const letterCountMap = string.split('').reduce((acc, str) => {
        const count = (acc.get(str) || 0) + 1;
        return acc.set(str, count);
    }, new Map());

    const uniqueCounts = Array.from(letterCountMap)
        .reduce((acc, [, value]) => acc.add(value), new Set());

    return Array.from(uniqueCounts);
}

function checksum(array) {
    const map = array.reduce((acc, str) => {
        getUniqueLetterCount(str).forEach((number) => {
            if (number > 1) {
                let count = (acc.get(number) || 0) + 1
                acc.set(number, count)
            }
        });
        return acc;
    }, new Map());

    return Array.from(map).reduce((acc, [, value]) => acc * value, 1);
}

function removeCharAtIndex(str, index) {
    return str.substring(0, index) + str.substring(index + 1, str.length);
}

function getCommonLetters(array) {
    function search(rest, current, commonLetters, omitIndex) {
        if (!current) {
            return commonLetters;
        }
        
        for (let item of array.slice(omitIndex)) {
            commonLetters = current.split('').reduce((acc, letter, letterIndex) => {
                if (!item.includes(letter)) {
                    const s1 = removeCharAtIndex(current, letterIndex);
                    const s2 = removeCharAtIndex(item, letterIndex);

                    if (s1 === s2) {
                        return [...acc, s1];
                    }
                }
                return acc;
            }, commonLetters);
        }

        return search(rest.slice(1), rest[0], commonLetters, omitIndex + 1);
    }

    return search(array.slice(1), array[0], [], 1);
}

module.exports = {
    getUniqueLetterCount,
    checksum,
    getCommonLetters,
}

