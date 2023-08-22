def test():
  "--- test function ---"
  param =[(99,),(62,),(87,),(87,),(61,),(88,),(73,),(62,),(98,),(57,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
