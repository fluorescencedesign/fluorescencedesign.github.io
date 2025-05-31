var offset = 100;
function contactScroll() {
    document.getElementById("contact").scrollIntoView({
        behavior: 'smooth'
    });
}
function aboutScroll() {
    scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
}
function portfolioScroll() {
    scrollTo({top: document.getElementById("portfolio").offsetTop - offset, behavior: "smooth"});
}
function topScroll() {
    scrollTo({top: 0, behavior: "smooth"});
}

function openPortfolio() {
    window.open("https://richardj-lin.github.io/")
}
function openPortfolio1() {
    window.open("https://tsapulsar.github.io/")
}
function openPortfolio2() {
    window.open("https://youthhealthymind.com/")
}
function openPortfolio3() {
    window.open("https://thepowcenter.com/")
}
