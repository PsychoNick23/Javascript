function pattern(){
    let xyz = document.getElementById("str").value;
    for (i=0; i<=xyz; i++){
        for (j=0; j<=i; j++){
            document.write("*");
        }
        document.write("<br>");
    }
}