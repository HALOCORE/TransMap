def test():
  "--- test function ---"
  param =[([4, 6, 9, 16, 16, 21, 36, 41, 58, 60, 62, 73, 77, 81, 95], 12,),([- 86, - 72, - 26, - 34, 18, - 62, - 66], 3,),([1], 0,),([16], 0,),([- 88, - 80, - 72, - 68, - 64, - 26, 4, 14, 16, 22, 30, 32, 60, 74, 82], 11,),([0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1], 9,),([3, 9, 10, 12, 17, 23, 27, 29, 42, 44, 59, 61, 71, 76, 78, 82, 84, 84, 89, 90, 93, 93, 97, 97], 15,),([68, - 40, - 46, - 20, - 64, 90], 5,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15,),([99, 17, 94, 43, 97, 17, 11, 58, 75, 94, 37, 22, 54, 31, 41, 4, 55, 69, 92, 80, 45, 97, 16, 33, 36, 17, 43, 82, 81, 64, 22, 65, 85, 44, 47, 14], 23,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
