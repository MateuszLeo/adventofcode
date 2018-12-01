function add(a, b) {
    return a + b;
}

function sumArray(items) {
    return items.reduce(add)
}

function findFirstDuplicate(items) {
    function rec(sum, sums, index) {
        if (sums.has(sum)) {
            return sum;
        } 

        if (index === items.length) {
            index = 0;
        }

        return iter(add(sum, items[index]), sums.add(sum), index + 1);
    }

    function iter() {
        const sums = new Set();
        let index = 0;
        let sum = 0;
        while (!sums.has(sum)) {
            if (index === items.length) {
                index = 0
            }
            sums.add(sum);
            sum = add(sum, items[index]);
            index++;
        }
        return sum;
    }

    return { iter, rec: () => rec(0, new Set(), 0) }; 
}

module.exports = {
    sumArray,
    findFirstDuplicate,
}
