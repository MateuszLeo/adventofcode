const fs = require('fs');

const { pipe, get } = require('../utils');

function parse(value) { 
    return value
        .split(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
        .filter(Boolean)
        .map(Number);
}

function toArray(string) {
    return string
        .split('\n')
        .map(parse)
        .map(([id, left, top, width, height]) => ({ 
                id,
                x1: left,
                y1: top,
                x2: left + width,
                y2: top + height,
            })
        );
}

function getCoordsOccurrence(data) {
    return data.reduce((acc, value) => {
        for (let i = value.x1; i < value.x2; i++) {
            for (let j = value.y1; j < value.y2; j++) {
                const cords = `${i}-${j}`
                acc[cords] = get(acc, cords, 0) + 1;
            }
        }
        return acc;
    }, {})
}

function getWithRepeatedOccurence(data) {
    return Object.values(data).filter(value => value > 1).length;
}

function countOccurrence(data) {
    let occurrence = {};
    for (let {id, x1, x2, y1, y2 } of data) {
        for (let compareTo of data) {
            if (x1 < compareTo.x2 && x2 > compareTo.x1 && y1 < compareTo.y2 && y2 > compareTo.y1) {
               occurrence[id] = get(occurrence, id, []).concat(compareTo.id);
            }
        }
    }
    return occurrence;
}

function getWithOneOuccurrence(data) {
    return Number(Object.entries(data).filter(([key, value]) => value.length === 1)[0][0]);
} 

const getInches = pipe(toArray, getCoordsOccurrence, getWithRepeatedOccurence)
const getNotOverlappingId = pipe(toArray, countOccurrence, getWithOneOuccurrence)

module.exports = {
    getInches,
    getNotOverlappingId,
}

