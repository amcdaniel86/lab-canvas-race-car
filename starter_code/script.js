let theCar;
let keysBeingPressed = [];


class Game {
  constructor(){
    this.obstacles = [];
  
    //below is a physics engine, rudimentary, but physics based.
    setInterval(()=>{
      //below erases teh whole canvas
      this.ctx.clearRect(0,0,600,750);

      // below checks to see if car is moving
      this.car.move();

      this.spawnObstacle()

      this.drawEverything();
    },100)
  }

spawnObstacle(){
  let rando = Math.floor(Math.random() * 20)

  if(rando === 5){
    this.obstacles.push(new Obstacle())
  }
}

drawEverything(){
  this.car(draw())
  this.obstacles.forEach((obstacle)=>{
    obstacle.draw();
  })
}




class Obstacle {
  constructor(){
    this.x = Math.floor(Math.random() * 500)
    this.y = Math.floor(Math.random() * 500)
    this.width = Math.floor(Math.random() * 100)
    this.height = Math.floor(Math.random() * 100)
  }

    draw(){
      this.ctx.drawRect(this.x, this.y, this.width, this.height);
    }
  

    moveDown(){
      setInterval(()=>{
        this.y += 5;
      }, 100)
    }

  
}


  document.getElementById("start-button").onclick = function() {
    startGame();
  };

document.onkeydown = function(e) {
  let commands = ['arrowLeft', 'arrowRight', 'arrowUp', 'arrowDown']
  if(commands.includes(e.key)){
    e.preventDefault();
  }
    keysBeingPressed.push(e.key);
  
  
  
      
}

document.onkeyup = function(e)){
  let theIndex = keysBeingPressed.indexOf(e.key)
  if(theIndex != -1){
    keysBeingPressed.splice(theIndex,1)

  }
}


  function startGame() {
    theCar = new Car();
    
    // console.log('starting game');
    //consollog great for teesting in teh console if script is linked with html.

  }


//to make your character move around in a game. know its own width, height, movement properties -MOVEMENT BELOW
  class Car {
    constructor(){
      this.x = 280
      this.y = 650;
      this.width = 45;
      this.height = 85;
      this.imgsrc = 'images/car.png';
      // png has a transparent background, better for moving objects, in game.
      this.ctx = document.getElementById('game-board').getContext('2d');
      setInterval(()=>{

      })

      console.log(this.ctx);
    }


    draw(){
      let theImage = new Image();
      theImage.src = this.imgsrc;

      theImage.onload = function(){
        this.ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
      }
    }
  


    move(direction){

      this.ctx.clearRect(this.x, this.y, this.width, this.height);
      this.y -= 10;
      this.draw();
    }

    if(keysBeingPressed.includes("arrowUp"){
      if(this.canMove(this.x, this.y-10)){
        this.y -= 10;
        
      }
    })
    
    if(keysBeingPressed.includes("arrowDown"){
      this.y += 10;
    })
    
    if(keysBeingPressed.includes("arrowLeft"){
      this.x -= 10;
    })
    
    if(keysBeingPressed.includes("arrowRight"){
      this.x += 10;
    })
    
    
    this.draw();
    
    
  


  }

    canMove(futureX, futureY){
      let result = true;

      if(futureX > 0 && futureX < 550 && futureY > 0 && futureY < 700)
      return true
    } else {
      return false;
    }

      
      
      
      theGame.obstacle.forEach((obstacle)=>{
    
        if(this.x < obstacle.x+obstacle.width && this.x+this.width > obstacle.x && this.y < obstacle.)
        result = false;'
        this.y = obstacle.y + obstacle.height + 5;
      })
      
