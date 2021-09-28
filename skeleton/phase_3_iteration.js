Array.prototype.bubbleSort = function () {
    let sorted = false;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i]);
    };

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[i] > arr[j]) {
                sorted = false;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            };
        };
    };
    return arr;
};


String.prototype.subStrings = function () {
    let arr = [];
    for (let i = 0; i <= this.length; i++) {
        for (let j = i; j <= this.length; j++) {
            if (i === j) {
                continue;
            }
            if (!arr.includes(this.slice(i, j))) {
                arr.push(this.slice(i, j));
            };
        };
    };
    return arr;
};