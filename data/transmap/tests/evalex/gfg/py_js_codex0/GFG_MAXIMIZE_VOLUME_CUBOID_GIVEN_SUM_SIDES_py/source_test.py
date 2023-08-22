def test():
  "--- test function ---"
  param =[(67,),(48,),(59,),(22,),(14,),(66,),(1,),(75,),(58,),(78,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
