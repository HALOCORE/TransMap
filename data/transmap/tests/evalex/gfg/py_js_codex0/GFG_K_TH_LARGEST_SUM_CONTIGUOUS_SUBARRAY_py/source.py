import heapq ;
def f_gold(arr, n, k):
  sum =[]
  sum.append(0)
  sum.append(arr[0])
  for i in range(2, n + 1): sum.append(sum[i - 1] + arr[i - 1])
  Q =[]
  heapq.heapify(Q)
  for i in range(1, n + 1):
    for j in range(i, n + 1):
      x = sum[j] - sum[i - 1]
      if len(Q)< k: heapq.heappush(Q, x)
      else:
        if Q[0] < x:
          heapq.heappop(Q)
          heapq.heappush(Q, x)
  return Q[0]
