def test():
  "--- test function ---"
  param =[(76,),(91,),(62,),(65,),(83,),(57,),(76,),(6,),(2,),(86,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
