
function encode(message) {
    let vowels = "aeiouAEIOU";
    let vowels_replace = new Map([[i, String.fromCharCode(i.charCodeAt(0) + 2)] for (i of vowels)]);
    message = message.split("").map(i => i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase()).join("");
    return [...message].map(i => vowels_replace.has(i) ? vowels_replace.get(i) : i).join("");
}

