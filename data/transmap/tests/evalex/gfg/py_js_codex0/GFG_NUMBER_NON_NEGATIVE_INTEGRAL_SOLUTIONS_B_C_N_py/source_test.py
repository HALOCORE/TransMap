def test():
  "--- test function ---"
  param =[(62,),(44,),(37,),(81,),(14,),(20,),(76,),(72,),(96,),(52,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
