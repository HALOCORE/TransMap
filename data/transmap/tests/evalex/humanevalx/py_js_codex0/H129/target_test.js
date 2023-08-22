//TESTED_PROGRAM

if(
    JSON.stringify(
      minPath(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        3
      )
    ) !== JSON.stringify([1, 2, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [5, 9, 3],
          [4, 1, 6],
          [7, 8, 2],
        ],
        1
      )
    ) !== JSON.stringify([1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ],
        4
      )
    ) !== JSON.stringify([1, 2, 1, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [6, 4, 13, 10],
          [5, 7, 12, 1],
          [3, 16, 11, 15],
          [8, 14, 9, 2],
        ],
        7
      )
    ) !== JSON.stringify([1, 10, 1, 10, 1, 10, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [8, 14, 9, 2],
          [6, 4, 13, 15],
          [5, 7, 1, 12],
          [3, 10, 11, 16],
        ],
        5
      )
    ) !== JSON.stringify([1, 7, 1, 7, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [11, 8, 7, 2],
          [5, 16, 14, 4],
          [9, 3, 15, 6],
          [12, 13, 10, 1],
        ],
        9
      )
    ) !== JSON.stringify([1, 6, 1, 6, 1, 6, 1, 6, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [12, 13, 10, 1],
          [9, 3, 15, 6],
          [5, 16, 14, 4],
          [11, 8, 7, 2],
        ],
        12
      )
    ) !== JSON.stringify([1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [2, 7, 4],
          [3, 1, 5],
          [6, 8, 9],
        ],
        8
      )
    ) !== JSON.stringify([1, 3, 1, 3, 1, 3, 1, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [6, 1, 5],
          [3, 8, 9],
          [2, 7, 4],
        ],
        8
      )
    ) !== JSON.stringify([1, 5, 1, 5, 1, 5, 1, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [1, 2],
          [3, 4],
        ],
        10
      )
    ) !== JSON.stringify([1, 2, 1, 2, 1, 2, 1, 2, 1, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      minPath(
        [
          [1, 3],
          [4, 2],
        ],
        10
      )
    ) !== JSON.stringify([1, 3, 1, 3, 1, 3, 1, 3, 1, 3])
  )
  throw Error("MyLogError MISMATCH");