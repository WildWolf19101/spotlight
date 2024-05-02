const scrollProgress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const width = (scrollY / (bodyHeight - windowHeight)) * 100;
    scrollProgress.style.width = `${width}%`;
})