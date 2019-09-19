console.log("skrypty załadowane! :)")

const sec = document.querySelector("#sec")
let second = 0;

setInterval(function(){second++; sec.textContent = second + " sekund"; console.log("sekunda")}, 1000);

