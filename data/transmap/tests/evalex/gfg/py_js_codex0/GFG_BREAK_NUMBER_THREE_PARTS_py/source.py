def f_gold(n):
  count = 0
  for i in range(0, n + 1):
    for j in range(0, n + 1):
      for k in range(0, n + 1):
        if(i + j + k == n): count = count + 1
  return count
