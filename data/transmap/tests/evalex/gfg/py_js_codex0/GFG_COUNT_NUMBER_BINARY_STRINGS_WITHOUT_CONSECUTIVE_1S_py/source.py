def f_gold(n):
  a =[0 for i in range(n)]
  b =[0 for i in range(n)]
  a[0] = b[0] = 1
  for i in range(1, n):
    a[i] = a[i - 1] + b[i - 1]
    b[i] = a[i - 1]
  return a[n - 1] + b[n - 1]
