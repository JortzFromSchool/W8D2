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

