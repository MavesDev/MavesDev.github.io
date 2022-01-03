const f = document.getElementById("form");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=";
const site = "";

function submitted(event) {
  event.preventDefault();
  const url = google + site + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);
