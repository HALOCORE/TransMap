def test():
  "--- test function ---"
  param =[(62,),(53,),(8,),(6,),(35,),(35,),(46,),(74,),(69,),(3,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
