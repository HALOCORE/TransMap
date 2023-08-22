function f_gold(text, s) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (/^[A-Z]$/.test(char)) {
      result += String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26 + 26) % 26 + 65);
    } else {
      result += String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26 + 26) % 26 + 97);
    }
  }
  return result;
}

