// console.log("Hiii");
// let name = "saman";

// const age = 12;

// console.log(typeof name);

// console.log(typeof age);

function calc(){
    let number1 = Number(document.getElementById("number01").value);
    let number2 = Number(document.getElementById("number02").value);
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");

    // if(op == '+'){
    //     lblOutput.innerHTML = number1 + number2;
    // }else if(op == '-'){
    //     lblOutput.innerHTML = number1 - number2;
    // }else if(op == '/'){
    //     lblOutput.innerHTML = number1 / number2;
    // }else{
    //     lblOutput.innerHTML = number1 * number2;
    // }
    switch(op){
        case '+' : lblOutput.innerHTML = number1 + number2; break;
        case '-' : lblOutput.innerHTML = number1 - number2; break;
        case '/' : lblOutput.innerHTML = number1 / number2; break;
        case '*' : lblOutput.innerHTML = number1 * number2; break;
    }
}