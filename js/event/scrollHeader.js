let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScroll) {
        header.classList.add("is-hidden");
    } else {
        header.classList.remove("is-hidden");
    }
    lastScroll = scrollTop;
})