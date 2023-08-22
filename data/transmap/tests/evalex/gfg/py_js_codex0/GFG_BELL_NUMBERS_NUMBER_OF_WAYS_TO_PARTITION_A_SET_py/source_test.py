def test():
  "--- test function ---"
  param =[(84,),(78,),(9,),(73,),(4,),(53,),(85,),(38,),(39,),(6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
