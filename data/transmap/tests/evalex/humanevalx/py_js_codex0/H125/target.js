function split_words(txt) {
    if (txt.includes(" ")) {
        return txt.split(" ");
    } else if (txt.includes(",")) {
        return txt.replace(",", " ").split(" ");
    } else {
        return [...txt].filter(i => i.toLowerCase() === i && i.charCodeAt(0) % 2 === 0).length;
    }
}

