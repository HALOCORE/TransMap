function f_gold(A, B) {
  var variable = 1;
  if(A == B) return 1;
  else if((B - A)>= 5) return 0;
  else {
    for(var i = A + 1; i < B + 1; i++) variable =(variable *(i % 10))% 10;
    return variable % 10;
  }
}

