let palavra;
let randomCor;

function setup() {
  createCanvas(400, 400);
  palavra = friendsAleatorio()
    }

function friendsAleatorio() {
  let palavras = ["FRIENDS", "Ross", "Chandler", "Joey", "Monica", "Rachel", "Phoebe"];
  return random(palavras)}

function inicializaCores(){
  background("black");
  randomCor = color(random(0, 255), random(0, 255), random(0, 255));
  fill(randomCor);
  textSize(75);
  textAlign(CENTER, CENTER);
 }

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial;                 
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width)
  text(texto,200,200);
  
}