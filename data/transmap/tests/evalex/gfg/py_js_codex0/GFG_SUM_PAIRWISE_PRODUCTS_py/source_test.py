def test():
  "--- test function ---"
  param =[(21,),(32,),(16,),(38,),(9,),(3,),(5,),(46,),(45,),(87,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
