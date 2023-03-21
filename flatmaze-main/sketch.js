//modified flatgame template originally designed by by Lee2sman 2018-2019; leetusman.com
//code=MIT license. artistic work = cc 3.0
//modified by nilson 2023

//first number is X, second number is Y. 0,0 is in top left corner
let itemText = [
  ["I'm sorry.",2650,1700],
  ["I don't believe in souls\nbut I'd spill my gizzard for you.",2650,4000] 
    //no comma after last one!
];


let soundtrack;
var player;
var numOfItems = 4; //set this number to number of items in items folder!
var frame;
var item = [];


function preload(){
    soundtrack = loadSound('assets/soundtrack.mp3');

    item[0] = loadAnimation('assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop1.png','assets/flop2.png')
    item[0].location = {'x':550,'y':2800};

    item[1] = loadAnimation('assets/fish1.png','assets/fish2.png')
    item[1].location = {'x':1950,'y':1660};

    item[2] = loadAnimation('assets/uhoh1.png','assets/uhoh2.png','assets/uhoh3.png')
    item[2].location = {'x':1000,'y':300};
    
    item[3] = loadAnimation('assets/guy1.png','assets/guy2.png')
    item[3].location = {'x':450,'y':300};
}

function setup() {
  createCanvas(2402,2855); //how big is our world? (in pixels!)

  //font size
  textSize(24);

  //create a sprite and add the 3 animations
    
  //pass start location to createSprite
  player = createSprite(300, 300);

  var myAnimation = player.addAnimation('moving', 'assets/player/player1.png', 'assets/player/player2.png', 'assets/player/player3.png', 'assets/player/player4.png');
  myAnimation.frameDelay = 12; //slow down the animation

  //load your background image
  frame = loadImage('assets/background.png');

}

function draw() {

  background(5, 5, 5); //background color
  image(frame, 0, 0,1.5*width,1.5*height);

  for(var i=0; i<numOfItems; i++){
     animation(item[i],item[i].location.x,item[i].location.y);
     item[i].frameDelay = 15;
  }

  movePlayer();

  //set the camera position to the player position
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;

  //limit the player movements
  if(player.position.x < 0)
    player.position.x = 0;
  if(player.position.y < 0)
    player.position.y = 0;
  if(player.position.x > 2*width)
    player.position.x = 2*width;
  if(player.position.y > 2*height)
    player.position.y = 2*height;

  //text for items
  for (var i = 0; i < itemText.length; i++){
    strokeWeight(6);
    stroke(0);
    fill(255,250,200);
    //color of text
    //show all of the text
    text(itemText[i][0],itemText[i][1],itemText[i][2]);
    fill(0);
  }

  //character on the top
  drawSprite(player);
}

function movePlayer(){
  if (keyIsPressed){
    if (!soundtrack.isPlaying()){
      soundtrack.loop();
    }
  }
 if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 15;
  }

  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 15;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 15;
  }
}
