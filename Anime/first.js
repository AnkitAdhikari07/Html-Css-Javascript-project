const arrows = document.querySelectorAll(".arrow");
const animeList = document.querySelectorAll(".anime-list");

arrows.forEach((arrow, i) =>{

    const itemNumber = animeList[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", ()=>{
        clickCounter++;

        if(itemNumber -(4+clickCounter) >= 0){
            animeList[i].style.transform = `translateX(${animeList[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
        }
        else{
            animeList[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    });

});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .anime-list-title,.anime-list-desc, .navbar, .navbar-container, .sidebar, .left-menu-icon, .toggle")

ball.addEventListener("click", ()=>{
    items.forEach(item =>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active")
})