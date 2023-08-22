function f_gold(tree, k) {
  var level = -1;
  var product = 1;
  var n = tree.length;
  for (var i = 0; i < n; i++) {
    if (tree[i] == '(') level += 1;
    else if (tree[i] == ')') level -= 1;
    else {
      if (level == k) product *= (parseInt(tree[i]) - parseInt('0'));
    }
  }
  return product;
}

