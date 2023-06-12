const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;
//criando uma variável 
var angulo = 0;

var balas = [];
var navios = [];


function preload(){
    //carrega imagem
    cenario = loadImage("fundo.gif");

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;


    //criando o solo................
    solo = Bodies.rectangle(width/2,height-5,width, 40, {isStatic:true});
    World.add(world, solo);

    //muda o modo de medir o ângulo para GRAUS
    angleMode(DEGREES)
    //criar um objeto da classe Torre
    torre = new Torre(160,350,150,310);
    //criar um objeto da classe Canhao
    canhao = new Canhao(160,130);

    navio = new Navio (width-100, 500)
   
}

function draw() {
    Engine.update(engine);
    background("cyan");
    image (cenario,600,300,1200,600);
    //dá velocidade para o navio
    Body.setVelocity(navio.body, {x:-1, y:0});

    canhao.abacaxi();
    torre.show();
    navio.amora();
    //chamar a função showBoats
    showBoats();
    //repete os comandos pelo número de balas
    for(var i = 0; i < balas.length; i++){
        balas[i].show();
    }
}

function keyPressed(){
    if(keyCode == 32){
        //cria a bala
        bala =  new Bola(160,130)
        //atira a bala
        bala.shoot();
        //add na matriz
        balas.push(bala);
    }
    
}

function showBoats(){

    //checar se a matriz não está vazia
    if(navios.length > 0){
        //se o último navio estiver próximo da torre
        //criar navio
        if(navios[navios.length-1].body.position.x < 900){
            //cria navio
            navio = new Navio(1100,500);
            navios.push(navio)
        }

        //repetir o número de navios 
        for(var i = 0; i < navios.length; i++){
            navios[i].amora();
        
        }

    }else{
        //cria o objeto da classe navio
        navio = new Navio(1100,500);
        //add na matriz
        navios.push(navio);
    }


}