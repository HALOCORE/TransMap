function f_gold(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) stack.push(str[i]);
  for (let i = 0; i < str.length; i++) str[i] = stack.pop();
}

