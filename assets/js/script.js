let container = document.querySelector(".container");
let header = document.querySelector("#header");
let cards = document.querySelector("#cards");
let question = document.querySelector("#question");
let choices = document.querySelector("#choices");

container.addEventListener("click", function(event) {
let start = event.target;

if (start.matches(".start")) {
    header.style.display = "none";
    cards.style.display = "block";
    question.style.display = "block";
    choices.style.display = "block"
    }

   // let state = header.getAttribute("data-state");
      // if (state === "visible") {

});


// container.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches(".box")) {
//       var state = element.getAttribute("data-state");
  
//       if (state === "hidden") {
//         element.textContent = element.dataset.number
//         element.dataset.state = "visible"
//       } else {
//         element.textContent = '';
//         element.setAttribute("data-state", "hidden")
//       }
//   }});