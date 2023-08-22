
function longest(strings) {
    if (strings.length === 0) {
        return null;
    }

    var maxlen = Math.max.apply(Math, strings.map(function (x) {
        return x.length;
    }));
    for (var _iterator = strings, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var s = _ref;

        if (s.length === maxlen) {
            return s;
        }
    }
}

