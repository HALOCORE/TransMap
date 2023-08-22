function f_gold(encodedText, rows) {
    var ans = [];
    var cols = Math.floor(encodedText.length / rows);
    for (var j = 0; j < cols; j++) {
        var x = 0;
        var y = j;
        while (x < rows && y < cols) {
            ans.push(encodedText[x * cols + y]);
            x = x + 1;
            y = y + 1;
        }
    }
    return ans.join('').trim();
}

