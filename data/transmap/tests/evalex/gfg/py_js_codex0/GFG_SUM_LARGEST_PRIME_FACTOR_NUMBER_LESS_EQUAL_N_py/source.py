def f_gold(n):
  prime =[0] *(n + 1)
  sum = 0
  max = int(n / 2)
  for p in range(2, max + 1):
    if prime[p] == 0:
      for i in range(p * 2, n + 1, p): prime[i] = p
  for p in range(2, n + 1):
    if prime[p]: sum += prime[p]
    else: sum += p
  return sum
