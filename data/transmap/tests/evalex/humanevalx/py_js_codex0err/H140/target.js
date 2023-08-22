function fix_spaces(text) {
    let new_text = "";
    let i = 0;
    let start, end = 0, 0;
    while (i < text.length) {
        if (text[i] == " ") {
            end += 1;
        } else {
            if (end - start > 2) {
                new_text += "-" + text[i];
            } else if (end - start > 0) {
                new_text += "_".repeat(end - start) + text[i];
            } else {
                new_text += text[i];
            }
            start, end = i + 1, i + 1;
        }
        i += 1;
    }
    if (end - start > 2) {
        new_text += "-";
    } else if (end - start > 0) {
        new_text += "_";
    }
    return new_text;
}

