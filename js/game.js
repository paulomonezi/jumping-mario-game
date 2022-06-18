// 1 - pegar os dom dos elementos do game. standing mario, mario, pipe, clouds e botões jogar/reset - check
// 2 - iniciar animação com evento de clique no botão jogar
// 3 - definir colisões verticais e horizontais
// 4 - encerrar as animações quando acontecer uma colisão e mostrar o botão de reset
// 5 - reiniciar o game com o botão reset

const standingMario = document.querySelector(".standing-mario");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".button");
const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");

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

const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

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

    button.classList.remove("hidden");
    resetButton.classList.remove("hidden");
  }
}, 20);

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

addEventListener("keydown", jump);
