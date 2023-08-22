function f_gold(ip, op, n) {
  var Input = new Queue();
  for (var i = 0; i < n; i++) Input.put(ip[i]);
  var output = new Queue();
  for (var i = 0; i < n; i++) output.put(op[i]);
  var tempStack = [];
  while (!Input.empty()) {
    var ele = Input.queue[0];
    Input.get();
    if (ele == output.queue[0]) {
      output.get();
      while (tempStack.length != 0) {
        if (tempStack[tempStack.length - 1] == output.queue[0]) {
          tempStack.pop();
          output.get();
        } else break;
      }
    } else tempStack.push(ele);
  }
  return Input.empty() && tempStack.length == 0;
}

