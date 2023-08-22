function f_gold(arr) {
    var n = arr.length;
    var start = Math.floor(n * 0.05);
    var end = Math.floor(n * 0.95);
    arr.sort();
    var t = arr.slice(start, end);
    return Number((t.reduce((a, b) => a + b) / t.length).toFixed(5));
}

