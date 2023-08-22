def test():
  "--- test function ---"
  param =[(97,),(97,),(32,),(40,),(18,),(14,),(90,),(39,),(1,),(57,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
