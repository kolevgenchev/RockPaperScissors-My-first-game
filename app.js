let rockBtnEl=document.getElementsByClassName('rock')[0]
let peperBtnEl=document.getElementsByClassName('paper')[0]
let scissorsBtnEl=document.getElementsByClassName('scissors')[0]
let computerScoreEl=document.getElementsByClassName('winsPC')[0]
let yourScoreEl=document.getElementsByClassName('yourWins')[0]
let yourTurn=document.getElementsByClassName('score')[0]
let buttons=[rockBtnEl,peperBtnEl,scissorsBtnEl]
let computerScore=0
let yourScore=0
buttons.forEach((but)=>but.addEventListener('click',()=>{
    let cur=computerGenerate()
    switch(but.textContent){
        case 'Rock':
            if(cur==='rock'){
                yourTurn.lastChild.innerHTML = "PC's choice: Rock <br> Current result: DRAW!";

            }else if(cur==='paper'){
                yourTurn.lastChild.innerHTML = "PC's choice: Paper <br> Current result: You lost!";
                computerScore++
                computerScoreEl.lastChild.innerHTML=`PC\'s Score:${computerScore}`
            }else if(cur==='scissors'){
                yourTurn.lastChild.innerHTML = "PC's choice: Scissors <br> Current result: You Won!";
                yourScore++
                yourScoreEl.lastChild.innerHTML=`Your score: ${yourScore}`
            }
            break;
        case 'Paper':
            if(cur==='rock'){
                yourTurn.lastChild.innerHTML = "PC's choice: Rock <br> Current result: You Won!";
                yourScore++
                yourScoreEl.lastChild.innerHTML=`Your score: ${yourScore}`
            }else if(cur==='paper'){
                yourTurn.lastChild.innerHTML = "PC's choice: Paper <br> Current result: DRAW!";
                
            }else if(cur==='scissors'){
                yourTurn.lastChild.innerHTML = "PC's choice: Scissors <br> Current result: You lost!";
                computerScore++
                computerScoreEl.lastChild.innerHTML=`PC\'s Score:${computerScore}`
            }
            break;
        case 'Scissors':
            if(cur==='rock'){
                yourTurn.lastChild.innerHTML = "PC's choice: Rock <br> Current result: You lost!";
                computerScore++
                computerScoreEl.lastChild.innerHTML=`PC\'s Score:${computerScore}`
            }else if(cur==='paper'){
                yourTurn.lastChild.innerHTML = "PC's choice: Paper <br> Current result: You won!";
                yourScoreEl.lastChild.innerHTML=`Your score: ${yourScore}`
                
            }else if(cur==='scissors'){
                yourTurn.lastChild.innerHTML = "PC's choice: Scissors <br> Current result: DRAW!";
            }
            break;
    }
    if(computerScore===3){
        yourTurn.lastChild.innerHTML+='<br>YOU LOST THE GAME!'
        yourScoreEl.lastChild.innerHTML=``
        computerScoreEl.lastChild.innerHTML=``
        buttons.forEach(x=>x.disabled=true)
    }else if(yourScore===3){
        yourTurn.lastChild.innerHTML+='<br>YOU WON THE GAME!'
        yourScoreEl.lastChild.innerHTML=``
        computerScoreEl.lastChild.innerHTML=``
        buttons.forEach(x=>x.disabled=true)
    }
  
}));
function computerGenerate(){
    let res=Math.floor((Math.random() * 3)+1)
    if(res===1){
        return ('rock')
    }else if(res===2){
        return ('paper')
    }else if (res===3){
        return ('scissors')
    }
}

