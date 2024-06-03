function marks(){
    let sname = document.getElementById("sdnt").value;
    let rollno = document.getElementById("rno").value;
    let java = document.getElementById("j").value;
    let cplus = document.getElementById("c++").value;
    let pyn = document.getElementById("pyn").value;
    let jsp = document.getElementById("jsp").value;
    let csharp = document.getElementById("c#").value;
    let standard = document.getElementById("std").value;
    let total = +java + +cplus + +pyn + +jsp + +csharp;
    
    let perc =Math.round (total / 500 *100)
    


    document.getElementById("sdntname").innerHTML=sname;
    document.getElementById("rolno").innerHTML=rollno;
    document.getElementById("sd").innerHTML=standard;
    // document.getElementById("ja").innerHTML=java + "/100";
    // document.getElementById("cplu").innerHTML=cplus + "/100";
    // document.getElementById("pthn").innerHTML=pyn + "/100";
    // document.getElementById("js").innerHTML=jsp + "/100";
    // document.getElementById("csrp").innerHTML=csharp + "/100";

    document.getElementById("ttl").innerHTML=total + "/500";
    document.getElementById("per").innerHTML=perc;
    

if(java>=35 && cplus>=35 && pyn>=35 && jsp>+35 && csharp>=30){


    if(perc >= 80 && perc <= 100){
        
        document.getElementById("dv").innerHTML="A";
    }
    else if(perc >= 70 && perc <= 79){
        
        document.getElementById("dv").innerHTML="B";
    }
    else if(perc >=60 && perc <=69){
        document.getElementById("dv").innerHTML="C"
    }
    else if(perc >=35 && perc <=59){
        document.getElementById("dv").innerHTML="D"
    }
    
    }
else{
    document.getElementById("dv").innerHTML="Fail"
}
if(java<=34){
    document.getElementById("ja").innerHTML=java + "/100"+"F";
}
else{
    document.getElementById("ja").innerHTML=java + "/100";
}

if(cplus<=34){
    document.getElementById("cplu").innerHTML=cplus + "/100"+"F";
}
else{
    document.getElementById("cplu").innerHTML=cplus + "/100";
}

if(pyn<=34){
    document.getElementById("pthn").innerHTML=pyn + "/100"+"F";
}
else{
    document.getElementById("pthn").innerHTML=pyn + "/100";
}

if(jsp<=34){
    document.getElementById("js").innerHTML=jsp + "/100"+"F";
}
else{
    document.getElementById("js").innerHTML=jsp + "/100";
}

if(csharp<=34){
    document.getElementById("csrp").innerHTML=csharp + "/100"+"F";
}
else{
    document.getElementById("csrp").innerHTML=csharp + "/100";
}

}


