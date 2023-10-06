let nbr = 3;
let p = 0;
let container = document.getElementById("container");
let g = document.getElementById("g");
let d = document.getElementById("d");

document.body.onload=function(){
    container.style.width=(800*nbr)+"px";

    for(i=1; i<=nbr; i++){
        let div = document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('/images/img"+i+".jpg')";
        container.appendChild(div);
    }
    display();
}

d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container.style.transform = "translate("+ p * 800 + "px)";
    container.style.transition = "all 0.5s ease";
    display();
}
g.onclick=function(){
    if(p<0)
        p++;
    container.style.transform = "translate("+ p * 800 + "px)";
    container.style.transition = "all 0.5s ease";
    display();
}


function display(){
    if (p == -nbr+1) {
        d.style.visibility = "hidden";
    }
    else {
        d.style.visibility = "visible";
    }

    if (p == 0) {
        g.style.visibility = "hidden";
    }
    else {
        g.style.visibility = "visible";
    }
}