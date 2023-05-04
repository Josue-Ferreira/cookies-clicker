// h1 number of cookies update in title
const cookieTitle = document.querySelector(".cookie-title h1");
const cookiePSTitle = document.querySelector("#per-second");
cookieTitle.innerHTML = `${cookie.currentCookies} cookies`;
cookiePSTitle.innerHTML = `per second: ${cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies}`;

// cookie behavior - scale in and out on click
const cookieButton = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
    cookie.currentCookies++;
    cookie.clickedCookies++;
    
})

// change color of grandma icon on hover
const grandmaPicture = document.querySelector("#store-grandma img");
const grandmaBox = document.querySelector("#store-grandma");
grandmaBox.addEventListener("mouseover", () => {
    grandmaPicture.src = "pictures/grandma-primary.svg"
})
grandmaBox.addEventListener("mouseleave", () => {
    grandmaPicture.src = "pictures/grandma-secondary.svg"
})