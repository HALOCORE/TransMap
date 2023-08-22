def test():
  "--- test function ---"
  param =[('D',),('I',),('DD',),('II',),('DIDI',),('IIDDD',),('DDIDDIID',),('176297',),('1',),('XHkhZq',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
