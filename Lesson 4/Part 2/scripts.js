document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function (item) {
        const lightbox = item.querySelector(".lightbox");
        item.addEventListener("mouseenter", function () {
            lightbox.style.display = "block";
        });
        item.addEventListener("mouseleave", function () {
            lightbox.style.display = "none";
        });
        lightbox.addEventListener("click", function (e) {
            if (e.target.classList.contains("close") || e.target === this) {
                lightbox.style.display = "none";
            }
        });
    });
});