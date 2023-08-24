## TransMap Prototype Library 

**NOTE:** Please keep only <span style="color:orangered">one browser tab</span> of this (TransMap Prototype Library) open.

**NOTE:** The presented materials are for the purpose of the user study only. They are from a paper under review. <span style="color:orangered">Please keep them confidential.</span>

### Links to User Study Webpages

<button onclick="set_user_id_async()">Set User ID</button>
<span id="user-id"></span>
<p id="case-buttons-group">
</p>
<p><a id="case-link-transmap" class="caselink" target="_blank" href=""></a></p>
<p><a id="case-link-vscode" class="caselink" target="_blank" href=""></a></p>
<pre id="operation-log"></pre>

### What is TransMap?

`TransMap` is a tool to pinpoint **semantic mistakes** in neural code translation by large language models such as Codex or chatGPT.

Neural code translation can introduce all kinds of mistakes:

- **A. Syntax mistakes**. Can be easily detected by a compiler or a linter.
- **B. Semantic mistakes**. 
    - **B.1 Causing Runtime Errors at Mistake Locations**. Can be located by testing.
    - **<span style="color:red;">B.2 Causing Runtime Errors at Other Locations</span>**. Cannot be directly located by testing.
    - **<span style="color:red;">B.3 Not Causing Runtime Errors</span>**. Cannot be located by testing.

While syntax checking and testing might be able to locate mistakes from categories **A** and **B.1**, they are not be able to locate mistakes from categories **B.2** and **B.3**.  
`TransMap` focuses on locating mistakes from categories **B.2** and **B.3**.

It does so by performing the following steps:  
- **Step 1**: Create an accurate source map automatically from the translated code lines to the source code lines.  
- **Step 2**: Mark all the translated code lines as *suspicious* (i.e., potentially containing mistakes).  
- **Step 3**: Perform tracing on the part of the source code and the translated code that are *suspicious*, and compare the traces to shrink down set of *suspicious* lines.  
- **Step 4**: Repeat **Step 3** until the set of *suspicious* lines cannot be shrunk down further.  

<!-- An example screenshot of `TransMap` is shown below:  
<img src="./index_evalex_proto_assets/transmap-ui.png" style="zoom:70%;" /> -->

### How to use TransMap?

We will explain the usage of TransMap using two tutorial programs: `tut_0` and `tut_1`. 
For details, please refer to the [User Study Guidelines](https://docs.google.com/presentation/d/1g2f4flkJLriU08R3oi-ImLNjn_nm338ilCWD4qzUa34/edit?usp=sharing).  
You can use TransMap and vscode together. For example, use TransMap to locate the bug and then use vscode debuggers to understand the bug more deeply.

<!-- for pure vscode, [vscode guidelines](https://docs.google.com/presentation/d/1zvoQ2daM8T_k-ab55e4EgOSqiC9DP-A1mequEn0ge3w/edit?usp=sharing). -->



### What are you expected to do for the user study?

You are expected to use `TransMap` to locate mistakes in the code and fix it so that it can passes the tests.   
To simplify the task, there will be only one hidden semantic mistake in the code.   
For details, please refer to the [User Study Guidelines](https://docs.google.com/presentation/d/1g2f4flkJLriU08R3oi-ImLNjn_nm338ilCWD4qzUa34/edit?usp=sharing).   

**NOTE:** Please do record the time taken for each task:  
- How long does it take you to locate the mistake?
<!-- - How long does it take you to understand the the mistake? -->
- How long does it take you to fix the mistake?

You can use the `Mark Current Time` buttons above and compute the duration later.

------

### (For Developers Only) Library Function Monitor

**For TransMap developers only, to debug TransMap itself.**    
Click the `Show / Hide ...` button to show or hide the monitor.   
Once the monitor is visible, click anywhere below to update the monitor view.   
