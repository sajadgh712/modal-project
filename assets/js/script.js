let btnModal = document.querySelector("button");
let modal = document.querySelector(".modal-parent");
let closeModalBtn = document.querySelector(".X");
let sectionElem = document.querySelector("section");


btnModal.addEventListener("click", function(){
    modal.style.display = "block"
    sectionElem.style.filter = "blur(10px)"
})

closeModalBtn.addEventListener("click" , function(){
    modal.style.display = "none"
    sectionElem.style.filter = "blur(0px)"
})

function closeModalWithEsc (event) {
    if (event.keyCode === 27) {
        modal.style.display = "none"
    sectionElem.style.filter = "blur(0px)"
    }
}

document.body.addEventListener("keydown" , closeModalWithEsc)