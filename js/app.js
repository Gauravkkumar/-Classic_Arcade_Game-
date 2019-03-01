// Enemies our player must avoid
var Enemy = function(xlocation,ylocation,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = xlocation;
    this.y = ylocation;
    this.speed = Math.random() * 80 * speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // It will multiply any movement by the dt parameter
    this.x = this.x + this.speed * dt;
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x >= 505) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Create  player class
// This class has  update(), render() and
// a handleInput() method.
var Player = function() {
  this.x = 200;
  this.y = 392;
  this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function(dt) {
// when you get the river
  if(this.y <= 0) {
    this.x = 200;
    this.y = 392;
    alert("Hurray! You WIN");
  }
  //set the collision condition
  for (var i = 0; i < allEnemies.length; i++) {
    var enemy = allEnemies[i];
    if (enemy.y === this.y && enemy.x + 60 >= this.x - 40  && enemy.x - 60 <= this.x + 40) {
      this.x = 200;
      this.y = 392;
      alert("Better Luck Next Time.Try Again");
    }
  }

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// listen to some keys when you press
Player.prototype.handleInput = function(direction) {
  if (direction === "left" && this.x >= 100) {
    this.x -= 100;
  }
  if (direction === "right" && this.x <= 300) {
    this.x += 100;
  }
  if (direction === "up" ) {
    this.y -= 83;
  }
  if (direction === "down" && this.y <= 309) {
    this.y += 83;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-100,50,5);
var enemy12 = new Enemy(-100,70,7);
var enemy2 = new Enemy(-100,143,8);
var enemy21 = new Enemy(-100,143,6);
var enemy3 = new Enemy(-100,226,2);
var enemy31 = new Enemy(-100,226,4);


var player = new Player();

var allEnemies = [enemy1,enemy12,enemy2,enemy21,enemy3,enemy31];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
