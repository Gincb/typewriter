"use strict";
document.querySelector(".overlay").addEventListener("click", start); //Start event on div click

let sentence = document.querySelector("#typewriter").textContent;
let i = 0;

const typeKey1 = document.querySelector("#typekey1");
const typeKey2 = document.querySelector("#typekey2");
const typeSpace = document.querySelector("#typespace");
const typeLast = document.querySelector("#typelast");
const typeReturn = document.querySelector("#typereturn");

function start() {
  document.querySelector(".overlay").classList.add("hide");
  document.querySelector(".typewritten").innerHTML = " "; // Clear element
  typeSentence();
}

//Random letters
const randomLetterOne = sentence[Math.floor(Math.random() * sentence.length)];
const randomLetterTwo = sentence[Math.floor(Math.random() * sentence.length)];
const randomLetterThree = sentence[Math.floor(Math.random() * sentence.length)];

function typeSentence() {
  setTimeout(function () {
    let letters = sentence.substring(0, i + 1);
    document.querySelector(".typewritten").textContent = letters;

    if (letters.length == sentence.length) {
      typeLast.play();
    } else if (letters.endsWith(" ")) {
      typeSpace.play();
    } else if (
      letters[i] == randomLetterOne ||
      letters[i] == randomLetterTwo ||
      letters[i] == randomLetterThree
    ) {
      typeKey1.play();
    } else {
      typeKey2.play();
    }

    if (i < letters.length) {
      i++;
      typeSentence();
    }
  }, Math.floor(Math.random() * 600) + 100);
}
