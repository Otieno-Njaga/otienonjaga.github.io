//script.js menu toggle
document.addEventListener("DOMContentLoaded",function(){
    const menuToggle=document.querySelector(".menu-toggle");
    const nav=document.querySelector("nav");
    menuToggle.addEventListener("click",function(){
        nav.classList.toggle("active");
    })


})

//script.js footer toggle
document.addEventListener("DOMContentLoaded", function(){
    const toggles=document.querySelectorAll(".footer-toggle");
    toggles.forEach(toggle=>{
        toggle.addEventListener("click",function(){
            const content=this.nextElementSibling;
            content.classList.toggle("active");
        })
    })
})