def test():
  "--- test function ---"
  param =[(52,),(47,),(75,),(36,),(68,),(16,),(99,),(38,),(84,),(45,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
