def test():
  "--- test function ---"
  param =[('(0(5(6()())(4()(9()())))(7(1()())(3()())))', 2,),('(8(3(2()())(6(5()())()))(5(10()())(7(13()())())))', 3,),('(0(5(6()())(4()(9()())))(7(1()())(3()())))', 1,),('(8(3(2()())(6(5()())()))(5(10()())(7(13()())())))', 2,),('(8(3(2()())(6(5()())()))(5(10()())(7(13()())())))', 4,),('(8(3(2()())(6(5()())()))(5(10()())(7(13()())())))', 100,),('(0(5(6()())(4()(9()())))(7(1()())(3()())))', 3,),('(0(5(6()())(4()(9()())))(7(1()())(3()())))', 0,),('0010', 12,),('kjtdgmy', 97,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()