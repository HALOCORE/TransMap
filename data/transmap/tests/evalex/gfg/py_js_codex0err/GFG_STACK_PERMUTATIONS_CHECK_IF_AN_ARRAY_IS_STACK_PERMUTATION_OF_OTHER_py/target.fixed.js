function f_gold(ip, op, n) {
  var Input = [];
  for (var i = 0; i < n; i++) Input.push(ip[i]);
  var output = [];
  for (var i = 0; i < n; i++) output.push(op[i]);
  var tempStack = [];
  while (Input.length !== 0) {
    var ele = Input[0];
    Input.shift();
    if (ele == output[0]) {
      output.shift();
      while (tempStack.length != 0) {
        if (tempStack[tempStack.length - 1] == output[0]) {
          tempStack.pop();
          output.shift();
        } else break;
      }
    } else tempStack.push(ele);
  }
  return Input.length === 0 && tempStack.length == 0;
}

