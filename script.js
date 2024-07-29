let card=document.getElementById('card');
let card1=document.getElementById('card1');
let card2=document.getElementById('card2');
let card3=document.getElementById('card3');

card.addEventListener('mouseenter',myfun);
card.addEventListener('mouseleave',leave)
card1.addEventListener('mouseover',myfun1);
card1.addEventListener('mouseleave',leave1);
card2.addEventListener('mouseover',myfun2);
card2.addEventListener('mouseleave',leave2);
card3.addEventListener('mouseover',myfun3);
card3.addEventListener('mouseleave',leave3);

function myfun(){
    
    card.style.transform="rotateY(180deg)";
}

function myfun1(){
    card1.style.transform="rotateY(180deg)";
}

function myfun2(){
    card2.style.transform="rotateY(180deg)";
}

function myfun3(){
    card3.style.transform="rotateY(180deg)";
}

function leave(){
    card.style.transform="rotateY(360deg)";
}


function leave1(){
    card1.style.transform="rotateY(360deg)";
}


function leave2(){
    card2.style.transform="rotateY(360deg)";
}


function leave3(){
    card3.style.transform="rotateY(360deg)";
}