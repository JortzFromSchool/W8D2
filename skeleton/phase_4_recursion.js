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



function bSearch(arr, target) {
    if (arr.length === 0) {
        return null;
    };
    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) {
        return mid;
    };
    if (arr[mid] > target) {
        return bSearch(arr.slice(0, mid), target);
    };
    if (arr[mid] < target) {
        let searchResult = bSearch(arr.slice(mid+1), target)

        if (searchResult === null) {
            return null;
        } else {
            return mid + 1 + searchResult;
        };
    };
};


function merge(left, right) {
    let merged = [];
    while (!(left.length === 0 || right.length === 0)) {
        if (left[0] <= right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        };
    };
    merged = merged.concat(left);
    merged = merged.concat(right);
    return merged;
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }; 
    let mid = Math.floor(arr.length / 2);
    let sortedLeft = mergeSort(arr.slice(0, mid));
    let sortedRight = mergeSort(arr.slice(mid));

    return merge(sortedLeft, sortedRight);
};