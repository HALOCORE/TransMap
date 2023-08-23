# TransMap User Study

The details about the user study can be found in the paper, section 6.4. We provide the following files for the user study:

## Related Files    

- `data/transmap/user_study_cmp/user_data_ro`: The randomly selected cases (4 mistakes for long programs and 8 mistakes for short programs) for the user study.
- `data/transmap/user_study_cmp/Dockerfile`: The dockerfile for the `code-server` (the browser version of vscode, exposed at port 8080 of the docker container). Additionally, we installed debuggers and language server plugins to make it a standard IDE environment for coding and debugging Python and JavaScript programs. The control group uses a browser link to this web-based vscode as the only tool to debug the programs.

Below describes the semantic mistakes of selected benchmarks in the user study.

### short programs

- `short_GFG_COUNT_POSSIBLE_...`
  - mod `%` operation is semantically different.
- `short_GFG_MINIMUM_COST_...`
  - `sort()` function call is used wrongly.
- `short_GFG_SQUARE_ROOT_OF_AN_INTEGER_1_py`
  - `Math.floor` function call is missing.
- `short_H132`
  - wrong loop stucture used: `for .. in ..` and `for .. of ..`
- `short_L0885_SpiralMatrixIII_py`
  - `a < b < c` is different in Python and JavaScript.
- `short_L0926_FlipStringtoMonotoneIncreasing_py`
  - `Array.fill(0)` function call is missing.
- `short_L1002_FindCommonCharacters_py`
  - wrong loop stucture used: `for .. in ..` and `for .. of ..`
- `short_L2171_RemovingMinimumNumberofMagicBeans_py`
  - `sort()` function call is used wrongly.


### long programs

- `stringsim0` (mistake 1)
  - missing `fill(0)` function call
- `stringsim0` (mistake 2)
  - `d[x]` should be `d.at(x)` for negative index.
- `stringsim3`
  - `pop(i)` with arguments should be `splice(i)`.
- `stringsim4`
  - `x.length` should be `Object.keys(x).length` depending on the context.


## User Study Results

- Due to privacy concerns, we will not release the operation logs for each of the human subjects during the user study. We only release the aggregated results and the code producing the results in the Jupyter Notebook at `automations/transmap/userstudy_results.ipynb`. However, since the raw data is not released, the notebook cannot be executed interactively.