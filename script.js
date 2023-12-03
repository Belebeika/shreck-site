const button = document.getElementById("main-button");
let cnst = 0;
let cnst_left = 0;

button.addEventListener('click', function(){
    this.remove()
    CreateContainers();
    setInterval(stardown, 400);
    setInterval(checkstars, 100);
});

function CreateContainers(){
    for (let i = 1; i <= 16; i++){
        let cont = 'container' + String(i);
        let window = document. querySelector('.container');
        let div1 = document.createElement('div');
        div1.className = cont;
        div1.style.display = 'flex';
        div1.style.width = '5vw';
        window.innerHTML += div1.outerHTML;
        if (i == 16){
            div1.style.margin = 'bottom';
        }
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randomPosition(){
    let C = 0;
    while (true){
        C = randomInteger(41, 90) - (cnst - 1) * 5;
        if (C < cnst_left - 13 || C > cnst_left + 13){
            break;
        }
    }
    cnst_left = C;
    return String(C) + 'vw'
}

function randomImage(){
    let C = randomInteger(1, 8);
    if (C == 1){
        return 'url(images/black-star.png)'
    }
    if (C == 2){
        return 'url(images/star.png)'
    }
    if (C == 3){
        return 'url(images/blue-star.png)'
    }
    if (C == 4){
        return 'url(images/white-star.png)'
    }
    if (C == 5){
        return 'url(images/army-star.png)'
    }
    if (C == 6){
        return 'url(images/orange-star.png)'
    }
    if (C == 7){
        return 'url(images/light-blue-star.png)'
    }
    if (C == 8){
        return 'url(images/pink-star.png)'
    }
}

function stardown(){
    cnst = cnst % 15 + 1;
    let cont = '.container' + String(cnst);
    let cont2 = '.container' + String((cnst) % 15 + 1);
    let window = document.querySelector(cont);
    let window2 = document.querySelector(cont2);
    if (window2.hasChildNodes()){
        window2.firstChild.remove();
    }
    let div1 = document.createElement('div');
    div1.className = 'star';
    div1.style.left = randomPosition();
    div1.style.backgroundImage = randomImage();
    window.innerHTML += div1.outerHTML;
}

var myAudio = new Audio();

function get_Ryan(background){

    let cont = '.container16';
    let window = document.querySelector(cont);
    while (window.hasChildNodes()){
        window.firstChild.remove();
    }

    let div = document.createElement('img');
    div.style.position = 'relative';
    div.style.zIndex = '10';

    if (background == 'url("images/black-star.png")'){
        myAudio.src = 'audio/black_gosling.mp3';
        div.src = "images/black-gosling.png";
        div.style.left = '-72vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/blue-star.png")'){
        myAudio.src = 'audio/blue_gosling.mp3';
        div.src = "images/blue-gosling.png";
        div.style.left = '-70vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/white-star.png")'){
        myAudio.src = 'audio/white_gosling.mp3';
        div.src = "images/white-gosling.png";
        div.style.left = '-72vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/army-star.png")'){
        myAudio.src = 'audio/army_gosling.mp3';
        div.src = "images/army-gosling.png";
        div.style.left = '-70vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/orange-star.png")'){
        myAudio.src = 'audio/orange_gosling.mp3';
        div.src = "images/orange-gosling.png";
        div.style.left = '-72vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/light-blue-star.png")'){
        myAudio.src = 'audio/light_blue_gosling.mp3';
        div.src = "images/light-blue-gosling.png";
        div.style.left = '-72vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    if (background == 'url("images/star.png")'){
        myAudio.src = 'audio/shreck.mp3';
        div.src = "images/cool-shreck.png";
        div.style.left = '-75vw';
        div.style.width = '50vw';
        div.style.height = '80vh';
        div.style.bottom = '-20vh';
    }
    if (background == 'url("images/pink-star.png")'){
        myAudio.src = 'audio/pink_gosling.mp3';
        div.src = "images/pink-gosling.png";
        div.style.left = '-72vw';
        div.style.width = '50vw';
        div.style.height = '100vh';
    }

    myAudio.play();
    window.innerHTML += div.outerHTML;

}

function checkstars(){
    for (let i = 1; i < 16; i++){
        let contt = '.container' + String(i);
        let windoww = document.querySelector(contt);
        if (windoww.hasChildNodes()){
            let star = windoww.firstChild;
            star.addEventListener('click', function(){
                get_Ryan(this.style.backgroundImage);
                this.remove();
            });
        }
    }
}
