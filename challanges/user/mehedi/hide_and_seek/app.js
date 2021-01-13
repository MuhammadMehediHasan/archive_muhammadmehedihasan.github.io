const app = document.querySelector("#app");

// initialization

function init() {
  const box = Array.from(document.querySelectorAll(".box"));
  box.forEach((e) =>
    e.addEventListener("click", (e) => {
      e.target.classList.toggle("hide");
      e.target.classList.toggle("show");
    })
  );
}

init();

// function hideText(str = "") {
//   let x = str.split("||");
//   let final = "";
//   let times = 0;
//   x.forEach((e) => {
//     if (!e) {

//       if (times === 0) {
//         final += `<span class="show box" >`;
//         times = 1;
//       } else if(times === 1) {
//         final += `</span>`;
//         times = 0;
//       }
//     } else {
//       final += e;
//     }
//   });

//   console.log(x)
//   console.log(final)
//   app.innerHTML = final;
//   init();
// }

function hideText(str = "", id) {
  let matched = str.match(/\|\|.+?\|\|/gi);
  let formate = [];
  var final = str;
  if(matched) {
  matched.forEach((e) => {
    formate.push(
      e.replace("||", '<span class="hide box">').replace("||", "</span>")
    );
  });

  // console.log(formate)
  // console.log(matched)

  matched.map((value, index) => {
    final = final.replace(value, formate[index]);
    // console.log(formate[index])
  });
}
  id.innerHTML = final;
  init()
}

const clear = (id) => {
  id.innerHTML = "";
  id.value = "";
};

// hideText(
//   `

// This is a test. And i want to hide || this ||.
// My Username is: Demo and password is: ||I got you||

// `,
//   app
// );

let input = document.getElementById('input')
document.addEventListener("keypress", (e) => {
  if(e.keyCode === 13) {
    hideText(input.value,app)
    clear(input)
  }
})