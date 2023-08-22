
function allPrefixes(string) {
    let result = [];

    for (let i = 0; i < string.length; i++) {
        result.push(string.slice(0, i + 1));
    }
    return result;
}

