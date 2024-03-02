let q = document.querySelector(".question");
let yes = document.querySelector(".yes");
let img = document.querySelector("img");
let noBtn = document.querySelector(".No");

noBtn.addEventListener("mouseover",()=>{
    noBtn.style.position = "absolute"
    noBtn.style.top = Math.random()*40 + 'vh';
    noBtn.style.right =Math.random()*40 + 'vw';
})

yes.addEventListener("click", () => {
  q.innerHTML = "Haaa Haaa";
  img.src = 'e1.png';
  img.classList.toggle("animated");
  q.classList.toggle("fadeInAnimation");
  
});
