(async () => {
  ////////////////////////////////////////////////////////
  let text = await getAsync("", "./index_evalex_user.explain.md");
  var converter = new showdown.Converter();
  let html = converter.makeHtml(text);
  html = html.replace(/<a href=/g, '<a target="_blank" href=');
  document.getElementById("explain-zone").innerHTML = html;

  toast_info("Loaded.");
  setTimeout(() => {
    update_user_id_ui();
  }, 50);

})();