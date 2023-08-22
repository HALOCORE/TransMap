def test():
  "--- test function ---"
  param =[("((a+b)+((c+d)))",),("(((a+(b)))+(c+d))",),("(((a+(b))+c+d))",),("((a+b)+(c+d))",),("(8582007)",),("((a+(b))+(c+d))",),("(PylsShEdKAE)",),('886980680541',),('001',),('jsVmFeOq',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
