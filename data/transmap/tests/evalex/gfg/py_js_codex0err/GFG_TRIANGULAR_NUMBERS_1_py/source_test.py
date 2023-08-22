def test():
  "--- test function ---"
  param =[(1,),(3,),(6,),(10,),(55,),(48,),(63,),(72,),(16,),(85,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
