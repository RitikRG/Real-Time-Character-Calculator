const body = document.querySelector('body');
const form = document.querySelector('form');
const input = document.querySelector('textarea');
const charCountDisplay = document.querySelector('#charCount');
const charRemainDisplay = document.querySelector('#remainingCharCount');
let charCount = 0;
let charRemain = 50;
//
form.addEventListener('onload', function(){form.preventDefault()});
//
const myFunction=(e)=>{
    if(e.inputType =="deleteContentBackward" && charCount>0){
        charCount--;
        charRemain++;
    }else if(e.inputType== "insertText"){
        charCount++;
        charRemain--;
    }
    charCountDisplay.innerText = charCount;
    charRemainDisplay.innerText = charRemain;
    console.log(charCount);
    console.log(charRemain);
}

input.addEventListener('input', myFunction);
