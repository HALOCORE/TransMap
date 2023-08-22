window._TS_LANGUAGE_BASE_URL = "../_common/tree-sitter/lang/";
window._TS_LANG_TO_SUFFIX = {
  "py": "python",
  "js": "javascript",
  "go": "go",
  "java": "java"
}
window.__TS_PARSER_CACHE = null;

async function _get_ts_parser_async(lang) {
  if (window.__TS_PARSER_CACHE === null) {
    window.__TS_PARSER_CACHE = {};
    await TreeSitter.init();
  }
  if (typeof lang !== "string") throw Error("Expecting lang to be string");
  if (lang in window.__TS_PARSER_CACHE) return window.__TS_PARSER_CACHE[lang];
  else {
    let parser = new TreeSitter();
    let filename_suffix = window._TS_LANG_TO_SUFFIX[lang];
    const url = `${window._TS_LANGUAGE_BASE_URL}/tree-sitter-${filename_suffix}.wasm`
    let lang_module = null;  
    try {
      lang_module = await TreeSitter.Language.load(url);
    } catch (e) {
      console.error(e);
      throw Error("My-Tree-Sitter Failed to load language: " + lang);
    } 
    parser.setLanguage(lang_module);
    parser.setLogger(null);
    window.__TS_PARSER_CACHE[lang] = parser;
    return parser;
  }
}

async function myTreeSitterParseSexprAsync(text, lang) {
  if (true) {
    let parser = await _get_ts_parser_async(lang);
    let oldTree = null;
    const tree = parser.parse(text, oldTree);
    let sexp = tree.rootNode.toString();
    if (tree) tree.delete();
    return sexp;
  } else {
    throw Error("my-tree-sitter Parse Not implemented");
  }
}


async function myTreeSitterParseASTAsync(text, lang) {
  if (true) {
    let parser = await _get_ts_parser_async(lang);
    let oldTree = null;
    const tree = parser.parse(text, oldTree);
    
    function traverse(tree, fn_before, fn_visit, fn_after) {
      function _traverse(node) {
        fn_before(node);
        fn_visit(node);
        for (let child of node.children) {
          _traverse(child);
        }
        fn_after(node);
      }
      _traverse(tree.rootNode);
    }
    let current_node_idx = 0;
    let map_info = {};
    let extra_root = [];
    let ast_scope_stack = [extra_root];
    function add_id(node) {
      map_info[current_node_idx] = _node_to_pos(node);
      current_node_idx += 1;
      return current_node_idx - 1;
    }
    function fn_before(node) {
      //nop
    }
    function fn_visit(node) { 
      if (node.isNamed()) {
        let sub_ast_list = [];
        ast_scope_stack.at(-1).push(sub_ast_list);
        ast_scope_stack.push(sub_ast_list);
        let elem = lang + "." + node.type;
        sub_ast_list.push(elem);

        let new_id = add_id(node);
        sub_ast_list.push(new_id);

        //anno ignored
        if (node.children.length === 0) {
          elem = JSON.stringify(text.slice(node.startIndex, node.endIndex));
          sub_ast_list.push(elem);
        }
      } else {
        let elem = JSON.stringify(node.type);
        ast_scope_stack.at(-1).push(elem);
      }
    }
    function fn_after(node) {
      if (node.isNamed() === false) return;
      ast_scope_stack.pop();
    }
    traverse(tree, fn_before, fn_visit, fn_after);
    if (ast_scope_stack.length !== 1) throw Error("Unexpected ast_scope_stack");
    if (extra_root.length !== 1) throw Error("Unexpected extra_root");
    result = [extra_root, map_info];

    if (tree) tree.delete();
    return result;
  } else {
    throw Error("Not implemented! (ast parse)");
  }
}

function _node_to_pos(node) {
  return [
    node.startIndex, node.endIndex,
    [node.startPosition.row, node.startPosition.column],
    [node.endPosition.row, node.endPosition.column]
  ];
}

async function myTreeSitterQueriesAsync(lang, text, query_dict, is_grouped = false) {
  let parser = await _get_ts_parser_async(lang);
  let oldTree = null;
  const tree = parser.parse(text, oldTree);
  function _cleanup_tree() {
    if (tree && !tree.deleted) { tree.delete(); tree.deleted = true; }
  } 
  let query_result = {};
  try {
    let query = null;
    function _cleanup_query() {
      if (query && !query.deleted) { query.delete(); query.deleted = true; }
    }
    for (let query_str in query_dict) {
      try {
        //create query
        try {
          query = parser.getLanguage().query(query_str);
          if (query === null) throw Error("Unexpected. query is null");
        } catch (error) {
          console.error("Failed to create query: " + error);
          throw error;
        }
        //run query and parse
        if (is_grouped) {
          const matches = query.matches(
            tree.rootNode,
            // {row: startRow, column: startColumn},
            // {row: endRow, column: endColumn},
          );
          query_result[query_str] = [];
          for (let match of matches) {
            let {pattern, captures} = match;
            query_result[query_str].push({
              "pat_idx": pattern,
              "caps": captures.map(x => [x.name, x.node.type, _node_to_pos(x.node)])
            });
          }
        } else {
          const captures = query.captures(
            tree.rootNode,
            // {row: startRow, column: startColumn},
            // {row: endRow, column: endColumn},
          );
          query_result[query_str] = [];
          // add dedup logic
          let capture_nid_dict = {};
          for (let x of captures) {
            if(x.node.id in capture_nid_dict) continue;
            query_result[query_str].push(
              [x.name, x.node.type, _node_to_pos(x.node)]
            );
            capture_nid_dict[x.node.id] = true;
          }
        }
      } catch (e) {
        throw e;
      } finally {
        _cleanup_query();
      }
    }
    return query_result;
  } catch(e) {
    throw e;
  } finally {
    _cleanup_tree();
  }
}
