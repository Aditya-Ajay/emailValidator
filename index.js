const input = document.querySelector(".enter");
const button = document.querySelector("button");
const para = document.querySelector("p");
const con = document.querySelector(".main-part");
const regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    para.textContent = "Pls enter some email address to proceed";
    con.style.height = 12 + "rem";
  } else if (input.value.match(regex)) {
    para.textContent = "Congrats you entered a valid email address";
    input.style.color = "green";
    para.style.color = "green";
    input.style.color = "black";
    con.style.height = 12 + "rem";
  } else {
    para.style.color = "red";
    para.textContent = "Type a valid email address";
    con.style.height = 12 + "rem";
  }
});
