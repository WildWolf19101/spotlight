const btnTheme = document.querySelector(".actions-toggle");
const logoImgs = document.querySelectorAll(".logo-image");

const toggle = document.querySelector(".actions-toggle-circle");

function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // logo image
    logoImgs.forEach((img) => {
        if (img.classList.contains("active")) {
            img.classList.remove("active");
        } else {
            img.classList.add("active");
        }
    })

    // toggle theme
    toggle.classList.toggle("active");
}

btnTheme && btnTheme.addEventListener("click", toggleTheme);