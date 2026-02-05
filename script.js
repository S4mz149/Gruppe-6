function openDiscord() {
    window.open("https://discord.gg/CSCppSPYWS", "_blank");
}

const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            element.classList.add("visible");
        }
    });
});