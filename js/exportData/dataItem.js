const endpoit = {
    hits: [
        {
            article_type: "Electronics",
            posts: [
                {
                    id: 1,
                    title: "Guide to Finding the Perfect High-Performance Laptop",
                    date: "Jun 20, 2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00007.webp"
                },
                {
                    id: 2,
                    title: "Enhance Your TV Experience: Understanding Display Technologies",
                    date: "Jun 20,2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00007.webp"
                },
                {
                    id: 3,
                    title: "Choosing the Right Camera: DSLR vs. Mirrorless",
                    date: "Jun 20,2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00008.webp"
                },
                {
                    id: 4,
                    title: "Unleashing the Potential of Drones",
                    date: "Jun 20,2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/Rectangle-15.webp"
                },
                {
                    id: 5,
                    title: "Ultimate Wireless Headphones for Every Audiophile",
                    date: "Jun 20,2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00004-1.webp"
                },
                {
                    id: 6,
                    title: "Transform Your Home with Smart Devices",
                    date: "Jun 20,2023",
                    image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/Rectangle-16--1-.webp"
                }
            ]
        },
        {
            article_type: "Trends",
            posts: [
                // {
                //     id: 1,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // },
                // {
                //     id: 2,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // },
                // {
                //     id: 3,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // },
                // {
                //     id: 4,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // },
                // {
                //     id: 5,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // },
                // {
                //     id: 6,
                //     title: "Quantum Computing: Power of the Subatomic",
                //     date: "Jun 20, 2023",
                //     image: "https://spotlight-modern.highfivethemes.com/content/images/size/w600/format/webp/2023/06/demo-image-00009.webp"
                // }
            ]
        }
    ]
}

const postfeed = document.querySelector(".postfeed");

function exportData(data) {
    if (typeof data != "object") return {};

    data?.hits.forEach(element => {

        if (element?.article_type != "") {
            const category = `
            <section class="topic-grid">
                <div class="topic-grid-head">
                    <a href="#">
                        <h2 class="topic-grid-name category-title">${element.article_type}</h2>
                    </a>
                    <a href="#" class="topic-grid-link">
                        <span>View
                            <span class="category-title">${element.article_type}</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 topic-grid-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
                <div class="topic-slider-wrapper">
                    <div class="product">
                        <div class="cards">
                        </div>
                    </div>
                    <button class="prev-slide-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 button-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button class="next-slide-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 button-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </section>`;
            postfeed.insertAdjacentHTML("beforeend", category.trim());
        }
        const posts = element?.posts;

        if (posts && posts.length > 0) {
            const cards = document.querySelectorAll(".cards");
            posts.forEach((value) => {
                const item = `
                <div class="card">
                    <a href="#" class="card-link">
                        <picture>
                            <source>
                            <img src=${value.image}
                                alt="image" class="card-image">
                        </picture>
                    </a>
                    <div class="card-content">
                        <div class="card-content-main">
                            <div class="card-tags">
                                <a href="#" class="card-tag">${element.article_type}</a>
                            </div>
                            <a href="#">
                                <h2 class="card-title">${value.title}</h2>
                            </a>
                        </div>
                        <div class="card-meta">Updated on <time datetime="2023-06-20">${value.date}</time>
                        </div>
                    </div>
                </div>
                `;

                cards.forEach((cardsItem) => {
                    cardsItem.insertAdjacentHTML("beforeend", item);
                })
            })
        }
        // if (posts && posts.length >= 4) {
        //     const sliderWrapper = document.querySelector(".topic-slider-wrapper");
        //     const button = `
        //     <button class="prev-slide-button">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //             stroke-width="1.5" stroke="currentColor" class="w-6 h-6 button-icon">
        //             <path stroke-linecap="round" stroke-linejoin="round"
        //                 d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        //         </svg>
        //     </button>
        //     <button class="next-slide-button">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //             stroke-width="1.5" stroke="currentColor" class="w-6 h-6 button-icon">
        //             <path stroke-linecap="round" stroke-linejoin="round"
        //                 d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        //         </svg>
        //     </button>
        //     `;
        //     sliderWrapper.insertAdjacentHTML("beforeend", button);
        // }
    });
}

exportData(endpoit);
