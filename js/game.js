const standingMario = document.querySelector(".standing-mario");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".button");
const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const message = document.querySelector(".message")
const score = document.querySelector(".score")

playButton.onclick = function iniciarGame() {
  standingMario.classList.add("hidden");
  pipe.classList.remove("hidden");
  clouds.classList.remove("hidden");
  mario.classList.remove("hidden");
  playButton.classList.add("hidden");
  button.classList.add("hidden");

  pipe.style.animation = "pipe-animation 2s infinite linear";
  clouds.style.animation = "clouds-animation 20s infinite linear";
};

resetButton.onclick = () => {
  location.reload()
}

const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

  //TO-DO finish the score system.
  // let scoreUp = document.querySelector('#score-on-screen')
  // let count = 1

  // setInterval(function (){
  //   if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80) {
  //     let = scoreUp.innerHTML = count++ 
  //   }
  // }, 500)

  

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    button.classList.remove('hidden')
    resetButton.classList.remove('hidden')
  }

}, 20
);

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

addEventListener("keydown", jump);