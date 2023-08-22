def test():
  "--- test function ---"
  param =[(22,),(91,),(33,),(93,),(90,),(59,),(88,),(41,),(70,),(63,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
