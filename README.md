# TransMap: Debugging Code Translation by Codex & chatGPT

> Paper: **TransMap: Pinpointing Mistakes in Neural Code Translation** in ESEC/FSE 2023

## License

Main part of the code is under MIT license. See [`LICENSE`](./LICENSE) for details.

 
## Introduction

This artifact `TransMap` is a tool to pinpoint mistakes in neural code translation by Codex or chatGPT. More specifically, it focuses on Python to JavaScript code translation. 

It takes a standalone Python program as input, and then obtain its JavaScript translation and generating a source mapping between statements in the target program and the source program, using Codex or chatGPT.

Next, it uses the source mapping to aid tracing the execution of the translated program and comparing against the source reference program to pinpoint the mistakes in the translation.

## Evaluation Overview
### A. Micro Benchmarks

The three sets of micro benchmarks for pinpointing translation mistakes with manually validated list of mistakes are at: 

- GeeksForGeeks: `data/transmap/tests/evalex/gfg`
- LeetCode: `data/transmap/tests/evalex/leetcode`
- HumanEvalX: `data/transmap/tests/evalex/humanevalx`

Each benchmark contains the following files:

- `injects.json` List of mistakes and patches. 
- `target.fixed.js` Fixed translation.  target.js.run.json
- `target.js` translated program with mistakes.
- `source.py` source program.
- `source_test.py` test wrapper for source program.
- `target_test.js` test wrapper for the translated program.

Please see the section `Step-by-Step Instructions for A and B` below for how to run the experiments.

### B. Source Mapping Accuracy

We evaluate source mapping accuracy from two aspects:

- Source Mapping Accuracy on Micro Benchmarks: Same files as above.
- Source Mapping Accuracy under different styles of code: `data/transmap/codemap/`

Please see the section `Step-by-Step Instructions for A and B` below for how to run the experiments.

### C. Case Studies

There are 5 Python modules used for the case study. Some lengthy programs are split into multiple files. The case studies are at:

- Python modules used for case studies: `data/transmap/tests/evalex/real/*`
- Python code to translate them and generate source maps: `data/transmap/cases/*.py`

Please refer to [CASESTUDY](./CASESTUDY.md) for details.

### D. User Study

There are 8 short programs and 4 long code segments used for a user study with 24 participants. 

Please refer to [USERSTUDY](./USERSTUDY.md) for details.

## Step-by-Step Instructions for A and B

### **Step 1: Start TransMap services**

Please refer to [INSTALLATION](./INSTALL.md).


### **Step 2: Evaluate TransMap and Baseline Approaches on 3 sets of Micro Benchmarks, export generated source maps**

First follow Step 1 to open one and exactly one web page of TransMap Prototyping Library. Then, open the TransMap UI for micro-benchmarks (mentioned in Step 1). 


**LeetCode Benchmarks**

1. *Initialize.* Open TransMap UI (refer to Step 1). Choose `pre-leetcode` in the drop-down menu at the top.  Click `INIT & Load Bench IDs`.   

2. *Run TransMap and Baseline.* Click `AUTO-N` once to run all benchmarks.   
  **NOTE:** If you accidently click `AUTO-N` twice, two concurrent scripts will conflict and the results will be messed up. However, you can simply reload the webpage and start again to overwrite.
3. *Export Generated Source Maps.* Click `AUTO-MAP-N` once to export all generated source maps.   
  **NOTE:** Similarly, please click it only once.


The evaluation results (TransMap and baseline) are saved to `data/transmap/tests/tempex/dynamic/leetcode/py_js_codex0err`. 

The 

**GFG Benchmarks**  

    Open or reload TransMap UI (refer to Step 1). Choose `pre-gfg` in the drop-down menu at the top. Click `INIT & Load Bench IDs`. Click `AUTO-N` once to run all benchmarks.

    The outputs (for both TransMap and the baseline approach) are saved to `data/transmap/tests/tempex/dynamic/baseline/gfg/py_js_codex0err`.

**HumanEvalX benchmarks**

    Open or reload TransMap UI (refer to Step 1). Choose `pre-humanevalx` in the dropdown menu at the top. Click `INIT & Load Bench IDs`. Click `AUTO-N` once to run all benchmarks.

    The outputs are saved to `data/transmap/tests/tempex/dynamic/humanevalx/py_js_codex0err`.

### **Step 3: Collect the Benchmark Statistics and Evalation Results for TransMap and the Baseline Approach**

1. Results Collection.

    TODO

2. Compute Statistics.

    TODO

### **Step 4: Validate Source Map Generations for Micro-benchmarks**


### **Step 5: Additional Source Mapping Experiments**

For additional experiments, the scripts are provided in `data/transmap/codemap/`.  

- `cm_0_shuffle_copy.py`: to copy micro-benchmark programs to the current folder for further steps.
- `cm_script*.py`: to generate different styles of translations.
- `cm_1_mapall.py`: to get the source mapping for all styles of translations.
- `cm_3_counterr.py`: to perform sanity checks on the source mapping.
5. We manually inspect all the cases that failed sanity checks to classify them into 3 types of failures.
6. We use `stats.ipynb` to compute the statistics.

## Repo Structure

TransMap's core logic is implemented in JavaScript while necessary file access and program execution are delegated by Python backend. `TransMap` has a dependency named `LogViz` that is provided in a different tarball.

- `.devcontainer`: Resource for building development container
- `backend`
  - `file-server`: Delegate File I/O for TransMap
  - `test-server`: Delegate testing for TransMap
  - `codex-server`: Delegate Codex for TransMap
- `docker` Resource for building the images for TransMap
- `frontend`
  - `_api`: Wrapping backend APIs as functions in frontend
  - `_common`: Libraries for TransMap (tree-sitter)
  - `transmap`: TransMap Prototyping Library (core functionalities)
- `data`
  - `codemap`: related to the source mapping experiments
  - `tests/evalex/<gfg|leetcode|humanevalx>`: microbenchmarks
  - `tests/evalex/real`: case studies
  - `tests/tempex`: outputs of TransMap on microbenchmarks