var boxes=document.querySelectorAll(".box");
var arr=[["","",""],["","",""],["","",""]];
var placecheck=[[false,false,false],[false,false,false],[false,false,false]];
var clickcount=1;

boxes[0].addEventListener('click',function(){change(parseInt(boxes[0].getAttribute("id").charAt(0)),parseInt(boxes[0].getAttribute("id").charAt(1)))});
boxes[1].addEventListener('click',function(){change(parseInt(boxes[1].getAttribute("id").charAt(0)),parseInt(boxes[1].getAttribute("id").charAt(1)))});
boxes[2].addEventListener('click',function(){change(parseInt(boxes[2].getAttribute("id").charAt(0)),parseInt(boxes[2].getAttribute("id").charAt(1)))});
boxes[3].addEventListener('click',function(){change(parseInt(boxes[3].getAttribute("id").charAt(0)),parseInt(boxes[3].getAttribute("id").charAt(1)))});
boxes[4].addEventListener('click',function(){change(parseInt(boxes[4].getAttribute("id").charAt(0)),parseInt(boxes[4].getAttribute("id").charAt(1)))});
boxes[5].addEventListener('click',function(){change(parseInt(boxes[5].getAttribute("id").charAt(0)),parseInt(boxes[5].getAttribute("id").charAt(1)))});
boxes[6].addEventListener('click',function(){change(parseInt(boxes[6].getAttribute("id").charAt(0)),parseInt(boxes[6].getAttribute("id").charAt(1)))});
boxes[7].addEventListener('click',function(){change(parseInt(boxes[7].getAttribute("id").charAt(0)),parseInt(boxes[7].getAttribute("id").charAt(1)))});
boxes[8].addEventListener('click',function(){change(parseInt(boxes[8].getAttribute("id").charAt(0)),parseInt(boxes[8].getAttribute("id").charAt(1)))});



function change(i,j){
    boxenumber=3*i+j;
    if (clickcount%2==1){
        boxes[boxenumber].textContent="X";  
        arr[i][j]="X";
        placecheck[i][j]=true;
        if(gamewin("X")){
            var elem=document.createElement("h2")
            elem.textContent="X has Won the Game!"
            document.querySelector(".jumbotron").appendChild(elem);
        }
        else if(gametie()){
            var elem=document.createElement("h2")
            elem.textContent="It's a TIE!"
            document.querySelector(".jumbotron").appendChild(elem);
        }
        clickcount++;
    }
    else{
        boxes[boxenumber].textContent="O";
        arr[i][j]="O";
        placecheck[i][j]=true;
        if(gamewin("Y")){
            var elem=document.createElement("h2")
            elem.textContent="Y has Won the Game!"
            document.querySelector(".jumbotron").appendChild(elem);
        }
        else if(gametie()){
            var elem=document.createElement("h2")
            elem.textContent="It's a TIE!"
            document.querySelector(".jumbotron").appendChild(elem);
        }
        clickcount++;
    }
}


function gamewin(item){
    for(var i=0;i<3;i++){
        list1=[]
        list2=[]
        list3=[]
        list4=[]
        for (var j=0;j<3;j++){
            list1.push(arr[i][j])
            list2.push(arr[j][i])
            list3.push(arr[j][j])
            for(var k=0;k<3;k++){
                if(k+j==2){
                    list4.push(arr[k][j])
                }
            }
            if (counter(item,list1)==3 || counter(item,list2)==3 || counter(item,list3)==3 ||counter(item,list4)==3){
                return true;
            }
        }
    }
}
function counter(item,array){
    count=0;
    for(var i=0;i<array.length;i++){
        if (array[i]===item){
            count++;
        }
    }
    return count;
}
function gametie(){
    count=0;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(placecheck[i][j]==true){
                count++
            }
        }
    }
    console.log(count);
    if(count==9){
        return true
    }
    else{
        return false
    }
}
