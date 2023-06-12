class Bola{
    constructor(x,y){
        this.body = Bodies.circle(x,y, 15, {isStatic:true});
        World.add(world, this.body)
        this.balaImg = loadImage("bala.png");
     
    } 
    shoot(){
        var angulo = canhao.angulo -28;
        //transformar para radianos
        angulo*= 3.14/180
        var v = p5.Vector.fromAngle(angulo);
        //transformar para graus
        v.mult(90/3.14)
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {x:v.x,y:v.y})
    }

    show(){
        var pos = this.body.position;
        image (this.balaImg, pos.x, pos.y, 30,30);
    }
}