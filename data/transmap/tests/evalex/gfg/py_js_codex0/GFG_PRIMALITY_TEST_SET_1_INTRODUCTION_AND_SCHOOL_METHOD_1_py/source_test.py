def test():
  "--- test function ---"
  param =[(15,),(90,),(38,),(65,),(91,),(16,),(48,),(74,),(14,),(47,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
