def f_gold(gold, m, n):
  goldTable =[[0 for i in range(n)] for j in range(m)]
  for col in range(n - 1, - 1, - 1):
    for row in range(m):
      if(col == n - 1): right = 0
      else: right = goldTable[row][col + 1]
      if(row == 0 or col == n - 1): right_up = 0
      else: right_up = goldTable[row - 1][col + 1]
      if(row == m - 1 or col == n - 1): right_down = 0
      else: right_down = goldTable[row + 1][col + 1]
      goldTable[row][col] = gold[row][col] + max(right, right_up, right_down)
  res = goldTable[0][0]
  for i in range(1, m): res = max(res, goldTable[i][0])
  return res
