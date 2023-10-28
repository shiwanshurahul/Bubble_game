function makebubble() {
var clutter = "";

for(var i= 1; i<=70;i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=  `<div class="bubble">${rn}</div>`;  //bubble append krte har iteration me
}
// 70 bar khud se banane se accha js se banwao
document.querySelector("#panelbottom").innerHTML =clutter;
}

var timer = 60; 
function runTimer(){
   var tim = setInterval(function(){
        if(timer>0){  //warna time -Ve ho jaega
        timer--;  
        document.querySelector("#timerval").textContent =timer;
        }
        else{
            clearInterval(tim);
            document.querySelector("#panelbottom").innerHTML = '<h1>Game Over </h1>' //empty the screen = no bubbles
        }
    }, 1000); //har 1000ms pe inske andar ka content chlega =timer-- ho rha and document. wala v chl rha
}

var hitrn =0;
function getnewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =hitrn
}

var score =0;
function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent =score
}

//addEventListener-> jispe click kroge wo element pe event raise hoga , and eventlistener na milne par event element ke parent pe listener dhundhega 
//all bubble ka parent is panelbottom
//hm har bubble pe addEventListener lgane ki jagah seedha uske parent (panelbottom) pe lga dete taki us buuble pe na milne pe eventlistener uske parent pe jaye

document.querySelector("#panelbottom").addEventListener("click",function (dets) {
    //alert("chal rha")-> prints alert
    var clickednum = Number(dets.target.textContent);  //dets.target is the bubble which was clicked
    if(clickednum==hitrn){
        increasescore();  //score+= 10
        makebubble();    //new bubbles
        getnewHit();      //new hit
    }
});


runTimer();
makebubble();
getnewHit();
//increasescore(); -> call within addevent 

//game: click on any bubble- if clicked number ==hit then score+=10 otherwise score remains same and all bubbles and hit will refresh
//when timer==0 -> print score and Game over on screen

