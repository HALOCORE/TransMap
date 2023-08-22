function f_gold(num) {
  var series = [1, 3, 2, -1, -3, -2];
  var series_index = 0;
  var result = 0;
  for (var i = (num.length - 1); i >= 0; i--) {
    var digit = num.charCodeAt(i) - 48;
    result += digit * series[series_index];
    series_index = (series_index + 1) % 6;
    result %= 7;
  }
  if (result < 0) {
    result = (result + 7) % 7;
  }
  return result;
}

