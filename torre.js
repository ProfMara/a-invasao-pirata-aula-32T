class Torre{
    constructor(x,y,largura, altura){
        var parado = {isStatic:true};
        this.body = Bodies.rectangle(x,y,largura, altura,parado)
        World.add(world, this.body);
        //adicionar o atributo imagem
        this.imagem = loadImage("torre.png")
        //adicionar o atributo largura
        this.largura = largura;
        //adicionar o atributo altura
        this.altura = altura;
    }
    //método para mostrar a torre
    show(){
        //posicionar as imagens pelo centro
        imageMode (CENTER);
        var pos = this.body.position;
        image (this.imagem, pos.x, pos.y, this.largura, this.altura)
    }
}