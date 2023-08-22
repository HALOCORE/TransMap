function pluck(arr) {
    if (arr.length === 0)
        return [];
    var evens = arr.filter(function (x) { return x % 2 === 0; });
    if (evens.length === 0)
        return [];
    return [Math.min.apply(Math, evens), arr.indexOf(Math.min.apply(Math, evens))];
}

