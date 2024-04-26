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