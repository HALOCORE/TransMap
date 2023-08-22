
function encode_shift(s) {
    return s.split("").map(function (ch) {
        return String.fromCharCode(((ch.charCodeAt(0) + 5 - "a".charCodeAt(0) + 26) % 26) + "a".charCodeAt(0));
    }).join("");
}

function decode_shift(s) {
    return s.split("").map(function (ch) {
        return String.fromCharCode(((ch.charCodeAt(0) - 5 - "a".charCodeAt(0) + 26) % 26) + "a".charCodeAt(0));
    }).join("");
}

