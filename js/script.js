const loginForm=document.getElementById("login-form");
const registerForm=document.getElementById("register-form");

const registerButton=document.getElementById("registerB");
const loginButton=document.getElementById("loginB");

registerButton.addEventListener("click", function(){
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
  
});
loginButton.addEventListener("click", function(){
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
  
});

// slide swiper

let slide_count=document.getElementsByClassName("slider-slide").length;
let i=0;
let s;console.log(i);
const nextButton=document.getElementsByClassName("slider-next")[0];

let goSlide=function(e){
  const selection=document.querySelector(".slider-wrapper");
  s="translateX(calc(-"+e+"*100%/"+slide_count+"))";
  selection.style.transform=s;
}
nextButton.addEventListener("click", function(){
  startAutoPlay();
  i++;
  if(i==slide_count){
    i=0;
  }
  goSlide(i);
});
const prevButton=document.getElementsByClassName("slider-prev")[0];
prevButton.addEventListener("click", function(){
  stopAutoPlay();
  i--;
  if(i==-1){
    i=slide_count-1;
  }
  goSlide(i)
});

//auto swipe

let autoPlayInterval;
function nextSlideAutomatically() {
  i++;
  if (i >= slide_count) {
      i = 0;
  }
  goSlide(i);
}
function startAutoPlay() {
  if (!autoPlayInterval) {
      autoPlayInterval = setInterval(nextSlideAutomatically, 3000);
  }
}
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
}
startAutoPlay();