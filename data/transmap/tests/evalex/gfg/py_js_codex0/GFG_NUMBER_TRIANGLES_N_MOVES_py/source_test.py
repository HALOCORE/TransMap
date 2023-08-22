def test():
  "--- test function ---"
  param =[(33,),(72,),(81,),(93,),(8,),(76,),(97,),(91,),(61,),(6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
