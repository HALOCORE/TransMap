function f_gold(str, l, h) {
  if(l > h) return Number.MAX_VALUE;
  if(l == h) return 0;
  if(l == h - 1) return 0 if(str[l] == str[h])else 1;
  if(str[l] == str[h]) return f_gold(str, l + 1, h - 1);
  else return(Math.min(f_gold(str, l, h - 1), f_gold(str, l + 1, h))+ 1);
}

