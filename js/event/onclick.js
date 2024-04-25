// onclick button search
{
    const btnSearch = document.querySelector(".search");
    const modal = document.querySelector("#form-modal");
    const formContent = document.querySelector(".form-content");

    btnSearch && btnSearch.addEventListener("click", function () {
        if (!modal) return;
        modal.classList.add("is-open");
    });

    modal && modal.addEventListener("click", function (event) {
        if (!modal) return;
        if (formContent && formContent.contains(event.target)) {
            return;
        }
        modal.classList.remove("is-open");

    });
}

// onclick button theme
{
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
}