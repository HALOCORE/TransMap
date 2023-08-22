# TransMap User Study

The details about the user study can be found in the paper, section 6.4. We provide the following files for the user study:

## Related Files    

- `data/transmap/user_study_cmp/user_data_ro`: The randomly selected cases (4 mistakes for long programs and 8 mistakes for short programs) for the user study.
- `data/transmap/user_study_cmp/Dockerfile`: The dockerfile for the `code-server` (the browser version of vscode, exposed at port 8080 of the docker container). Additionally, we installed debuggers and language server plugins to make it a standard IDE environment for coding and debugging Python and JavaScript programs. The control group uses a browser link to this web-based vscode as the only tool to debug the programs.

## User Study Results

- Due to privacy concerns, we will not release the operation logs for each of the human subjects during the user study. We only release the aggregated results and the code producing the results in the Jupyter Notebook at `automations/transmap/userstudy_results.ipynb`. However, since the raw data is not released, the notebook cannot be executed interactively.