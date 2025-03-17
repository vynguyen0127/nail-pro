function openPopup(src) {
    document.getElementById("popupImg").src = src;
    document.getElementById("popup").style.display = "flex";
}

function closePopup(event) {
    let popup = document.getElementById("popup");
    if (event.target === popup || event.target.classList.contains('close')) {
        popup.style.display = "none";
    }
}