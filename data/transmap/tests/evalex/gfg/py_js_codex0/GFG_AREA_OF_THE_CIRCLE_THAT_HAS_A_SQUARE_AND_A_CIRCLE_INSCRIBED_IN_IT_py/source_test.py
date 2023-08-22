def test():
  "--- test function ---"
  param =[(77,),(18,),(83,),(39,),(68,),(28,),(71,),(14,),(21,),(73,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
