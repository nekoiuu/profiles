const nav = document.getElementById("navContent")
const button = document.getElementById("closeButton")
window.addEventListener("load",()=>{
      nav.classList.add('animate-slide-bounce');
})

button.addEventListener("click",()=>{
    nav.classList.remove("animate-slide-bounce")
})