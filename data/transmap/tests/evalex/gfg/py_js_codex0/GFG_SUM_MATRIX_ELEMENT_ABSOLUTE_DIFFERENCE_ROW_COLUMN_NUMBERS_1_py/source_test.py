def test():
  "--- test function ---"
  param =[(63,),(72,),(28,),(35,),(6,),(70,),(20,),(8,),(8,),(35,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
