def test():
  "--- test function ---"
  param =[(94,),(94,),(79,),(39,),(16,),(90,),(64,),(76,),(83,),(47,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
