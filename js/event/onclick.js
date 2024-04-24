// onclick button search
{
    const buttonSearch = document.querySelector(".search");

    buttonSearch.addEventListener("click", (e) => {
        const templateForm = `
        <div class="form">
                <div class="form-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi ducimus consequatur praesentium
                        obcaecati. A sit ipsam culpa ipsum, tempora earum amet atque, velit eveniet deleniti dolor unde ab
                        commodi.
                    </p>
                </div>
            </div>
        `;

        console.log(e.target);
    })

}
