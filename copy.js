// Copy and paste in javascripts
function paste() {
  let pasteText = document.querySelector("#code-editor");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#cod").addEventListener("click", paste);
