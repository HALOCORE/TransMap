function f_gold(x) {
  var next = 0;
  if (x) {
    var rightOne = x & -(x);
    var nextHigherOneBit = x + parseInt(rightOne);
    var rightOnesPattern = x ^ parseInt(nextHigherOneBit);
    rightOnesPattern = parseInt(rightOnesPattern) / parseInt(rightOne);
    rightOnesPattern = parseInt(rightOnesPattern) >> 2;
    next = nextHigherOneBit | rightOnesPattern;
  }
  return next;
}

