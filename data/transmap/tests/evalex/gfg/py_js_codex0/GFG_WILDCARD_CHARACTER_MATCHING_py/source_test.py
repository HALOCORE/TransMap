def test():
  "--- test function ---"
  param =[('g*ks', 'geeks',),('ge?ks*', 'geeksforgeeks',),('g*k', 'gee',),('*pqrs', 'pqrst',),('abc*bcd', 'abcdhghgbcd',),('abc*c?d', 'abcd',),('*c*d', 'abcd',),('*?c*d', 'abcd',),('?*1', '010111111001',),('a*', 'CBzHMjUGCUJD',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
