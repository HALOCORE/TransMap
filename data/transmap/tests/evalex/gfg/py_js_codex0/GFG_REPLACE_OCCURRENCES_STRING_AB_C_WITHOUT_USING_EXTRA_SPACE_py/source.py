def f_gold(st):
  for i in range(1, len(st)):
    if(st[i - 1] == 'A' and st[i] == 'B'):
      st[i - 1] = 'C'
      for j in range(i, len(st)- 1): st[j] = st[j + 1]
      st[len(st)- 1] = ' '
  return
