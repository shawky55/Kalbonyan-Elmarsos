'use strict';
let btns = document.querySelectorAll('.show-modal');
let closeButton = document.querySelector('.close-modal');
let overlay = document.querySelector(".overlay");
let model = document.querySelector(".modal");
let openModel = function() {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden")

};
btns.forEach(btn => {
    btn.addEventListener('click', openModel)
})


let closeModel = function() {
    model.classList.add("hidden")
    overlay.classList.add("hidden")
};
document.addEventListener("keydown", function(e) {
    if (e.key == "Escape") {
        closeModel();
    }
})

closeButton.addEventListener('click', closeModel)
overlay.addEventListener('click', closeModel)