function f_gold(string) {
  var Stack = [];
  for (var ch in string) {
    if (ch == ')') {
      var top = Stack.pop();
      var elementsInside = 0;
      while (top != '(') {
        elementsInside += 1;
        top = Stack.pop();
      }
      if (elementsInside < 1) return true;
    } else Stack.push(ch);
  }
  return false;
}

