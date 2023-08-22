//TESTED_PROGRAM

if(
    max_fill(
      [
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 1],
      ],
      1
    ) !== 6
  )
  throw Error("MyLogError MISMATCH");
if(
    max_fill(
      [
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
      ],
      2
    ) !== 5
  )
  throw Error("MyLogError MISMATCH");
if(
    max_fill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      5
    ) !== 0
  )
  throw Error("MyLogError MISMATCH");
if(
    max_fill(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      2
    ) !== 4
  )
  throw Error("MyLogError MISMATCH");
if(
    max_fill(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      9
    ) !== 2
  )
  throw Error("MyLogError MISMATCH");