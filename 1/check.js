const fs = require('fs')

const { sumArray, findFirstDuplicate } = require('./1.js')

fs.readFile('input.txt', 'utf8', (err, data) => {
    const items = data.split('\n').filter(o =>  o !== '').map(Number);
    console.log(sumArray(items));
    console.log(findFirstDuplicate(items).iter());
});

