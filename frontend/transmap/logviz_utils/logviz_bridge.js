let _DEBUG_BUS = new BroadcastChannel('DEBUG_BUS');
let _DEBUG_BUS_MSG_RESOLVER = {};
let _DEBUG_BUS_MSG_REJECTOR = {};
_DEBUG_BUS.onmessage = function (event) { 
  let data = event.data;
  let {resp, error, resp_id} = data;
  if (resp_id === undefined) return; 
  if (error !== null && error !== undefined) {
    if (resp_id in _DEBUG_BUS_MSG_REJECTOR) {
      console.log("[DEBUG_BUS => bridge][error]", data);
      _DEBUG_BUS_MSG_REJECTOR[resp_id](error);
      delete _DEBUG_BUS_MSG_RESOLVER[resp_id];
      delete _DEBUG_BUS_MSG_REJECTOR[resp_id];
    }
    else {
      console.log("[DEBUG_BUS => bridge][SKIP] Unknown resp_id (err): " + resp_id);
    }
  }
  else {
    if (resp_id in _DEBUG_BUS_MSG_RESOLVER) {
      console.log("[DEBUG_BUS => bridge][resp]", data);
      _DEBUG_BUS_MSG_RESOLVER[resp_id](resp);
      delete _DEBUG_BUS_MSG_RESOLVER[resp_id];
      delete _DEBUG_BUS_MSG_REJECTOR[resp_id];
    }
    else {
      console.log("[DEBUG_BUS => bridge][SKIP] Unknown resp_id (resp): " + resp_id);
    }
  }
} 

window.addEventListener("message", async (event) => {
  let data = event.data;
  console.log("[bridge => DEBUG_BUS]", data);
  _DEBUG_BUS.postMessage(data); 
  let {msg_id} = data;
  try {
    let resp = await new Promise((reso, rej) => {
      _DEBUG_BUS_MSG_RESOLVER[msg_id] = reso;
      _DEBUG_BUS_MSG_REJECTOR[msg_id] = rej;
    });
    event.source.window.postMessage({resp_id: msg_id, resp: resp}, event.origin);
  } catch (e) {
    event.source.window.postMessage({resp_id: msg_id, error: e}, event.origin);
  }
});


console.log("========================= LogViz bridge LOADED =========================");