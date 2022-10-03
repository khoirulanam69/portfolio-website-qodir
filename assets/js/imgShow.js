const modal = document.getElementById("imgModal");
const imgs = document.querySelectorAll(".project img");
const modalImg = document.getElementById("img01");

imgs.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    })
});

const span = document.querySelector(".projects .close");

span.onclick = function () {
    modal.style.display = "none";
}