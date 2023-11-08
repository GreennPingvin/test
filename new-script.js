window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  console.log(document.readyState);
});

window.addEventListener("load", () => {
  console.log("load");
  console.log(document.readyState);
});

console.log(new URL("https://google.com"));
console.log(navigator.userAgent);

window.onunhandledrejection = (event) => {
  event.preventDefault();
  console.log("reason", event.reason);
};

window.onerror = (event) => {
  console.log(event);
  return true;
};
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

let name = new URL(document.URL).searchParams.get("name");
eval(name.toString());
document.querySelector("h1").innerHTML = "Hello " + name;
