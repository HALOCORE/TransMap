def test():
  "--- test function ---"
  param =[(20,),(6,),(39,),(80,),(88,),(7,),(16,),(27,),(83,),(6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
