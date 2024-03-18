function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin  = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
        const previousTypeNumber = typeNumberField.value;
        
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainderDigits = digits.join('');
            typeNumberField.value = remainderDigits;
        }
    }
    else{       
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMsg = document.getElementById('pin-success');
    const notMatchPinMsg = document.getElementById('pin-not-match');
    if(typeNumber === currentPin){   
        pinSuccessMsg.style.display = 'block'; 
        notMatchPinMsg.style.display = 'none'; 
    }
    else{
        notMatchPinMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
    typeNumberField.value = '';
})