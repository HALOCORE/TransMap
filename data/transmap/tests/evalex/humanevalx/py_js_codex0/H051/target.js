
function removeVowels(text) {
    return text.split("").filter(function (s) {
        return ["a", "e", "i", "o", "u"].indexOf(s.toLowerCase()) === -1;
    }).join("");
}

