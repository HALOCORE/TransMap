
function encode(message) {
    let vowels = "aeiouAEIOU";
    let vowels_replace = {};
    vowels.split("").forEach((value) => vowels_replace[value] = String.fromCharCode(value.charCodeAt(0) + 2))
    message = message.split("").map(i => /[A-Z]/.test(i) ? i.toLowerCase() : i.toUpperCase()).join("");
    return [...message].map(i => typeof(vowels_replace[i]) !== 'undefined' ? vowels_replace[i] : i).join("");
}

