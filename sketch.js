let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(500, 500);
  palavra = marcos();
  musica. loop();
}
function preload(){
  imagem = loadImage("imagem. jpg");
  musica = loadSound("musica. mp3");
}
function draw() {
  chocolate();
  marcos ();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 500, 400)
}

function chocolate() {
 background("violet");
  image(imagem,1000,800)
  fill("black");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function marcos(){
 let palavras = ["SWEET FOX", "NEYMAR", "", "PAIZÃO", "MÃEZINHA"];
 return random(palavras);
}