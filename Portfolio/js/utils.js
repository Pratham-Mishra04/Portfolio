document.querySelector(".bc-text").addEventListener("mouseover",()=>{
    document.querySelector(".bc-bottom").style.height="4vh";
})

document.querySelector(".bc-text").addEventListener("mouseout",()=>{
    document.querySelector(".bc-bottom").style.height="0vh";
})

document.querySelector(".bc-text").addEventListener("mouseover",()=>{
    document.querySelector(".bc-bottomtext").setAttribute("style","font-size:15px;")
})

document.querySelector(".bc-text").addEventListener("mouseout",()=>{
    document.querySelector(".bc-bottomtext").setAttribute("style","font-size: 0px;")
})

links=document.querySelectorAll(".linkcontain");

links[0].querySelector("a").addEventListener("mouseover",()=>{
    links[0].querySelector(".underline").style.width="3vw";
})
links[0].querySelector("a").addEventListener("mouseout",()=>{
    links[0].querySelector(".underline").style.width="0vw";
})

links[1].querySelector("a").addEventListener("mouseover",()=>{
    links[1].querySelector(".underline").style.width="3vw";
})
links[1].querySelector("a").addEventListener("mouseout",()=>{
    links[1].querySelector(".underline").style.width="0vw";
})
links[2].querySelector("a").addEventListener("mouseover",()=>{
    links[2].querySelector(".underline").style.width="3vw";
})
links[2].querySelector("a").addEventListener("mouseout",()=>{
    links[2].querySelector(".underline").style.width="0vw";
})
links[3].querySelector("a").addEventListener("mouseover",()=>{
    links[3].querySelector(".underline").style.width="3vw";
})
links[3].querySelector("a").addEventListener("mouseout",()=>{
    links[3].querySelector(".underline").style.width="0vw";
})