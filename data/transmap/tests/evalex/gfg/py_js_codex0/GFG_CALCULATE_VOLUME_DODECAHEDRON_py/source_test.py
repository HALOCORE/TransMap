def test():
  "--- test function ---"
  param =[(56,),(73,),(22,),(10,),(84,),(20,),(51,),(91,),(10,),(83,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
