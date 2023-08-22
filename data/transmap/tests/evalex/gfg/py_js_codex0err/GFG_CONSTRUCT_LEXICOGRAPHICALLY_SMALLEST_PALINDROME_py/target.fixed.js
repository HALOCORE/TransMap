function f_gold(string, l) {
  
  var i = -1;
  var j = l;
  while (i < j) {
    i += 1;
    j -= 1;
    if (string[i] == string[j] && string[i] != '*') continue;
    else if (string[i] == string[j] && string[i] == '*') {
      string[i] = 'a';
      string[j] = 'a';
      continue;
    }
    else if (string[i] == '*') {
      string[i] = string[j];
      continue;
    }
    else if (string[j] == '*') {
      string[j] = string[i];
      continue;
    }
    console.log("Not Possible");
    return "";
  }
  return string.join("");
}

