var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');





var mouse={
    x:undefined,
    y:undefined
}
var maxRadius=40;
//var minRadius=2;
var colorArray=[
    'red',
    'green',
    'yellow',
];
console.log(colorArray)


window.addEventListener('mousemove',function (event) {
 mouse.x=event.x;
 mouse.y=event.y;


})
window.addEventListener("resize", function () {

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    init();
})

function Circle(x,y,dx,dy,radius) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.draw=function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
        c.fillStyle=colorArray[Math.floor(Math.random()*colorArray.length)];
        c.fill();
    }
    this.update=function () {
        if(this.x+this.radius>innerWidth ||(this.x-this.radius<0)){
           this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight ||(this.y-this.radius<0)){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        if(mouse.x-this.x<50 &&mouse.x-this.x>-50 &&mouse.y-this.y<50 &&mouse.y-this.y>-50){
            this.radius+=1;
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }

        else if(this.radius>this.minRadius){
            this.radius-=1;
        }
        this.draw();
    }
}
var circleArray=[];
function init() {
    circleArray=[];

    for (var i=0;i<1800;i++){
        var x=Math.random()*innerWidth;
        var y=Math.random()*innerHeight;
        var dx=(Math.random()-0.5)*8;
        var dy=(Math.random()-0.5)*8;
        var radius=Math.random()*3+1;
        circleArray.push(new Circle(x,y,dx,dy,radius));
        //var circle =new Circle(200,300,3,3,30);
    }
    // var circle =new Circle(200,300,3,3,30);
   //circle.draw();

}


function animate() {
    requestAnimationFrame(animate)
   // console.log("ndksnfkas");
    c.clearRect( 0,0,innerWidth,innerHeight);
   for(var i=0;i<circleArray.length;i++){
     circleArray[i].update();
   }

}
init();
animate();






