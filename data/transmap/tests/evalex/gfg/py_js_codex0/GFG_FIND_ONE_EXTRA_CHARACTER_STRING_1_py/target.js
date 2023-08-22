function f_gold(strA, strB) {
  var res = 0;
  for (var i = 0; i < strA.length; i++) res = res ^ strA.charCodeAt(i);
  for (var i = 0; i < strB.length; i++) res = res ^ strB.charCodeAt(i);
  return String.fromCharCode(res);
}

