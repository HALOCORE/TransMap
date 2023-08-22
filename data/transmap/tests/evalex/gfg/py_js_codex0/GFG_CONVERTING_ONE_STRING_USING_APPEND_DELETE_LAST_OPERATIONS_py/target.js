function f_gold(str1, str2, k) {
  if((str1.length + str2.length) < k) return true;
  let commonLength = 0;
  for(let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if(str1[i] == str2[i]) commonLength++;
    else break;
  }
  if((k - str1.length - str2.length + 2 * commonLength) % 2 == 0) return true;
  return false;
}

