

//display the number

function displayNumber(num){
    document.getElementById("result").value+= num
}

function clearText(){
    result.value=""
}

//operations
function operations(){
    result.value=eval(result.value)
}


function backspace(){
    result.value=result.value.slice(0,-1);
}