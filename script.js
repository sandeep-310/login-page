let button = document.querySelectorAll("button")
let buttonArray = Array.from(button);

buttonArray.forEach(element => {
    element.addEventListener("click",(e)=>{
        document.getElementsByClassName("loginDiv")[0].classList.toggle("toggleClass");
        document.getElementsByClassName("SignupDiv")[0].classList.toggle("toggleClass");
        document.getElementsByClassName("subLoginDiv")[0].classList.toggle("magicAnimation")
        document.getElementsByClassName("welcome-back")[0].classList.toggle("toggleClass");
        document.getElementsByClassName("welcome")[0].classList.toggle("toggleClass");
    })
});
