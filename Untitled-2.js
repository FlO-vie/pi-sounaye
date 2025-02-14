"use strict";

const tontonGifs = [
  "C:\Users\florentin\Desktop\ruben\Image\WhatsApp Image 2025-02-14 at 17.44.21_ac0adb02.jpg",
  "C:\Users\florentin\Desktop\ruben\Image\WhatsApp Image 2025-02-14 at 17.44.21_ac0adb02.jpg",
  "C:\Users\florentin\Desktop\ruben\Image\WhatsApp Image 2025-02-14 at 17.48.30_4e803b14.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
  "C:\Users\florentin\Desktop\ruben\Image\WhatsApp Image 2025-02-14 at 17.43.49_4735cc24.jpg"
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Ti koner sa🤭...sa miss Gaspard la ki mort moi sa🌚..love u❤";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}
function generateMessage(noCount) {
    const messages = [
      "Eta malangue to sire sa?🙄",
      "Eta kk fess to Dr nn enkr😤",
      "Kifer ou difficile koumsa ou😩",
      "Nn to p envy mo desane nassola la🙂",
      "To p envy Nou ggn la guerre la?😑",
      "Mo pou fer komik Kone sa la🙄💔",
    ];
    return messages[Math.min(noCount, messages.length - 1)];
  }
  
  function changeImage(image) {
    img.src =
      image === "yes"
        ? "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif"
        : tontonGifs[image];
  }
  
  function updateNoButtonText() {
    noBtn.innerHTML = generateMessage(noCount);
  }
  