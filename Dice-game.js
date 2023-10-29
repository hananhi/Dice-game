//const targetS=prompt('what is the target score');

let turn = true; // Player 1's turn

function switchTurn() {
  turn = !turn;

}

const TS=localStorage.getItem('number');


const roll_btn=document.getElementById('roll-dice');
const old_imag1=document.getElementById('d1');
const old_imag2=document.getElementById('d2');
let score1=document.getElementById('score1') ;
let currentS=0;
score1.textContent+=currentS ;
let S_img1;
    let S_img2 ;


const hold_btn=document.getElementById('hold');
const G_player1=document.getElementById('G-player1');

const new_g=document.getElementById('newg');



const winSentence=document.createElement('div');
winSentence.id='winS'
const textN=document.createTextNode('Passed the target Score')
winSentence.appendChild(textN);
positionW=document.querySelector('main');
 positionAfter=document.getElementById('oneC');

 



let score2=document.getElementById('score2') ;
score2.textContent+=currentS ;
const G_player2=document.getElementById('G-player2');

let images_array=["dice-1.png" , "dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"]

function func_changeImg(){
  
    let R_img1 = Math.floor(Math.random() * 6);
    let R_img2 =  Math.floor(Math.random() * 6);

    old_imag1.src=images_array[R_img1];
    old_imag2.src=images_array[R_img2];

    S_img1=R_img1+1 ;
     S_img2=R_img2+1 ;

    if(S_img1==6 && S_img2==6){
        currentS=0 ;
        
    }
    else{
        currentS+=S_img1+S_img2 ;
       
    }
    
    if (turn) {
    score1.textContent=currentS ;
    }
    else{
     score2.textContent=currentS ;
    }



}

function func_hold(){

    if (turn) {
    const num1 =parseFloat(score1.textContent);
    const num2=parseFloat(G_player1.textContent);

    G_player1.textContent=num1+num2 ;
  
    currentS=0 ;
    score1.textContent=currentS ;

    if (parseFloat(G_player1.textContent) > TS) {
        // Delay the alert to allow time for updating G_player1
        setTimeout(function() {
            positionW.insertBefore(winSentence,positionAfter);
        }, 3); // Adjust the delay time as needed
    }
  
    }
    else{

        const num1 =parseFloat(score2.textContent);
    const num2=parseFloat(G_player2.textContent);
    G_player2.textContent=num1+num2 ;
   
    
    currentS=0 ;
    score2.textContent=currentS ;
    }
   
   // shadeOverlay.style.display = (shadeOverlay.style.display === 'block') ? 'none' : 'block';
   
    switchTurn();


}



function func_ngame(){
    var customURL = 'newG.html';
    window.location.href = customURL;
    window.location.assign(customURL);
    
    // Current page won't get saved in the history:
    window.location.replace(customURL); 
    
    
    // Gecko only:
    window.document.location = customURL

}
roll_btn.addEventListener('click', func_changeImg);
hold_btn.addEventListener('click',func_hold);
new_g.addEventListener('click',func_ngame);

