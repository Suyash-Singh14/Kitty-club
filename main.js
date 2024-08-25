const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".container")

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
})

