def test():
  "--- test function ---"
  param =[('',),('abbc',),('abcabc',),('agsdbkfdc ',),('ababab',),('aaaaaaa',),('aabaaabcc',),('19',),('1001100',),('DtAnuQbU',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
