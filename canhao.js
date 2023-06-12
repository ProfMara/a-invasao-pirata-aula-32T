class Canhao{
    constructor(x,y){
        //atribuir as props x e y
        this.x = x;
        this.y = y;
        this.angulo = angulo;
        //atribuir duas imagens
        this.canoImg = loadImage("canhao.png");
        this.baseImg = loadImage("base.png");
    }

    //método para exibir as imagens
    abacaxi(){
        console.log(this.angulo)
        //checa se é vdd que apertei a tecla
        if(keyIsDown(LEFT_ARROW) && this.angulo > -34){
            //diminui o valor da prop angulo
            this.angulo--;
        }
        //DIREITA : RIGHT
        if(keyIsDown(RIGHT_ARROW) && this.angulo < 49){
            //aumenta o valor da prop angulo
            this.angulo++;
        }
        //atualiza a configuração
        push ();
        //muda a posição 0,0  para o centro do canhao
        translate (this.x, this.y)
        //girar//rotacionar//inclinar
        rotate (this.angulo);
        //exibe a imagem do cano
        image (this.canoImg, 0,0,100, 100);
        //volta para a configuração antiga
        pop ()
        //exibe a imagem da base
        image (this.baseImg, this.x,this.y,200,200);
    }
}