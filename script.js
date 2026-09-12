const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const closeButton = document.getElementById("closeButton");

openModal.onclick = function() {
    modal.style.display = "block";
};

closeModal.onclick = function() {
    modal.style.display = "none";
};

closeButton.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};