function f_gold(p) {
  let checkNumber = Math.pow(2, p) - 1;
  let nextval = 4 % checkNumber;
  for (let i = 1; i < p - 1; i++) nextval = (nextval * nextval - 2) % checkNumber;
  if (nextval == 0) return true;
  else return false;
}

