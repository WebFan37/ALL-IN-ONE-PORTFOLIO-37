//ALL WEB PAGES
let mainPage = document.querySelector(".mainmenu");

let photosPage = document.querySelector(".photos");

let videoPage = document.querySelector(".videos");

let webPage = document.querySelector(".web");

let gamePage = document.querySelector(".game");

let contactPage = document.querySelector(".contact");



//ELEMENTS IN MENU BAR
let buttonMain = document.querySelector(".menu > div:nth-of-type(1)");
let buttonPhotos = document.querySelector(".menu > div:nth-of-type(2)");
let buttonVideos = document.querySelector(".menu > div:nth-of-type(3)");
let buttonWeb = document.querySelector(".menu > div:nth-of-type(4)");
let buttonGame = document.querySelector(".menu > div:nth-of-type(5)");
let buttonContact = document.querySelector(".menu > div:nth-of-type(6)");



//LOAD PAGE STEP BEFORE FUNCTION
buttonMain.addEventListener("click", loadMainPage);
buttonPhotos.addEventListener("click", loadPhotosPage);
buttonVideos.addEventListener("click", loadVideosPage);
buttonWeb.addEventListener("click", loadWebPage);
buttonGame.addEventListener("click", loadGamePage);
buttonContact.addEventListener("click", loadContactPage);




//FUNCTION TO CHANGE THE PAGES
function loadMainPage(){
   mainPage.style.display = "flex";
   gamePage.style.display = "none";
   webPage.style.display = "none";
   photosPage.style.display = "none";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
}
function loadPhotosPage(){
    mainPage.style.display = "none";
   gamePage.style.display = "none";
   webPage.style.display = "none";
   photosPage.style.display = "flex";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
}
function loadVideosPage(){
    mainPage.style.display = "none";
   gamePage.style.display = "none";
   webPage.style.display = "none";
   photosPage.style.display = "none";
   videoPage.style.display = "flex";
   contactPage.style.display = "none";
}
function loadWebPage(){
    mainPage.style.display = "none";
   gamePage.style.display = "none";
   webPage.style.display = "flex";
   photosPage.style.display = "none";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
}
function loadGamePage(){
    mainPage.style.display = "none";
   gamePage.style.display = "flex";
   webPage.style.display = "none";
   photosPage.style.display = "none";
   videoPage.style.display = "none";
   contactPage.style.display = "none";
}
function loadContactPage(){
    mainPage.style.display = "none";
    gamePage.style.display = "none";
    webPage.style.display = "none";
    photosPage.style.display = "none";
    videoPage.style.display = "none";
    contactPage.style.display = "flex";
}


//MAKING THE CURSOR MOVE FIRST
let myCursor = document.querySelector(".own-cursor");

document.addEventListener('mousemove', moveMyCursor);

function moveMyCursor(event){
    myCursor.style.translate = event.clientX + 'px ' + event.clientY + 'px';
}