function flipCase(string) {
    return string.split("").map(function (char) {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }
    }).join("");
}

