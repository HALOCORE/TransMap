
async function set_user_id_async() {
  // prompt user for user id
  let user_id = prompt("Please enter your user id", "");
  if (user_id == null || user_id == "") {
    toast_info("User id not set.");
  } else {
    // try to get user config
    try {
      let user_config_str = await anyfileAsync("transmap/user_study_cmp/user_data_rw/_configs/" + user_id + ".json");
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("user_config_str", user_config_str);
      localStorage.setItem("operation_log_str", "--- Operation Log ---");
    } catch (e) {
      toast_error("User id is not valid.");
      return;
    }
    toast_info("User id set to: " + user_id);
    try {
      await update_user_id_ui();
    } catch (e) {
      toast_error("Unexpected: Failed to update user id UI: " + e);
    }
  }
}

async function update_operation_log() {
  // save to backend
  let operation_log_str = localStorage.getItem("operation_log_str");
  if (operation_log_str == null) {
    console.warn("Operation log is empty.");
    return;
  }
  await appendAnyTextfileAsync("transmap/user_study_cmp/user_data_rw/_operation_log/" + localStorage.getItem("user_id") + ".txt", "\n--------\n" + operation_log_str);

  let operation_log = document.getElementById("operation-log");
  operation_log.innerText = operation_log_str;
  // scroll to bottom of operation_log
  operation_log.scrollTop = operation_log.scrollHeight;
}

function user_id_to_idx(user_id) {
  if (user_id.startsWith("user_")) {
    let user_num = parseInt(user_id.split("_")[1], 10);
    return user_num;
  } else if (user_id.startsWith("usera_")) {
    let user_num = parseInt(user_id.split("_")[1], 10);
    return user_num + 17;
  }
  else {
    toast_error("user_id_to_idx: user id not recognized: " + user_id);
    return -1;
  }
}

function to_string_with_leading_zero(num, len) {
  let num_str = num.toString();
  while (num_str.length < len) {
    num_str = "0" + num_str;
  }
  return num_str;
}

async function update_user_id_ui() {
  let user_id = localStorage.getItem("user_id");
  if (user_id == null) {
    toast_info("User id not set.");
    throw Error("User id not set.");
  }
  let user_config = JSON.parse(localStorage.getItem("user_config_str"));
  let uid = document.getElementById("user-id");
  uid.innerText = user_id;
  if (user_id !== user_config["user_id"]) {
    throw Error("User id mismatch: " + user_id + " vs " + user_config["user_id"]);
  }
  uid.innerText = user_id;
  let case_buttons_group = document.getElementById("case-buttons-group");
  case_buttons_group.innerHTML = "";
  let handler = async (e) => {
    let button_name = e.target.innerText;
    let current_log = localStorage.getItem("operation_log_str");
    // set 2 links
    let origin = window.location.origin;
    let first_part_of_origin = origin.split(".")[0];
    let protocol = window.location.protocol;
    let tmlv_origin = origin.replace(first_part_of_origin, "tmlog");
    let code_origin = origin.replace(first_part_of_origin, "codetm" + to_string_with_leading_zero(user_id_to_idx(user_id), 2));
    if (button_name.indexOf(" ") < 0) {
      let filename = null;
      for (let [s_case_name, s_filename] of user_config["ext_case_set"]) {
        if (s_case_name === button_name) {
          filename = s_filename;
        }
      }
      if (filename == null) {
        toast_error("Unexpected: filename not found for case: " + button_name);
        console.warn("button_name:", button_name, "user config:", user_config);
        return;
      }
      let tmlv_link = protocol + "//" + tmlv_origin + "/veryverynice/ui/logviz_viewer.html?query=com-transmex%3Adynamic_userstudy.ui&sprefix=com-transmex%3Adynamic_userstudy&sbar=disabled" + 
        `&dyn_user_id=${user_id}&dyn_bench_id=${button_name}&dyn_target_filename=${filename}`;
      let code_link = protocol + "//" + code_origin + "/?folder=/home/coder/case_study/" + button_name;
      if (document.getElementById("case-link-transmap")) {
        document.getElementById("case-link-transmap").href = tmlv_link;
        document.getElementById("case-link-transmap").innerText = "TransMap Link for " + button_name;
      }
      if (document.getElementById("case-link-vscode")) {
        document.getElementById("case-link-vscode").href = code_link;
        document.getElementById("case-link-vscode").innerText = "VSCode Link for " + button_name;
      }
    }
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const readableDateTime = date.toLocaleString(undefined, options);
    let new_line = "\nClicked " + button_name + " at " + readableDateTime + "(" + date.getTime() + ")";
    let new_log = current_log + new_line;
    localStorage.setItem("operation_log_str", new_log);
    await update_operation_log();
  };
  for (let [case_name, filename] of user_config["ext_case_set"]) {
    let button = document.createElement("button");
    button.type = "button";
    button.innerText = case_name;
    button.onclick = handler;
    case_buttons_group.appendChild(button);
  }
  let mark_button = document.createElement("button");
  mark_button.type = "button";
  mark_button.style.marginLeft = "10px";
  mark_button.innerText = "Mark Current Time";
  mark_button.onclick = handler;
  case_buttons_group.appendChild(mark_button);
  await update_operation_log();
}

