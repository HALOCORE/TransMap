def test():
  "--- test function ---"
  param =[('geeksmanishgeeks', 'geeks',),('shreyadhatwalia', 'abc',),('10000100', '100',),('abaa', 'a',),('30645530', '30',),('0000011011001', '001',),('dkqEd', 'd',),('48694119324654', '654',),('1101010010', '11',),('Ks', 'KsFLmngGGOmHKs',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
