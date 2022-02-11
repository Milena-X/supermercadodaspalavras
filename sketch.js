//inicialização
tela =1;

//variaveis tela 1
largura=237;
altura = 70;
x1=207;
y1=160;
x2=207;
y2=240;
x3=207;
y3=320
largura1 =220;
altura1 = 70;
x5=420;
y5=370;

//variaveis do botão voltar ao menu
largura2=150;
altura2 = 30;
x4=485;
y4=10;


function setup() {
  createCanvas(650, 450);
}

function draw() {
  //Estrutura de transição de telas
  if(tela==1){
    menu() //chamando a função menu
  }
  if(tela==2){
    fase1(); //chamando a função fase1
  }
  if(tela==3){
    instrucoes();//Chamando as instrucões 
  }
  if(tela==4){
    creditos();//Chamando os créditos
  }
  if(tela==5){
    parabensproxfase(); //Chamando a tela de parabens
  }
  if(tela==6){
    tentednv(); //chamando a tela de tente novamente
  }
  if(tela==7){
    fase2(); //chamando a fase 2
  }
  if(tela==8){
    fase3(); //chamando a fase3
  }
  if(tela==9){
    final(); //chamando o final do jogo
  }
}
//MENU
function menu(){
  background(164,222,2);
  textAlign(CENTER);
  image(imgfundo,0,0,650,450); //adicionando img
   
  //TÍTULO
  textSize(65);
  stroke(13,26,129);
  strokeWeight(5);
  fill(255,255,255);
  textStyle(BOLDITALIC);
 // text("SUPERMERCADO",325,115);
  textSize(25);
  textStyle(NORMAL);
  strokeWeight(1);

  //Botão JOGAR com eventos
  if(mouseX>x1 && mouseX<x1+largura && mouseY>y1 &&     mouseY<y1+altura){
    fill(0,75,255);
  }else{
    fill(13,26,129);
  }
  stroke(240);
  rect(x1,y1,largura,altura,13);
  fill(240);
  text("JOGAR",325,205);
    
  //Botão INSTRUÇÕES com eventos
  stroke(240);
  if(mouseX>x2 && mouseX<x2+largura && mouseY>y2 &&     mouseY<y2+altura){
    fill(0,75,255);
  }else{
    fill(13,26,129);
  }
  rect(x2,y2,largura,altura,13);
  fill(240);
  text("INSTRUÇÕES",325,285);
    
  //Botão CRÉDITOS com eventos
  stroke(240);
  if(mouseX>x3 && mouseX<x3+largura && mouseY>y3 &&     mouseY<y3+altura){
    fill(0,75,255);
  }else{
    fill(13,26,129);
  }
  rect(x3,y3,largura,altura,13);
  fill(240);
  text("CRÉDITOS",325,365);
}
//BOTÃO DO MENU
function botaovoltar(){ //botão para o menu do jogo
  //Eventos do botão
  if(mouseX>x4 && mouseX<x4+largura2 && mouseY>y4 &&     mouseY<y4+altura2){
    fill(0,75,255);
    if(mouseIsPressed){
      tela=1;
    }
  }else{
    fill(13,26,129);
  }
  rect(x4,y4,largura2,altura2,5);
  fill(240);
  textSize(20);
  text("Menu do jogo",560,30);
}

//JOGAR - Tela de fundo das fases
function jogar(){
  
  //Imagens
  image(prateleira,0,0,650,450);
  
  //Botão de Comprar (apenas estilização)
  if(mouseX>x5 && mouseX<x5+largura1 && mouseY>y5 &&     mouseY<y5+altura1){
    fill(0,75,255);
  }else{
    fill(13,26,129);
  }
  stroke(240);
  rect(x5,y5,largura1,altura1,13);
  textSize(35);
  fill(240);
  text("COMPRAR",530,415);
  
}

//INSTRUÇÕES
function instrucoes(){
  //Estilização de titulos e imagens
  background(255,255,255);
  fill(255,255,255);
  image(imgft1,0,0,650,450);
  rect(25,110,600,270,13);
  fill(13,26,129);
  stroke(255);
  strokeWeight(3);
  textStyle(BOLD);
  textSize(30);
  text("INSTRUÇÕES",325,150);
    
  //Estilização de textos
  fill(240);
  strokeWeight(4);
  textStyle(BOLD);
  textSize(25);
  textAlign(LEFT);
  fill(13,26,129);
  text("1 - Observe a lista de compras \n2 - Selecione os itens da prateleira que estão\nna lista \n3 - Clique em comprar \n4 - Se sua compra estiver correta você irá \npassar de nível, caso contrário refaça a compra",45,180);
  textAlign(CENTER);
  strokeWeight(1);
    
  //chamando a função do botão para o menu
  botaovoltar();
}

//CRÉDITOS
function creditos(){
  background(255,255,255);
  
    
  //Titulo
  fill(13,26,129);
  textSize(30);
  textStyle(BOLDITALIC);
  text("CRÉDITOS",90,35);
  textStyle(NORMAL);
    
  //Texto Milena
  //balão
  fill(13,26,129);
  rect(340,50,290,390,13);
  //texto
  fill(255,255,255);
  stroke(240);
  textSize(18);
  textAlign(LEFT);
  text("PROGRAMADORA: \nMilena Eduarda de Araújo Xavier \n-----------------------------------------------\nEstudante do curso de Ciências e     \nTecnologias, na Universidade \nFederal do Rio Grande do Norte",350,255);
  textAlign(CENTER);
  strokeWeight(1);
  //foto milena
  image(ftmilena,330,1,300,415);
  
  
  //Texto Karen
  //balão
  fill(13,26,129);
  rect(7,50,317,390,13);
  //texto
  fill(255,255,255);
  stroke(240);
  textSize(18);
  textAlign(LEFT);
  text("EDUCADORA: \nKaren Christina Pinheiro do Santos\n -------------------------------------------------\nFormada em Pedagogia na     \nUniversidade Federal do Rio Grande \ndo Norte – UFRN. Pós-graduação em \nTecnologia Educacional, em Educa- \nção, Estudos da Linguagem e \nPsicopedagogia",10,255);
  textAlign(CENTER);
  strokeWeight(1);
  //foto Karen
  image(ftkaren,7,5,300,400);
    
    //chamando a função do botão para o menu
    botaovoltar(); 
}


//Variaveis usadas na lógica de verificação
cont = 0; //Contador de quantos itens o jogador comprou
cont2 =0; //Vai verificar se o jogador comprou itens iguais
var correto = 0; //Numeros de acertos
var errado=0; //Numero de erros
var msg; //Guarda a msg exposta caso o jogador perca ou passe de fase

//Fase 1
function fase1(){
  jogar(); 
  styleprateleira1();
}
//Prateleira fase 1
var resprat1=[]; //Vetor que guarda as respostas do jogador
var gabarito1 = ["Queijo","Melancia","Arroz"]; //Vetor de gabarito
//Estilização da prateleira
function styleprateleira1(){
  //Itens da Prateleira
  image(lista1,410,15,220,340);
  //1 linha
  if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Quejo",87,70);
  
  if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melancia",200,70);
  
  if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Arrois",310,70);
  
  //2ª linha
  if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melamcia",87,130);
  
  if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Arroz",200,130);
  
  if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Quego",310,130);
  
  //3ªlinha
  if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Aroz",87,190);
  
  if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melamsia",200,190);
  
  if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Queijo",310,190);
  
}
//Código com a lógica de funcionamento da prateleira
function prateleira1(){
  if(tela==2){
    
    //Ifs que adicionam os itens que o jogador escolheu no vetor de respostas e contam quantas escolhas ele fez
    if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
      resprat1.push("Quejo");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
      resprat1.push("Melancia");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
      resprat1.push("Arrois");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
      resprat1.push("Melamcia");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
      resprat1.push("Arroz");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
      resprat1.push("Quego");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
      resprat1.push("Aroz");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
      resprat1.push("Melamsia");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
      resprat1.push("Queijo");
      console.log(resprat1);
      cont++;
    }
    //Botão comprar - Lógica
   if(mouseX>x5 && mouseX<x5+largura1 && mouseY>y5 &&        mouseY<y5+altura1){
      if(cont==3){ //Verifica se o jogador escolheu 3 itens
        for(x=0;x<3;x++){
          for(y=0;y<3;y++){
            if(resprat1[x]===gabarito1[y]){ 
              correto++; //Verifica se as respostas são ao gabarito
            }
            if(resprat1[x]===resprat1[y]){
              cont2++; //Verifica se as respostas se repetem
            }
          }
        }
        errado=cont-correto;
        msg = "Acertos:"+correto+"\nErros:"+errado; 
      }      
      else{
        msg = "Você comprou um número de itens\ndiferente da lista";
      }
      verificaçãofase(); //Começa a verificação da fase
    }
  }
}


//Fase 2 - Estrutura semelhante a fase 1
function fase2(){
  jogar();
  styleprateleira2();
}
//Prateleira fase 2
var resprat2=[];
var gabarito2 = ["Mel","Café","Feijão"];
//Estilização da prateleira
function styleprateleira2(){
  //Itens da Prateleira
  image(lista2,410,15,220,340);
  //1 linha
  if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Mel",87,70);
  
  if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Fejão",200,70);
  
  if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Cafe",310,70);
  
  //2ª linha
  if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Cáfé",87,130);
  
  if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Meu",200,130);
  
  if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Feijão",310,130);
  
  //3ªlinha
  if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Feijãu",87,190);
  
  if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Café",200,190);
  
  if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Méu",310,190);
  
}
//Código com a lógica de funcionamento da prateleira
function prateleira2(){
  if(tela==7){
    
    if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
      resprat2.push("Mel");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
      resprat2.push("Fejão");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
      resprat2.push("Cafe");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
      resprat2.push("Cáfé");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
      resprat2.push("Meu");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
      resprat2.push("Feijão");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
      resprat2.push("Feijãu");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
      resprat2.push("Café");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
      resprat2.push("Méu");
      console.log(resprat2);
      cont++;
    }
    //botão comprar
    else if(mouseX>x5 && mouseX<x5+largura1 && mouseY>y5 &&        mouseY<y5+altura1){
      // verificar se o gabarito é igual aos selecionados
      if(cont==3){
        for(x=0;x<3;x++){
          for(y=0;y<3;y++){
            if(resprat2[x]===gabarito2[y]){
              correto++;
            }
            if(resprat2[x]===resprat2[y]){
              cont2++;
            }
          }
        }
        errado=cont-correto;
        msg = "Acertos:"+correto+"\nErros:"+errado;
      }      
      else{
        msg = "Você comprou um número de itens\ndiferente da lista";
      }
      verificaçãofase();
    }
  }
}


//Fase 3 - Estrutura semelhante a fase 1
function fase3(){
  jogar();
  styleprateleira3();
}
//Prateleira fase 3
var resprat3=[];
var gabarito3 = ["Acerola","Cuscuz","Macaxeira"];
//Estilização da prateleira
function styleprateleira3(){
  //Itens da Prateleira
  image(lista3,410,15,220,340);
  //1 linha
  if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Cuscus",87,70);
  
  if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Acerrola",200,70);
  
  if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Macacheira",310,70);
  
  //2ª linha
  if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Macaxera",87,130);
  
  if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Acerola",200,130);
  
  if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Cuzcuz",310,130);
  
  //3ªlinha
  if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(40,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Cuscuz",87,190);
  
  if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(150,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Aserrola",200,190);
  
  if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
    fill(13,26,129);
  }else{
    fill(0,75,255);
  }
  stroke(240);
  rect(260,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Macaxeira",310,190);
  
}
//Código com a lógica de funcionamento da prateleira
function prateleira3(){
  if(tela==8){
    
    if(mouseX>40 && mouseX<140 && mouseY>45 && mouseY<85){
      resprat3.push("Cuscus");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>45 && mouseY<85){
      resprat3.push("Acerrola");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>45 && mouseY<85){
      resprat3.push("Macacheira");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>105 && mouseY<145){
      resprat3.push("Macaxera");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>105 && mouseY<145){
      resprat3.push("Acerola");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>105 && mouseY<145){
      resprat3.push("Cuzcuz");
      cont++;
    }else if(mouseX>40 && mouseX<140 && mouseY>165 && mouseY<195){
      resprat3.push("Cuscuz");
      cont++;
    }else if(mouseX>150 && mouseX<250 && mouseY>165 && mouseY<195){
      resprat3.push("Aserrola");
      cont++;
    }else if(mouseX>260 && mouseX<360 && mouseY>165 && mouseY<195){
      resprat3.push("Macaxeira");
      console.log(resprat3);
      cont++;
    }
    //botão comprar
    else if(mouseX>x5 && mouseX<x5+largura1 && mouseY>y5 &&        mouseY<y5+altura1){
      // verificar se o gabarito é igual aos selecionados
      if(cont==3){
        for(x=0;x<3;x++){
          for(y=0;y<3;y++){
            if(resprat3[x]===gabarito3[y]){
              correto++;
            }
            if(resprat3[x]===resprat3[y]){
              cont2++;
            }
          }
        }
        errado=cont-correto;
        msg = "Acertos:"+correto+"\nErros:"+errado;
      }      
      else{
        msg = "Você comprou um número de itens\ndiferente da lista";
      }
      verificaçãofase();
    }
  }
}


//Verifica se passou de fase
var fase =1;
function verificaçãofase(){
  //Apaga o vetor de respostas para o jogador poder jogar novamente 
  if(fase==1){
      while(resprat1.length){ 
        resprat1.pop();
      }
  }else if(fase==2){
    while(resprat2.length){
        resprat2.pop();
      }
  }else if(fase==3){
    while(resprat3.length){
        resprat3.pop();
      }
  }
  
  //Confere se o jogador acertou
  if(correto==3 && errado==0 && cont==3 && cont2==3){
    console.log(msg);
    cont =  0;
    cont2 = 0;
    correto = 0;
    errado = 0;
    fase++;
    tela=5;
  }else if(cont2>3){ //Confere se o jogador repetiu itens
    msg="Você comprou itens repetidos"
    console.log(msg);
    cont = 0;
    cont2 =0;
    correto = 0;
    errado=0;
    tela=6;
  }else{ //Caso o jogador tenha escolhido um numero diferente de itens
    console.log(msg);
    cont = 0;
    cont2 =0;
    correto = 0;
    errado=0;
    tela=6;
  }
  
}
//tela de parabens
function parabensproxfase(){
  //Texto de parabéns
  background(10,75,255);
  stroke(240);
  fill(255,255,255);
  rect(90,70,500,120,10);
  fill(13,20,128);
  textSize(40);
  text("PARABÉNS!!:D\n VOCÊ PASSOU DE FASE",330,120);
  
  //texto 
  fill(255,255,255);
  textSize(30);
  text(msg,330,240);
  
  //Botão continuar
  if(mouseX>180 && mouseX<480 && mouseY>330 && mouseY<390){
    fill(13,26,129);
  }else{
    fill(255,255,255);
  }
  rect(180,330,300,60,14)
  textSize(40);
  fill(0,75,255);
  text("Próxima Fase",330,370);
  
}
//tela tente dnv
 function tentednv(){
  //Texto tente dnv
  background(10,75,255);
  stroke(240);
  fill(255,255,255);
  rect(90,70,500,120,10);
  fill(13,20,128);
  textSize(40);
  text("OPSSS!! :( \n TENTE NOVAMENTE",330,120);
  
  //texto 
  fill(255,255,255);
  textSize(30);
  text(msg,330,240);
   
  //Botão continuar
  if(mouseX>180 && mouseX<480 && mouseY>330 && mouseY<390){
    fill(13,26,129);
  }else{
    fill(255,255,255);
  }
  rect(180,330,300,60,14)
  textSize(40);
  fill(0,75,255);
  text("Continuar",330,370);
}
function final(){
  //Texto de parabéns
  background(10,75,255);
  stroke(240);
  fill(255,255,255);
  rect(90,70,500,120,10);
  fill(13,20,128);
  textSize(40);
  text("PARABÉNS!!:D\n VOCÊ VENCEU O JOGO!",330,120);
}
function mouseClicked(){
  
  //Botões do menu
  if(tela==1){
    //Botão jogar
    if(mouseX>x1 && mouseX<x1+largura && mouseY>y1 &&     mouseY<y1+altura){
      tela=2;
    }
    //Botão instruções
    if(mouseX>x2 && mouseX<x2+largura && mouseY>y2 &&     mouseY<y2+altura){
      tela=3
    }
    //Botão Créditos
    if(mouseX>x3 && mouseX<x3+largura && mouseY>y3 &&     mouseY<y3+altura){
      tela=4;
    }
  }
  else if(tela==2){
    prateleira1();
  }
  //Botão proxfase
  else if(tela==5){
    if(mouseX>180 && mouseX<480 && mouseY>330 && mouseY<390){
      if(fase==1){
        tela=2;
      }else if(fase==2){
        tela=7;
      }else if(fase==3){
        tela=8;
      }else if(fase==4){
        tela=9;
      }
    }
  }
  
  //Botão tentednv
  else if(tela==6){
    if(mouseX>180 && mouseX<480 && mouseY>330 && mouseY<390){
      if(fase==1){
        tela=2;
      }else if(fase==2){
        tela=7;
      }else if(fase==3){
        tela=8;
      }
    }
  }
  else if(tela==7){
    prateleira2();
  }
  else if(tela==8){
    prateleira3();
  }
}

//Carregando imagens
let imgfundo;
let imgft1;
let prateleira;
let lista1;
let lista2;
let lista3;
let ftmilena;
let ftkaren;
let fundocred;
function preload(){
  imgfundo = loadImage("imgfundo.png");
  imgft1 = loadImage("imgft1.png");
  prateleira = loadImage("prateleira1.png");
  lista1 = loadImage("lista1.jpg");
  lista2 = loadImage("lista2.png");
  lista3 = loadImage("lista3.png");
  ftmilena = loadImage("ftmilena.png");
  ftkaren = loadImage("ftkaren.png");
  fundocred = loadImage("fundocred.png")
}