function f_gold(x, y) {
  if(y == 0) return 1;
  else if(Math.floor(y % 2)== 0) return(f_gold(x, Math.floor(y / 2))* f_gold(x, Math.floor(y / 2)));
  else return(x * f_gold(x, Math.floor(y / 2))* f_gold(x, Math.floor(y / 2)));
}

