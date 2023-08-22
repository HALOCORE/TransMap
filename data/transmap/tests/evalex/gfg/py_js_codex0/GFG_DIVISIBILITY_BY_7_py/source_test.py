def test():
  "--- test function ---"
  param =[(0,),(- 21,),(7,),(63,),(84,),(73,),(81,),(- 10,),(47,),(23,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
