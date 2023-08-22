
////////////////////// debug ui stuff
async function aggregateAsync(configurations, processor_params, default_item_ids) {
  /*
  [
    {
      "agg_key": xx,
      "agg_type": "EACH", "TABULAR", "SCALAR",
      "require": [<agg_key>+],
      "map_processor"?: (required_data) => agg_data,
      "scalar_processor"?: xxx,
      "tabular_columns"?: [xxx]
    }
  ]
  */
 let agg_result = {};
 function __requirement_extractor(item_id, requirements) {
  let extracted = {};
  for (let agg_key of requirements) {
    //get agg info for item_id in agg_result
    let agg_pack = agg_result[agg_key];
    let agg_type = agg_pack["agg_type"];
    if (agg_type === "EACH" || agg_type === "SPLIT" || agg_type === "DISTRIBUTE") {
      let agg_dict = agg_pack["dict"];
      let item_info = agg_dict[item_id];
      extracted[agg_key] = item_info;
    } else if (agg_type === "TABULAR") {
      let tabular = agg_pack["tabular"];
      let tabular_data = tabular["tabular_data"];
      let item_info = tabular_data[item_id];
      extracted[agg_key] = item_info;
    } else if (agg_type === "SCALAR") {
      extracted[agg_key] = agg_pack["scalar"]; // not tested
    } else {
      throw Error("Unknown agg_type: " + agg_type);
    }
  }
  return extracted;
 }
 for (let configuration of configurations) {
  let {agg_key, agg_type, require, using_alt_ids} = configuration;
  let item_ids = default_item_ids;
  if (using_alt_ids !== null && using_alt_ids !== undefined) {
    item_ids = agg_result[using_alt_ids]["alt_ids"];
  }
  if (agg_type === "EACH") {
    let {map_processor} = configuration;
    let items_agg_dict = {};
    for (let x of item_ids) {
      let item_result = await map_processor(x, __requirement_extractor(x, require), processor_params);
      items_agg_dict[x] = item_result;
    }
    agg_result[agg_key] = {
      "agg_type": agg_type, 
      "dict": items_agg_dict
    };
  } else if (agg_type === "SPLIT") {
    let {split_processor} = configuration;
    let item_agg_dict = {};
    let alt_ids = [];
    for (let x of item_ids) {
      let splitted_results = await split_processor(x, __requirement_extractor(x, require), processor_params);
      for (let splitted of splitted_results) {
        let {id, data} = splitted;
        if (id === null || id === undefined) throw Error("Invalid id from SPLIT processor: id=" + id);
        item_agg_dict[id] = data;
        alt_ids.push(id);
      }
    }
    agg_result[agg_key] = {
      "agg_type": agg_type,
      "dict": item_agg_dict,
      "alt_ids": alt_ids
    };
  } else if (agg_type === "TABULAR") {
    let {map_processor, tabular_columns} = configuration;
    let row_ids = item_ids;
    let column_ids = tabular_columns;
    let tabular_data = {};
    for (let x of item_ids) {
      let item_result = await map_processor(x, __requirement_extractor(x, require), processor_params);
      tabular_data[x] = item_result;
    }
    agg_result[agg_key] = {
      "agg_type": agg_type, 
      "tabular": {tabular_data, row_ids, column_ids},
    };
  } else if (agg_type === "DISTRIBUTE") {
    let {distr_processor} = configuration;
    let items_requirement_dict = {};
    for (let x of item_ids) {
      items_requirement_dict[x] = __requirement_extractor(x, require);
    }
    agg_result[agg_key] = {
      "agg_type": "DISTRIBUTE",
      "dict": await distr_processor(items_requirement_dict, processor_params)
    };
  } else if (agg_type === "SCALAR") {
    let {scalar_processor} = configuration;
    let items_requirement_dict = {};
    for (let x of item_ids) {
      items_requirement_dict[x] = __requirement_extractor(x, require);
    }
    agg_result[agg_key] = {
      "agg_type": agg_type,
      "scalar": await scalar_processor(items_requirement_dict, processor_params)
    };
  } else {
    throw Error("Unknown agg type: " + agg_type);
  }
 }
 return agg_result;
}