def test():
  "--- test function ---"
  param =[(27, 7,),(77, 34,),(35, 22,),(26, 20,),(6, 10,),(66, 47,),(44, 29,),(26, 33,),(74, 86,),(65, 97,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
