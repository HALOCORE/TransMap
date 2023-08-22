def test():
  "--- test function ---"
  param =[(21,),(40,),(83,),(93,),(43,),(98,),(35,),(86,),(76,),(88,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
