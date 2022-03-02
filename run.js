var url = prompt("enter url");
if (url) {
  fetch(url).then((response) => response.text().then((code) => eval(code)))
}
