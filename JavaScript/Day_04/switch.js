function result(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    opp = document.getElementById("opp").value;
    p_result = document.getElementById("print_result");
    switch(opp){

        case '+' : p_result.innerHTML = +num1 + +num2;
        break;
        case '-' : p_result.innerHTML = num1-num2;
        break;
        case '*' : p_result.innerHTML = num1*num2;
        break;
        case '/' : p_result.innerHTML = num1/num2;
        break;
        default : alert("Plz select one opp ....");


    }
}