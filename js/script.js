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
let s;
console.log(i);
const nextButton=document.getElementsByClassName("slider-next")[0];


const rootStyles = getComputedStyle(document.documentElement);
let widthValue = rootStyles.getPropertyValue('--slider-width');
console.log(widthValue);

function goSlide(e){
  const selection=document.querySelector(".slider-wrapper");
  s="translateX(calc(-"+e+"*"+widthValue+"px))";
  selection.style.transform=s;
  console.log(s);
}
nextButton.addEventListener("click", function(){
  // startAutoPlay();
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


function updateRootWidthVar() {
  const container = document.querySelector('.my-simple-slider');
  const width = container.offsetWidth;

  widthValue=width;
  document.documentElement.style.setProperty('--slider-width', `${width}px`);
}

window.addEventListener('load', updateRootWidthVar);
window.addEventListener('resize', updateRootWidthVar);
