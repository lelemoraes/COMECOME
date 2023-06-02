function executarJogo(){
    
    background(fundo);
  
    Jogador.mova();
    print(pontos);
  
    //movimentação
    
    //faz os personagens voltarem
    for(let i = 0; i < personagem.length; i++){
      personagem[i].mova();
      //bater na borda
      if (personagem[i].posicaox > 600){
        personagem[i] = new Personagem();
      }
      
    //posição
    if(
        Jogador.xInicial< personagem[i].yFinal &&
  Jogador.xFinal>personagem[i].yInicial &&
  Jogador.yInicial< personagem[i].xFinal &&
  Jogador.yFinal>personagem[i].xInicial  
    ){
          if(
            personagem[i].img == imgPersonagem[3]
          ){
            //zerar a pontuaçao
             pontos = 0;
            personagem[i] = new Personagem(personagem[i].posY);
            //aumentar a velocidade das bombas
            velocidade = 5;
            som_explosao.play();
            //controleTela = ("MORTE");
            life ++;

            if(life == 3){
              controleTela = "MORTE"
              pontos = 0;
              life = 0;
              Jogador = new jogador();

            }
          }
      else{
        personagem[i] = new Personagem(personagem[i].posY);
        pontos++;
        velocidade += 1
        som.play();
           
      } 
    }
      //pontução
       text("Pontuação:" + pontos,250,20); 
       text("Bombas:" + life , 100,30)
  
  
  }

}

