//Create variables here
var dog, happyDog, normalDog, database, food, foodStock;

function preload()
{
 normalDog = loadImage("images/dogImg.png")
 happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500)
  background(46, 139, 87)
  dog = createSprite(350,250,10,10)
  dog.addImage(normalDog)
  dog.scale = 0.2

  database = firebase.database()
  foodStock = database.ref('food');
  foodStock.on("value",readstock);
  
}


function draw() {  
  if(keyWentDown (UP_ARROW)) {
    writeStock(food);
    dog.addImage (dogHappy);
    }

      textSize(10)
      text("note: press up arrow key to feed the dog"+foodStock,10,10)
      fill("white")
      stroke(1)
  
      drawSprites();
  //add styles here

}



