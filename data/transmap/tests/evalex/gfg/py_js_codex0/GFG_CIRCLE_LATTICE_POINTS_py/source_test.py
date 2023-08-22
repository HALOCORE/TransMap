def test():
  "--- test function ---"
  param =[(34,),(56,),(90,),(47,),(36,),(63,),(21,),(76,),(18,),(75,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
