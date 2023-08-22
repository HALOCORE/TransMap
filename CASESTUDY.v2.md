# TransMap Case Study

The details about the case study can be found in the paper (section 6.3) and the supplementary material (section 6). Here we explain the related files, the steps to conduct the case study, and the evaluation results.

## Related Files

We select five Python libraries for the case study. Their summaries are described in the supplementary material (section 6.1).

- `data/transmap/tests/evalex/real/py_js_codex0err/*`: The processing directory of each library. We first merge Python files of this library into several self-contained programs, named `${lib_name}_${idx}`, e.g., `new_mathgen_0`, `new_mathgen_1`, and `new_heapq`.
  - `source.py`: The merged program. We split this code into segments with lengths of around 50 lines while preserving the boundaries of classes and functions. Each segment is noted with `##### Segment BEGIN Basic` and `##### Segment END`.
  - `source_raw.py`
  - ...
  - `target_fixed.js`: supplementary material (section 6.2); maybe note the path of translating script.
  - `target_test.js`: supplementary material (section 6.3)
  - ...

## Steps to conduct the case study

Here we use `new_heapq` as an example to explain how to conduct the case study step by step.

### Manually fix the mistakes

Open the LogViz UI

### Automatically apply our provided patches




-----------------------

### short programs

- `short_GFG_COUNT_POSSIBLE_...`
  - mod `%` operation error
- `short_GFG_MINIMUM_COST_...`
  - `sort()` function call
- `short_GFG_SQUARE_ROOT_...`
  - `Math.floor` function call
- `short_H132`
  - `for .. in ..` and `for .. of ..`
- `short_L0885_SpiralMatrixIII_py`
  - `a < b < c`
- `short_L0926_FlipStringtoMonotoneIncreasing_py`
  - `Array.fill(0)`
- `short_L1002_FindCommonCharacters_py`
  - `for .. in ..` and `for .. of ..`
- `short_L2171_RemovingMinimumNumberofMagicBeans_py`
  - `sort()` function call


### long programs

- `stringsim0` (mistake 1)
  - missing `fill(0)`
- `stringsim0` (mistake 2)
  - `d[x]` should be `d.at(x)`
- `stringsim3`
  - `pop()` should be `splice()`
- `stringsim4`
  - `x.length` should be `Object.keys(x).length`

## Reusability: Apply TransMap to your own Python Program

To apply TransMap to your own Python program, you need to prepare the following files:

- `source.py`: The Python program to be translated.
- `source_test.py`: The Python test program for `source.py`. Alternatively, you can also put the tests in `source.py`. See below for details.
- `target_tmpl.js`: The JavaScript program template used for generating the translation `target.js`.
- `target_test.py`: The JavaScript test program for `target.js`. Alternatively, you can also put the tests in `target_tmpl.js`. See below for details.

