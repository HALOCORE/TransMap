def test():
  "--- test function ---"
  param =[('1001ab010abc01001',),('1001010001',),('010100010100',),('DLCu',),('7072430592',),('011',),('pnJpypYOza',),('1037',),('111',),('HxK',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
