"use strict";


function toggle_display_none(elem_id) {
  console.log("toggle_display_none: ", elem_id, document.getElementById(elem_id).style.display);
  if (document.getElementById(elem_id).style.display == "none") {
    document.getElementById(elem_id).style.display = "block";
  }
  else {
    document.getElementById(elem_id).style.display = "none";
  }
}

(async () => {
  ////////////////////////////////////////////////////////
  document.getElementById("explain-zone").innerText = "Checking for existance of loaded page..."
  let start_time = new Date().getTime();
  let _unique_bus = new BroadcastChannel('UNIQUE_BUS');
  setInterval(() => {
    // send a message to the broadcast channel every second
    _unique_bus.postMessage({start_time: start_time});
  }, 1000);
  // listen to messages for 2 seconds. If a message is received with a smaller start_time,
  // warn the user to close the tab.
  let _unique_resolve, _unique_reject;
  let _promise = new Promise((resolve, reject) => {
    _unique_resolve = resolve;
    _unique_reject = reject;
  });
  setTimeout(() => {
    _unique_resolve();
  }, 2000);
  _unique_bus.onmessage = (event) => {
    let data = event.data;
    if (data.start_time < start_time) {
      alert("You have another tab open. Please close the current tab!");
      _unique_reject();
      _unique_bus.close();
      document.getElementById("explain-zone").innerText = "Please close this tab to avoid conflicts with already loaded TransMap Proto Library.";
    }
  };
  await _promise;
  ////////////////////////////////////////////////////////

  window._DEBUG_BUS_ENABLED = true;

  logvizCreateProtoDashboard({
    html_elem: document.getElementById("main-zone")
  });

  let text = await getAsync("", "./index_evalex_proto.explain.md");
  var converter = new showdown.Converter();
  let html = converter.makeHtml(text);
  html = html.replace(/<a href=/g, '<a target="_blank" href=');
  document.getElementById("explain-zone").innerHTML = html;

  toast_info("Loaded.");
  setTimeout(() => {
    update_user_id_ui();
  }, 50);

})();