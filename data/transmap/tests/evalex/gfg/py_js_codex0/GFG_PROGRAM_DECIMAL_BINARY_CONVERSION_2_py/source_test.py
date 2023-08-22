def test():
  "--- test function ---"
  param =[(18,),(92,),(87,),(50,),(56,),(88,),(3,),(16,),(45,),(58,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
