def test():
  "--- test function ---"
  param =[("TTFT", "|&^", 4,),("TFT", "^&", 3,),("TFF", "^|", 3,),("TTFT", "|||", 4,),("TTFT", "&&&", 4,),("TTFT", "&&^", 4,),("TTFT", "^&|", 4,),("TTFT", "^^^", 4,),("TTFT", "^||", 4,),("TTFT", "|^|", 4,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
