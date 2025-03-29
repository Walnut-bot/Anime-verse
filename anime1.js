document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: 320, behavior: "smooth" });
    });
});

        