## TransMap API Library Backend

The three backend servers (`backend-file`, `backend-codex` and `backend-test`) don't have any source code dependencies.

## TransMap API Library Frontend  

- `jsSHA` (BSD-3-Clause license. Included.)
- `Incremental-DOM` (Apache 2.0 License. Included. Code Modified)
- `jsonml2idom.js` (MIT License, included)
- `toastify-js` (MIT License, included)
- `vscode-diff` (MIT License, included)
- `tree-sitter.js` (MIT License, included)
- `showdown` (MIT License, included)

All the LICENSE files can be found in `frontend/_common/*`.

## TransMap User Interface

- `LogViz` (Modified MIT License, included)

## Dataset

The three micro-benchmarks are inside this folder:  
`data/transmap/tests/evalex/(gfg/leetcode/humanevalx)`

- `gfg` from https://github.com/facebookresearch/CodeGen/tree/main/data/transcoder_evaluation_gfg (CC-BY-SA-2.0 License, included)
- `leetcode` from https://github.com/HALOCORE/DuoGlot (CC-BY-SA-4.0 License, included)
- `humanevalx` from https://github.com/THUDM/CodeGeeX/tree/main (Apache 2.0 License, included)

The LICENSE files can be found inside the `evalex` folder.

There are 5 real-world Python libraries or modules used for the case study. They are inside the `real` subfolder of the same folder:

- `stringsim*`: From https://github.com/luozhouyang/python-string-similarity/. MIT License. Included.
- `new_mathgen*`: From https://github.com/lukew3/mathgenerator/. MIT License. Included.
- `heapq`, `html`, and `colorsys`: Python standard Library. Modified from https://github.com/python/cpython/tree/main/Lib to fit the TransMap input format. Under Special License. 

These LICENSE files for the real-world programs are also included in the same folder.