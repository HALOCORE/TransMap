def test():
  "--- test function ---"
  param =[('aadaa',),('2674377254',),('11',),('0011000 ',),('26382426486138',),('111010111010',),('abccba',),('5191',),('1110101101',),('abcdecbe',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
