input1="";
arr=[];

document.addEventListener("keypress",function(event){
    press=event.key;
    if(press=="1")calculate(1);
    else if(press=="2")calculate(2);
    else if(press=="3")calculate(3);
    else if(press=="4")calculate(4);
    else if(press=="5")calculate(5);
    else if(press=="6")calculate(6);
    else if(press=="7")calculate(7);
    else if(press=="8")calculate(8);
    else if(press=="9")calculate(9);
    else if(press=="0")calculate(0);
    else if(press=="Enter")calculate(10);
    else if(press=="+")calculate(11);
    else if(press=="-")calculate(12);
    else if(press=="*")calculate(13);
    else if(press=="/")calculate(14);
    else if(press==".")calculate(15);
})

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
        elem.innerText="Welcome!"; 
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