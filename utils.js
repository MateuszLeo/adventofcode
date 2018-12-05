function get(obj, key, defaultValue) {
    return obj[key] || defaultValue;
}

function pipe(...args) {
    //no arity check :( 
    return (args1) => args.reduce((acc, fn) => {
        acc = fn(acc);
        return acc; 
    }, args1);
}

module.exports = {
    pipe,
    get,
}
