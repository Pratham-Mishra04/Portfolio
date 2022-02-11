input1="";
arr=[];
function calculate(value){
    elem=document.querySelector(".display");
    if (value<10){
        input1=input1+value.toString();
        elem.innerText=input1; 
    }
    else if(value===15){
            input1=input1+"."
    }
    else if(value==16){
        input1=input1.substring(0,input1.length-1)
        elem.innerText=input1; 
    }
    else if(value==17){
        input1="";
        elem.innerText=input1; 
    }
    else if(value==18){
        arr=[];
        input1="";
        elem.innerText=input1; 
    }
    else{
        arr.push(parseFloat(input1))
        input1="";
        if(value===11){
            arr.push("+");
        }
        else if(value===12){
            arr.push("-");
        }
        else if(value===13){
            arr.push("*");
        }
        else if(value===14){
            arr.push("/");
        }
        else if(value===10){
            total=arr[0];
            for(var i=1;i<arr.length;i=i+2){
                temp=arr[i];
                if(temp==="+"){
                    total=total+arr[i+1]
                }
                if(temp==="-"){
                    total=total-arr[i+1]
                }
                if(temp==="*"){
                    total=total*arr[i+1]
                }
                if(temp==="/"){
                    total=total/arr[i+1]
                }
            }
            elem.innerText=total.toString();  
            arr=[];
            input1=total.toString();
        }
    }
}