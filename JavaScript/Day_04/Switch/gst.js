function price(){
    let prc = document.getElementById("n1").value;
    let qty = document.getElementById("n2").value;
    let  rslt = prc * qty;
    document.getElementById("PrintResult").innerHTML = rslt;

}


function result(){
    prdt = document.getElementById("pdt").value;
    let gst = document.getElementById("gst").value;
    let prc = document.getElementById("n1").value;
    let qty = document.getElementById("n2").value;
    let  rslt = prc * qty;
    document.getElementById("PrintResult").innerHTML = rslt;
    p_result = document.getElementById("print_result");
    switch(gst){

        case '2' : p_result.innerHTML = rslt*(2/100)+rslt;
        break;
        case '4' : p_result.innerHTML = rslt*(4/100)+rslt;
        break;
        case '9' : p_result.innerHTML = rslt*(9/100)+rslt;
        break;
        case '18' : p_result.innerHTML = rslt*(18/100)+rslt;
        break;
        default : alert("Plz select one opp ....");


    }
}