def test():
  "--- test function ---"
  param =[(49,),(4,),(60,),(90,),(96,),(29,),(86,),(47,),(77,),(87,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
