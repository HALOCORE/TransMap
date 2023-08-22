function f_gold(tree, k) {
  var level = - 1;
  var sum = 0;
  var n = tree.length;
  for (var i = 0; i < n; i++) {
    if (tree[i] == '(') level += 1;
    else if (tree[i] == ')') level -= 1;
    else {
      if (level == k) sum += (tree[i].charCodeAt(0) - '0'.charCodeAt(0));
    }
  }
  return sum;
}

