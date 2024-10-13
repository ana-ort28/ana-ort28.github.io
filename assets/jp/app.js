const scrollUP = document.querySelector("#scroll-up");

scrollUP.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0, // Cambia '=' por ':' aquí
        behavior: "smooth",
    });
});
