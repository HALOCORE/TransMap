"use strict";

function logvizCreateProtoDashboard(config) {
  let {html_elem} = config;
  function __rerender() {
    let jml_func_reg = ["div.func-box"];
    let jml_rx_reg = ["div.rx-box"];
    for (let k in _LOGVIZ_DEBUG_BUS_REGISTRY) {
      jml_func_reg.push([
        "div.func-item", 
        ["span.func-key", String(k)], 
        ...["call_count", "succ_count", "err_count", "last_err"].map(stat => k in _LOGVIZ_DEBUG_BUS_REGISTRY_STATS ? ["span.func-" + stat, stat + ": " + _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[k][stat]] : "")
      ]);
    }
    for (let k in _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY) {
      jml_rx_reg.push([
        "div.rx-item", 
        ["span.rx-key", String(k)], 
        ...["call_count", "succ_count", "err_count", "last_err"].map(stat => k in _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS ? ["span.rx-" + stat, stat + ": " + _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[k][stat]] : "")
      ]);
    }
    let jml_root = ["div.proto-dashboard", {onclick: __rerender}, jml_rx_reg, jml_func_reg];
    IncrementalDOM.patch(html_elem, jsonml2idom, jml_root);
    console.log("Proto Dashboard Rerendered.");
  }
  __rerender();
  console.log('_LOGVIZ_DEBUG_BUS_REGISTRY:', _LOGVIZ_DEBUG_BUS_REGISTRY);
  console.log('_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY:', _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY);
  console.log("createProtoDashboard called");
}