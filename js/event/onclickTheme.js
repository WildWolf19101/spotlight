const btnTheme = document.querySelector(".actions-toggle");
const logoImgs = document.querySelectorAll(".logo-image");
const footerSubContent = document.querySelector(".footer-subscribes");

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

    // footer sub Content
    if (footerSubContent.classList.contains("is-theme")) {
        footerSubContent.classList.remove("is-theme");
    } else {
        footerSubContent.classList.add("is-theme");
    }

    // toggle theme
    toggle.classList.toggle("active");


}

btnTheme && btnTheme.addEventListener("click", toggleTheme);