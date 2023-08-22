import sys ;
def f_gold(arr, n):
  min_ending_here = sys.maxsize
  min_so_far = sys.maxsize
  for i in range(n):
    if(min_ending_here > 0): min_ending_here = arr[i]
    else: min_ending_here += arr[i]
    min_so_far = min(min_so_far, min_ending_here)
  return min_so_far
