def test():
  "--- test function ---"
  param =[(474,),(9445,),(90,),(30,),(37453,),(27,),(2400,),(98,),(46,),(722,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
