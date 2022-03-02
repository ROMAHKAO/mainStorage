var url = prompt("enter");
if (url) {
  fetch(url).then((response)=>response.text().then((code)=>eval(code)));
}
