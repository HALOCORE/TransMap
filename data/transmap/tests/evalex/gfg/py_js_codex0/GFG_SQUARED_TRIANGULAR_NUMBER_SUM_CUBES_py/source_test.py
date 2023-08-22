def test():
  "--- test function ---"
  param =[(15,),(36,),(39,),(43,),(75,),(49,),(56,),(14,),(62,),(97,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
