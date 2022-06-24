const handSelection = document.querySelector('.hand-selection');
const outCome = document.querySelector('.outcome');
let userChoice = document.querySelector('#userPickImage');
let userImageContainer = document.querySelector('.userImageContainer');
let statusElement = document.querySelector('.status-text');
let scoreElement = document.querySelector('.score');
let btnNewGame = document.querySelector('.btn-newGame');
let score = Number(scoreElement.innerHTML);

const getUserHand = (userHand) => {
    handSelection.style.display = 'none';
    outCome.style.display = 'flex';


    if (userHand === 'paper') {
        userChoice.src = "./images/icon-paper.svg";
        userImageContainer.classList.add('userImageContainer', 'paper-border');
    }

    if (userHand === 'scissors') {
        userChoice.src = "./images/icon-scissors.svg";
        userImageContainer.classList.add('userImageContainer', 'scissors-border');
    }

    if (userHand === 'rock') {
        userChoice.src = "./images/icon-rock.svg";
        userImageContainer.classList.add('userImageContainer', 'rock-border');
    }

    let computerHandPick = getComputerHand();    

    if (userHand === 'paper' && computerHandPick === 'rock') {
        statusElement.innerHTML = 'YOU WON';
        score += 1;
    }
    else if (userHand === 'scissors' && computerHandPick === 'paper') {
        statusElement.innerHTML = 'YOU WON';
        score += 1;
    }
    else if (userHand === 'rock' && computerHandPick === 'scissors') {
        statusElement.innerHTML = 'YOU WON';
        score += 1;
    }
    else if ((userHand === 'paper' && computerHandPick === 'paper') || 
             (userHand === 'scissors' && computerHandPick === 'scissors') ||
             (userHand === 'rock' && computerHandPick === 'rock')) {
                statusElement.innerHTML = "IT'S A TIE";
    }
    else {
        if (score > 0) {
            score -= 1;
        }
        statusElement.innerHTML = 'YOU LOSE';
    }

    scoreElement.innerHTML = score;

};

const getComputerHand = () => {
    let hands = ['paper', 'scissors', 'rock'];
    let computerHand = hands[Math.floor(Math.random() * 3)];
    let computerChoice = document.querySelector('#computerPickImage');
    let computerImageContainer = document.querySelector('.computerImageContainer');

    if (computerHand === 'paper') {
        computerChoice.src = "./images/icon-paper.svg";
        computerImageContainer.classList.add('computerImageContainer', 'paper-border');
    }

    if (computerHand === 'scissors') {
        computerChoice.src = "./images/icon-scissors.svg";
        computerImageContainer.classList.add('computerImageContainer', 'scissors-border');
    }

    if (computerHand === 'rock') {
        computerChoice.src = "./images/icon-rock.svg";
        computerImageContainer.classList.add('computerImageContainer', 'rock-border');
    }
    
    return computerHand;
};

btnNewGame.addEventListener('click', () => {
    handSelection.style.display = 'flex';
    outCome.style.display = 'none';
});

const rule_btn = document.querySelector('.rule-btn');
rule_btn.addEventListener('click', () => {

    /* CREATE RULE MODAL */
    const modal = document.createElement('div');
    modal.setAttribute('id', 'rule-modal');
    modal.style.display = 'flex';

     /* CREATE MODAL HEADER SECTION */
     const modal_header = document.createElement('div');
     modal_header.setAttribute('id', 'modal-header');
 
     const modal_heading = document.createElement('h2');
     modal_heading.setAttribute('id', 'modal-heading');
     modal_heading.innerText = "RULE";
     modal_header.appendChild(modal_heading);

     const close_button_desktop = document.createElement('h2');
    close_button_desktop.setAttribute('id', 'close-btn-desktop');
    close_button_desktop.innerHTML = "&times;";
    modal_header.appendChild(close_button_desktop);

    modal.appendChild(modal_header);
 
    /** RULES SECTION */
    const modal_image = document.createElement('img');
    modal_image.setAttribute('id', 'modal-img');
    modal_image.setAttribute('src', './images/image-rules.svg');
    modal.appendChild(modal_image);

    const close_button_mobile = document.createElement('h2');
    close_button_mobile.setAttribute('id', 'close-btn-mobile');
    close_button_mobile.innerHTML = "&times;";
    modal.appendChild(close_button_mobile);

    document.querySelector('.container').appendChild(modal);

    close_button_desktop.addEventListener('click', () => {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
        // else {
        //     modal.style.display = 'block';
        // }
    });

    close_button_mobile.addEventListener('click', () => {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
        // else {
        //     modal.style.display = 'block';
        // }
    });
});