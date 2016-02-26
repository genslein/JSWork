var range = function (start, end) {
    var arr = [];
    for(var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};

var sum = function(array) {
    var result = 0;
    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
};

console.log(range(1,10));
console.log(sum(range(1,10)));