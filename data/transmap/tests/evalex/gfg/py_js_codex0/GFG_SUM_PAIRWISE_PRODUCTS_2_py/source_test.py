def test():
  "--- test function ---"
  param =[(57,),(18,),(97,),(9,),(42,),(67,),(71,),(66,),(69,),(18,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
