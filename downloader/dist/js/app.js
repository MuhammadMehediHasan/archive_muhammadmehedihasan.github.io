var convertBtn = document.querySelector(".convert-button");
var urlInput = document.querySelector(".url-input");

convertBtn.addEventListener("click", () => {
  sendURL(urlInput.value);
});

function sendURL(URL) {
  //   fetch(`http://localhost:4000/download?url=${URL}`, {method: "GET"})
  //   .then(res => res.json())
  //   .then(json => console.log(json))

  window.location.href = `https://ytdldownloader.herokuapp.com/download?url=${URL}`;
}
