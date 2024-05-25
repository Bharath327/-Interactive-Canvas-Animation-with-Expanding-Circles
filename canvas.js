const v=document.querySelector("canvas");
v.width=window.innerWidth;
v.height=window.innerHeight;
var c=v.getContext('2d');
/*
c.fillStyle='red';
c.fillRect(100,100,100,100);
const ar=["red","blue","green","yellow","orange","pink","violet"];
for(var i=0;i<500;i++){
    c.beginPath();
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.arc(x,y,40,0,Math.PI*2,true);
    c.stroke();
    c.strokeStyle=ar[Math.floor(Math.random()*7)];
}
*/
var mouse={
    x:undefined,
    y:undefined
};
const ar2=["red","green","blue","pink","yellow",];
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log("mouse");
});
function mult(x,y,r,dx,dy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.dx=dx;
    this.dy=dy;
    this.minRadius=r;
    this.color=ar2[Math.floor(Math.random()*5)];
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        c.strokeStyle="black";
        c.fillStyle=this.color;
        c.stroke();
        c.fill();
    }
    this.update=function(){
        if(this.x+this.r>innerWidth || this.x-this.r<0) this.dx=-this.dx;
        this.x+=this.dx;
        if(this.y+this.r>innerHeight || this.y-this.r<0) this.dy=-this.dy;
        this.y+=this.dy;
        if(this.x-mouse.x<50 && mouse.x-this.x<50 && this.y-mouse.y<50 && mouse.y-this.y<50){
            if(this.r<50) this.r+=1;
        }
        else if(this.r>this.minRadius) this.r-=1;
        this.draw();
    }
}
var ar=[];
for(var i=0;i<500;i++){
    var dx=(Math.random()-0.5)*10;
    var dy=(Math.random()-0.5)*10;
    ar.push(new mult(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*3+1,dx,dy));
}
//var obj=new mult(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*50,1,1);
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<ar.length;i++) ar[i].update();
    //obj.draw();
}
animate();