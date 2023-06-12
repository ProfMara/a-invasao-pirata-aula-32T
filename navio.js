class Navio{
    constructor(x,y){
        this.body = Bodies.circle(x,y, 70, {isStatic:false});
        World.add(world, this.body)
        this.navioImg = loadImage("navio.png");

    } 


    amora(){
        var pos = this.body.position;
        image (this.navioImg, pos.x, pos.y, 140,140);
    }
}