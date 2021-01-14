var div = document.querySelector("#printer");
var input = document.querySelector("#input");
var splited;
var store = [];
var last_value = "";

input.addEventListener("keypress", function () {
  var main_text = this.value;
  if (event.keyCode == 13) {
    hide_and_sick(main_text);
    this.value = "";
  }
});

function hide_and_sick(value) {
  splited = value.split("");

  splited.forEach((a, b) => {
    if (a == "|" && splited[b + 1] == "|" && splited[b + 2] != "|") {
      store.push(b);
    }
  });
  store.forEach(function (a, b) {
    if (b % 2 == 0) {
      splited[a] = "<span id='hider' class='hide' onclick='toggle(this)'>";
      splited[a + 1] = "";
    } else {
      splited[a] = "</span>";
      splited[a + 1] = "";
    }
  });

  last_value = splited.join("");

  div.innerHTML = last_value;
  splited = [];
  store = [];
  last_value = "";
}

function toggle(element) {
  element.classList.toggle("hide");
}
