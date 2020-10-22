let button = document.querySelector("button");
let words = document.querySelector(".words");
let timerDiv = document.querySelector(".time");
let scoreDiv = document.querySelector(".score");
let bgm = new Audio("music/music.mp3");
let correct_music = new Audio("music/correct.mp3");

let score = 0;
let time = 20;
let userInput;
let spans;

//temporary
let wordList = [];

loadWordsFromFile();

button.addEventListener("click", (e) => {
  bgm.play();
  countDown();
  randomWord();
  button.disabled = true;
});

function countDown() {
  score = 0;
  var timer = setInterval(function () {
    time--;
    timerDiv.innerHTML = time;
    if (time === 0) {
      alert("Game over! Your score is " + score);
      scoreDiv.innerHTML = "0";
      words.innerHTML = "";
      button.disabled = false;
      bgm.pause();
      bgm.currentTime = 0;
      time = 20;
      timerDiv.innerHTML = "20";
      clearInterval(timer);
    }
  }, 1000);
}

function randomWord() {
  words.innerHTML = "";
  let random = Math.floor(Math.random() * (999 + 1)) + 0;
  let word = wordList[random].trim().split("");
  for (let i = 0; i < word.length; i++) {
    //building the words with spans around the letters
    let span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = word[i];
    words.appendChild(span);
  }
  spans = document.querySelectorAll(".span");
}

function loadWordsFromFile() {
  fetch("words.txt")
    .then((response) => response.text())
    .then((data) => {
      wordList = data.split("\n");
      //console.log(wordList);
    });
}

function typing(e) {
  userInput = String.fromCharCode(e.which);
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML === userInput) {
      // if typed letter is the one from the word
      if (spans[i].classList.contains("bg")) {
        // if it already has class with the background color then check the next one
        continue;
      } else if (
        (!spans[i].classList.contains("bg") && spans[i - 1] === undefined) ||
        spans[i - 1].classList.contains("bg")
      ) {
        // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
        spans[i].classList.add("bg");
        break;
      }
    }
  }
  let matched_words = 0;
  for (let j = 0; j < spans.length; j++) {
    //checking if all the letters are typed
    if (spans[j].className === "span bg") {
      matched_words++;
    }
    if (matched_words === spans.length) {
      correct_music.pause();
      correct_music.currentTime = 0;
      correct_music.play();
      $(".words").fadeOut();
      $(".words").fadeIn();
      score++; // increment the points
      scoreDiv.innerHTML = score; //add points to the points div
      document.removeEventListener("keydown", typing, false);
      setTimeout(function () {
        words.className = "words"; // restart the classes
        randomWord(); // give another word
        document.addEventListener("keydown", typing, false);
      }, 400);
    }
  }
}

document.addEventListener("keydown", typing, false);
