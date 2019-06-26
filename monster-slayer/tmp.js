function sum(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    }, 0);
};

var arr = [];

console.log(15 - sum(arr));