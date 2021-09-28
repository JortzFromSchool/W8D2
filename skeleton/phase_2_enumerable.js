Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        this[i] = callback(this[i]);
    };
};

Array.prototype.myMap = function(callback) {
    const results = [];

    for(let i = 0; i < this.length; i++) {
        results.push(this[i]);
    };

    results.myEach(callback);

    return results;
};

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = this[0];
        arr = arr.slice(1);
    }

    arr.myEach(function(x) {initialValue = callback(initialValue, x)});

    return initialValue;
};