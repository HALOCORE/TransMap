def test():
  "--- test function ---"
  param =[(1,),(5,),(14,),(140,),(204,),(3,),(506,),(42,),(4,),(87,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
