function f_gold(str1, str2) {
  if (str1.length > str2.length) {
    let t = str1;
    str1 = str2;
    str2 = t;
  }
  var str = "";
  var n1 = str1.length;
  var n2 = str2.length;
  str1 = str1.split("").reverse().join("");
  str2 = str2.split("").reverse().join("");
  var carry = 0, sum;
  for (let i = 0; i < n1; i++) {
    sum = (str1.charCodeAt(i) - 48) + (str2.charCodeAt(i) - 48) + carry;
    str += String.fromCharCode((sum % 10 + 10) % 10 + 48);
    carry = parseInt(sum / 10);
  }
  for (let i = n1; i < n2; i++) {
    sum = (str2.charCodeAt(i) - 48) + carry;
    str += String.fromCharCode((sum % 10 + 10) % 10 + 48);
    carry = parseInt(sum / 10);
  }
  if (carry) str += String.fromCharCode(carry + 48);
  str = str.split("").reverse().join("");
  return str;
}

