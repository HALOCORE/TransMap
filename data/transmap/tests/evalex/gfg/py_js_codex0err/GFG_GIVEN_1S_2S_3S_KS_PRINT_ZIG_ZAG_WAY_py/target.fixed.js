function f_gold(rows, columns, numbers) {
  var k = 0;
  var arr = Array(rows).fill().map(_ => Array(columns).fill(0));
  for (var i = 0; i < rows; i++) {
    if (i % 2 == 0) {
      var j = 0;
      while (j < columns && numbers[k] > 0) {
        arr[i][j] = k + 1;
        numbers[k] -= 1;
        if (numbers[k] == 0) k += 1;
        j += 1;
      }
    } else {
      var j = columns - 1;
      while (j >= 0 && numbers[k] > 0) {
        arr[i][j] = k + 1;
        numbers[k] -= 1;
        if (numbers[k] == 0) k += 1;
        j -= 1;
      }
    }
  }
  for (let i of arr) {
    for (var j = 0; j < i.length; j++) console.log(i[j]);
    console.log();
  }
}

