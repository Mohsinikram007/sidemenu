let list = document.querySelector(".list");
let opneMenu = document.querySelector(".openMenu");
let icon = document.querySelector('.icon');
let logo = document.querySelector('.logo');
let nav = document.querySelector('.nav');
let text = document.querySelector(".container");

let flag = 0

opneMenu.addEventListener('click', check)
window.addEventListener('load',show )

function check()
{
    if (flag==0)
    {
        
        show();
        flag=1;
    }
    else{
        close()
        flag=0;
    }
    
}



function show()
{
    
    //alert("show");
    //nav.classList.toggle("nav");
    nav.style.transition = "opacity 0.3s ease"
    nav.style.display ="none"
    text.style.width = "100%"

}
function close()
{
    
    //alert("show");
    //nav.classList.toggle("nav");
    nav.style.transition = "opacity 0.3s ease"
    nav.style.display ="block"
    
    text.style.width = "70%"

}






