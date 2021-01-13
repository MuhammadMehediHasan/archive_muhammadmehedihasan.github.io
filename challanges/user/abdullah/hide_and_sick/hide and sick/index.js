var div = document.querySelector('#printer');
var splited;
var store = [];
var last_value = "";

function hide_and_sick(value) {
    splited = value.split("");

    splited.forEach((a , b) => {
        if ( a =="|" && splited[b+1] == "|" && splited[b+2] != "|" ){
            store.push(b);
        }
    });
    store.forEach(function(a,b){
        if (b%2 == 0){
            splited[a] = "<span class='hide' onclick='toggle(this)'>";
            splited[a+1] = "";
        }else {
            splited[a] = "</span>";
            splited[a+1] = "";
        }
    })

    last_value = splited.join("");

    div.innerHTML = last_value;
    splited = [];
    store = [];
    last_value = "";
};

function toggle(element) {
    element.classList.toggle('hide');
}