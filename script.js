let menuIcon = document.querySelector(`img[alt="Menu icon"]`);
let closeMenuIcon = document.querySelector(`img[alt*="Close"]`);
let navBar = document.querySelector("nav");
let fadedBackground = document.querySelector(`div[class*=faded]`);
function toggleMenu(menuState){
    if(menuState){
        menuIcon.style.display = "none";
        closeMenuIcon.style.display = "inline-block";
        navBar.style.display = "inline-block";
        fadedBackground.style.display = "inline-block";
    }
    else {
        menuIcon.style.display = "inline-block";
        closeMenuIcon.style.display = "none";
        navBar.style.display = "none";
        fadedBackground.style.display = "none";
    }
}

menuIcon.addEventListener("click", () => {
    toggleMenu(true);
})

closeMenuIcon.addEventListener("click", ()=>{
    toggleMenu(false);
})