function range (start, end) {
    if (start === end){
        return [end]
    };

    return [start].concat(range(start + 1, end))

};

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    };

    return arr[0] + sumRec(arr.slice(1))
};

function exponent(base, exp) {
    if (exp < 0) {
        return null;
    };
    if (exp === 0) {
        return 1;
    };
    return base * exponent(base, exp - 1);
};

function fibonacci(n) {
    if (n === 1) {
        return [1];
    };
    if (n === 2) {
        return [1,1]
    };
    let prev = fibonacci(n-1);
    let length = prev.length
    return prev.concat([prev[length-1] + prev[length-2]]);
};

function deepDup(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            result.push(deepDup(arr[i]));
        }
        else {
            result.push(arr[i]);
        };
    };
    return result;
};