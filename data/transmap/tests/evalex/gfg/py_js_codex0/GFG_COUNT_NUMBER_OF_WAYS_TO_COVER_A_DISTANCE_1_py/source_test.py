def test():
  "--- test function ---"
  param =[(37,),(82,),(87,),(80,),(92,),(58,),(98,),(53,),(11,),(58,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
