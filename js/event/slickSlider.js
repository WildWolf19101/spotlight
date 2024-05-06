const card = document.querySelector(".card");
const arrCard = document.querySelectorAll(".card");
const cards = document.querySelector(".cards");
const prev = document.querySelector(".prev-slide-button");
const next = document.querySelector(".next-slide-button");

let cardIndex = 0;
let currentIndex = 0;
const numCards = arrCard.length; // số lượng card
const numVisibleCard = 4;   // số lượng in ra màn hình
const numGap = 3;

// Lấy giá trị
const gap = window.getComputedStyle(cards).getPropertyValue("gap");
const gapValue = parseFloat(gap);
const cardsWidth = cards.clientWidth;

// // tính toán
const sumWidthGap = gapValue * numGap;
const widthItem = ((cardsWidth - sumWidthGap) / numVisibleCard);
const width = widthItem + gapValue;

// đổ flex cho card
arrCard.forEach((card) => {
    card.style.flex = `1 0 ${widthItem}px`;
});

function showButton() {
    if (currentIndex === 0) {
        prev.style.display = "none";
    }
    if (currentIndex === numCards - numVisibleCard) {
        next.style.display = "none";
    }
}

// button
prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        cards.style.transform = `translateX(-${width * currentIndex}px)`;
    }

    showButton();
    next.style.display = "flex";
})

next.addEventListener("click", () => {
    if (currentIndex < numCards - numVisibleCard) {
        currentIndex++;
        cards.style.transform = `translateX(-${width * currentIndex}px)`;
    }
    showButton();
    prev.style.display = "flex";
})

showButton()
