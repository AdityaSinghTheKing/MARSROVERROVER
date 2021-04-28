canvas=document.getElementById("mycanvas");
ctx=canvas.getContext('2d');
var roverwidth=100;
var roverheight=90;
marsimagesarray=["Mars1.jpg" , "Mars2.jpg" , "Mars3.jpg" , "Mars4.jpg"];
var randomnumber=Math.floor(Math.random() * 4)
console.log(randomnumber)
var backgroundimage=marsimagesarray[randomnumber];



var roverimage="rover.png";
var roverx=10;
var rovery=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=backgroundimage;
    rover_imgTag= new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=roverimage;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height)
}
function uploadrover(){
  ctx.drawImage(rover_imgTag , roverx , rovery , roverwidth , roverheight);  
}
window.addEventListener("keydown" , mykeydown);
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed == '38'){
        up()
        console.log("up is pressed");    
    }
    if(keypressed == '40'){
        down()
        console.log("down has been pressed");
    }
    if(keypressed == '37'){
        left()
        console.log("left has been pressed")
    }
    if(keypressed == '39'){
        right()
        console.log("right has been pressed");
    }

    
}
function up(){
    if(rovery >=0){
        rovery= rovery-10
        console.log("X= " + roverx + "Y" + rovery);
        uploadbackground()
        uploadrover()
        document.body.style.overflow="hidden"
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10
        console.log("X= "+ roverx + "Y= " + rovery);
        uploadbackground()
        uploadrover()
        document.body.style.overflow="hidden"
    }
}
function left (){
    if(roverx>=0){
        roverx=roverx-10
        console.log("X= " + roverx + "Y= " + rovery);
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10
        console.log("X= " + roverx + "Y= " + rovery);
        uploadbackground()
        uploadrover()
    }
}