document.addEventListener('DOMContentLoaded', function() {
	
    const trigger = document.querySelector(".scrollDownBtn");

    const aproposCatch = document.querySelector(".catch");
    const aproposConclu = document.querySelector(".conclusion");
    const picture = document.querySelector(".aethius-pic");

    const aproposTitle = document.querySelector(".apropos_title");
    const aproposFooter = document.querySelector(".aside_footer");
    const articles = document.querySelector(".articles");
    const aside = document.querySelector("aside");

    trigger.addEventListener("click", function (event) {
        aside.firstElementChild.classList.remove("bubble");
        aproposCatch.classList.remove("catch");
        aproposConclu.classList.add("hidden");

        articles.classList.remove("hidden");
        aproposTitle.classList.remove("hidden");
        aproposFooter.classList.remove("hidden");
        picture.classList.add("pic-aside");

        aside.classList.add("a_propos");
    })
})