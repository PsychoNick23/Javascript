function loop(){
    start_no =  document.getElementById("start_no").value;
    end_no = document.getElementById("end_no").value;

    print_result = document.getElementById("box");
    
    for(let i = start_no ; i<=end_no ; i++ ){

        if(i%2==0){
            print_result.innerHTML += "No is even"

        }
        else{
            print_result.innerHTML += "<li style='background-color: green';>" +i+ "</li>"
        }
        
    }

}