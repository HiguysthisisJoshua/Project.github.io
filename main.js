canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

greencarwidth=75;
greencarheight=100;

greencarx=10;
greencary=10;

greencarimg="car2.png";
backgroundimg="parkingLot.jpg";

function add(){

    background_imgtag= new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src= backgroundimg;

    greencar_imgtag= new Image();
    greencar_imgtag.onload=uploadGreencar;
    greencar_imgtag.src= greencarimg;
}
function uploadBackground(){

    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uploadGreencar(){

    ctx.drawImage(greencar_imgtag,greencarx,greencary,greencarwidth,greencarheight);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);

    if( keypressed == '37'){
        Left(); 
    }

    if( keypressed == '38'){
        Up(); 
    }

    if( keypressed == '39'){
        Right(); 
    }

    if( keypressed == '40'){
        Down(); 
    }
}

function Left(){
    if(greencarx >= 0){
        greencarx = greencarx-10;
        uploadBackground();
        uploadGreencar();
    }
}
function Up(){
    if(greencary >= 0){
        greencary = greencary-10;
        uploadBackground();
        uploadGreencar();
    }
}
function Down(){
    if(greencary <= 300){
        greencary = greencary+10;
        uploadBackground();
        uploadGreencar();
    }
}
function Right(){
    if(greencarx <= 700){
        greencarx = greencarx+10;
        uploadBackground();
        uploadGreencar();
    }
}