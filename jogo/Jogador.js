//criação class para jogador
class jogador{
    constructor(){
      this.image= loadImage("jogo/imgJogo/majinboo.png")
      this.posicaox= 250;
      this.posicaoy= 235;
      this.velocidade= 5;
      this.altura= 165;
      this.largura= 100; 
       this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy - this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
  }
    //fazer o jogador se mover
  mova(){
    
      image(this.image, this.posicaox, this.posicaoy, this.largura, this.altura);
    
    
    //para direita
    
    if((keyIsDown(39)) && (this.xFinal<600)){ 
      this.posicaox +=  this.velocidade;
    }
    //para esquerda
     if((keyIsDown(37)) &&  (this.xInicial>0)){
      this.posicaox -=  this.velocidade;
    }
    //posição
    this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
  }
    
  }