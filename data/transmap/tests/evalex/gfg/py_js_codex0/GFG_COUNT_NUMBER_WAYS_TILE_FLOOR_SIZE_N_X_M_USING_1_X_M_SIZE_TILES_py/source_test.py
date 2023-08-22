def test():
  "--- test function ---"
  param =[(93, 54,),(17, 4,),(38, 39,),(33, 64,),(78, 35,),(40, 61,),(95, 6,),(12, 8,),(69, 60,),(78, 21,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
