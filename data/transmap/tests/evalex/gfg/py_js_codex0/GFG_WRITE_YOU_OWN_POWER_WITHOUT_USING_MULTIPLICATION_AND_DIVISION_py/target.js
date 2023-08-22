function f_gold(a, b) {
  if (b == 0) return 1;
  var answer = a;
  var increment = a;
  for (var i = 1; i < b; i++) {
    for (var j = 1; j < a; j++) answer += increment;
    increment = answer;
  }
  return answer;
}

