function f_gold(stack1, stack2, stack3, n1, n2, n3) {
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;
  for (var i = 0; i < n1; i++) sum1 += stack1[i];
  for (var i = 0; i < n2; i++) sum2 += stack2[i];
  for (var i = 0; i < n3; i++) sum3 += stack3[i];
  var top1 = 0;
  var top2 = 0;
  var top3 = 0;
  var ans = 0;
  while (1) {
    if (top1 == n1 || top2 == n2 || top3 == n3) return 0;
    if (sum1 == sum2 && sum2 == sum3) return sum1;
    if (sum1 >= sum2 && sum1 >= sum3) {
      sum1 -= stack1[top1];
      top1 = top1 + 1;
    } else if (sum2 >= sum3 && sum2 >= sum3) {
      sum2 -= stack2[top2];
      top2 = top2 + 1;
    } else if (sum3 >= sum2 && sum3 >= sum1) {
      sum3 -= stack3[top3];
      top3 = top3 + 1;
    }
  }
}

