def f_gold(arr, low, high, key):
  if(high < low): return - 1
  mid =(low + high)/ 2
  if(key == arr[int(mid)]): return mid
  if(key > arr[int(mid)]): return f_gold(arr,(mid + 1), high, key)
  return(f_gold(arr, low,(mid - 1), key))
