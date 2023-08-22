def test():
  "--- test function ---"
  param =[(87, 60,),(18, 35,),(68, 93,),(80, 20,),(87, 69,),(64, 29,),(64, 1,),(65, 95,),(43, 72,),(97, 41,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
