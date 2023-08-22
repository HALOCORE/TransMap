def test():
  "--- test function ---"
  param =[(24,),(46,),(47,),(41,),(98,),(69,),(83,),(2,),(12,),(11,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
