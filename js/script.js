function baseGame(){
    play.addEventListener('click', function(){
        pipe.style.animation = 'pipe-animation 2s infinite linear'
        play.classList.add('hidden')
        button.classList.add('hidden')
        console.log('oi')
    })
}


const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const cloudsplus = document.querySelector('.cloudsplus');
const button = document.querySelector('.button')
const reset = document.querySelector('.reset')
const play = document.querySelector('.play')


const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')

    }, 500)
}


const playButton = () =>{
    button.classList.remove('hidden')
    play.classList.remove('hidden')
}

const gameLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const cloudsplusPosition = cloudsplus.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        cloudsplus.style.animation = 'none';
        cloudsplus.style.left = `${cloudsplusPosition}px`;

        const resetButton = () => {    
            
            button.classList.remove('hidden')
            reset.classList.remove('hidden')
            reset.addEventListener('click', function(){
                document.addEventListener('keydown', jump());     
                button.classList.add('hidden')
                reset.classList.add('hidden')
                pipe.style.left = ''
                mario.style.bottom = ''
                mario.src = './images/mario.gif'
                mario.style.width = '150px'
                mario.style.marginLeft =''
                pipe.style.animation = 'pipe-animation 2s infinite linear'
                marioPosition
                console.log('oi')
                          
            })
                   
        }
        resetButton()

    }
}, 10)

baseGame()
document.addEventListener('keydown', jump);

