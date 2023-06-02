//var []:para lista
//var = criar uma variavel
//criação das variaveis
var fundo;
var personagem = [];
var imgPersonagem =[];
var Jogador;
var pontos = 0; 
var velocidade = 5;
var som;
var imgAbertura;
var controleTela = "INICIO";
var imgGameOver;
var life = 0;

//inserir imagens
function preload(){
  fundo = loadImage('jogo/imgJogo/fundo.jpg');
   imgPersonagem[0]= loadImage('jogo/imgJogo/kuririn.png');
    imgPersonagem[1]= loadImage('jogo/imgJogo/Goku.png');
    imgPersonagem[2]= loadImage('jogo/imgJogo/bulma.png');
  imgPersonagem[3]= loadImage('jogo/imgJogo/bomba.png');
  //inserir som
  som_explosao = loadSound("jogo/som/bsong.mp3");
  som = loadSound("jogo/som/msong.mp3");



  //aparecer os personagem
  personagem[0] = new Personagem();
  personagem[1] = new Personagem();
  personagem[2] = new Personagem();
  Jogador= new jogador();
  
  imgAbertura = loadImage("jogo/imgJogo/Abertura.gif");
  imgGameOver = loadImage("jogo/imgJogo/game-over.gif")
}

//define tamanho do jogo
function setup() {
  createCanvas(600, 400).parent("jogo");

}
//desenha o jogo, o fundo, as posições, os movimentos
function keyPressed(){
  if(keyCode==13){
    controleTela = "jogo";
  }
}
function draw(){
  if (controleTela == "INICIO"){
  mostraAbertura();
  }
  else{
    executarJogo();
  } if (controleTela == "MORTE"){
    mostraFinal();
  }
    }

  
  