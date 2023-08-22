"use strict";

//setup broadcast channel
window._LOGVIZ_DEBUG_BUS = new BroadcastChannel('DEBUG_BUS');
window._LOGVIZ_DEBUG_BUS_REGISTRY = {};
window._LOGVIZ_DEBUG_BUS_REGISTRY_STATS = {};
window._LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY = {};
window._LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS = {};
window._LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY = {};

let ticket_idx = 0;
function create_ticket(msg_type) {
  ticket_idx += 1;
  return msg_type + ":" + ticket_idx;
}

_LOGVIZ_DEBUG_BUS.onmessage = async function (event) { 
  if (!window._DEBUG_BUS_ENABLED) return;
  let data = event.data;
  let {msg, msg_type, msg_id} = data;
  if (msg_id !== undefined) console.log("[DEBUG_BUS => Connector]", data);
  else { console.warn("[DEBUG_BUS => Connector][unknown msg]", data); return; }
  if (msg_type in _LOGVIZ_DEBUG_BUS_REGISTRY) {
    if (!(msg_type in _LOGVIZ_DEBUG_BUS_REGISTRY_STATS)) {
      _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[msg_type] = {"call_count": 0, "succ_count": 0, "err_count": 0, "last_err": null};
    }
    _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[msg_type]["call_count"] += 1;
    try {
      let resp = await _LOGVIZ_DEBUG_BUS_REGISTRY[msg_type](msg);
      _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": msg_id, "resp": resp});
      _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[msg_type]["succ_count"] += 1;
    } catch (e) {
      let err_str = String(e);
      _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": msg_id, "error": err_str});
      _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[msg_type]["err_count"] += 1;
      _LOGVIZ_DEBUG_BUS_REGISTRY_STATS[msg_type]["last_err"] = err_str;
      console.error(e);
    }
  }
  else if (msg_type in _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY) {
    if (!(msg_type in _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS)) {
      _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[msg_type] = {"call_count": 0, "succ_count": 0, "err_count": 0, "last_err": null};
    }
    _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[msg_type]["call_count"] += 1;

    //create a reactor from meta registry
    let reactive_func = _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY[msg_type];
    let ticket = create_ticket(msg_type);
    _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket] = {resolver: null, last_msg_id: msg_id};
    //this function is used for reactive func to send data to ui and get further response.
    //steps: 
    //  1. create the next message handler function and set in REACTIVE_REGISTRY
    //  2. post the `rx_req` (as response)
    //  3. wait for promise to be resolved
    // this is called as a "response" (rx_request) to last "request" (rx_response).
    async function req_resolver (rx_req) {
      // create promise that will be resolved when get resp with the ticket
      return new Promise((resolve, reject) => {
        _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket]["resolver"] = resolve;
        _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket]["rejector"] = reject;
        let last_msg_id = _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket]["last_msg_id"];
        _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": last_msg_id, "resp": {"rx_ticket": ticket, "rx_req": rx_req}});
        if (rx_req["rx_req_type"] === "DONE") {
          delete _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket];
          resolve();
        }
      });
    }

    async function error_callback(error_msg) {
      let last_msg_id = _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket]["last_msg_id"];
      delete _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[ticket];
      _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": last_msg_id, "error": error_msg});
    }

    try {    
      await reactive_func(req_resolver);
      await req_resolver({"rx_req_type": "DONE"});
      _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[msg_type]["succ_count"] += 1;
    } catch (e) {
      console.error("Reactive func throw exception: ", e);
      let err_msg = String(e);
      await error_callback("App-Reactor Terminated: " + err_msg);
      _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[msg_type]["err_count"] += 1;
      _LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY_STATS[msg_type]["last_err"] = err_msg;
    }
  }
  else if (msg_type in _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY) {
    let rx_ticket = msg_type;
    let resolve = null, reject = null;
    try {
      // update last_msg_id, then resolve resp so that reactor continue execution
      let ticket_pack = _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[rx_ticket]; // this is `rx_resp`
      resolve = ticket_pack["resolver"];
      reject = ticket_pack["rejector"];
      _LOGVIZ_DEBUG_BUS_REACTIVE_TICKET_REGISTRY[rx_ticket]["last_msg_id"] = msg_id;
      let {rx_resp_type} = msg;
      if (rx_resp_type === "ERROR") reject(msg["error_msg"]);
      else resolve(msg);
    } catch (e) {
      _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": msg_id, "error": String(e)});
      console.error(e);
      if (reject !== null) {
        console.log("Propagate error...");
        reject(e);
      }
    }
    //TODO: create resolve/reject for the next phrase
    
  }
  else {
    let error_msg = "Unsupported msg_type: " + msg_type + ". Not found in registry.";
    toast_error(error_msg);
    _LOGVIZ_DEBUG_BUS.postMessage({"resp_id": msg_id, "error": error_msg});
    throw Error(error_msg);
  }
} 


function rx_func_gen(resolver_asyncf) {
  async function get_val_async(key) {
    return await resolver_asyncf({"rx_req_type": "GET_VAL", "key": key});
  }
  async function set_val_async(key, val) {
    return await resolver_asyncf({"rx_req_type": "SET_VAL", "key": key, "val": val});
  }
  async function automation_async(auto_key) {
    return await resolver_asyncf({"rx_req_type": "TRIGGER_AUTOMATION", "auto_key": auto_key});
  }
  async function button_async(bkey) {
    return await resolver_asyncf({"rx_req_type": "TRIGGER_BUTTON", "bkey": bkey});
  }
  return {
    get_val_async, set_val_async,
    automation_async, button_async
  };
}


