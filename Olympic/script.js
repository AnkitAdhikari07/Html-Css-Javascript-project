const panels = document.querySelectorAll(".panel");
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function (){
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

panels.forEach((panel) =>{
    panel.addEventListener("click", () =>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () =>{
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    });
};