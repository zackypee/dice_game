var imageFolder = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
let imageElement = document.querySelector(".img1");
let randomPictures = Math.floor(Math.random() * imageFolder.length);
let result = imageFolder[randomPictures];
if (imageElement) {
    imageElement.src = result;
}
//second images 
var image2Folder = [
   "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
let image2Element = document.querySelector(".img2");
let random2Pictures = Math.floor(Math.random() * image2Folder.length);
let result2 = image2Folder[random2Pictures];
if (imageElement) {
    image2Element.src = result2;
}
//winner function 
let H1Element = document.querySelector("h1");
    let resultOne = randomPictures;
    let resultTwo = random2Pictures;
    if (resultOne > resultTwo){
        H1Element.textContent = "player one is the winner 🚩";
    } else if (resultOne === resultTwo){
        H1Element.textContent = "It's a draw. 🚩";
    }
    else {
        H1Element.textContent = "player two is the winner 🚩";
    }