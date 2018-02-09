let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  //ret a num between min and max
  return num;
}

function Shape(x, y, velX, velY, exists) {
  this.x = x; //balls x
  this.y = y; //balls y
  this.velX = velX; //balls speed of x
  this.velY = velY; //balls spees of y
  this.exists = exists;
}

function Ball(x, y, velX, velY, color, size, exists) {
  Shape.call(this, x, y, velX, velY);
  this.color = color;
  this.size = size; //balls radius
  this.exists = exists; //was ate or no boolean
}

function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, exists);
  this.color = 'white';
  this.size = 10;
  this.velX = 20;
  this.velY = 20;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.strokeStyle = this.color;
  ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {
  if ((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if ((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if ((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if ((this.y - this.size) <= 0) {
    this.y += this.size;
  }
}

EvilCircle.prototype.setControls = function() {
  let _this = this;
  window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {
      _this.y += _this.velY;
    }
  }
}

EvilCircle.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
      }
    }
  }
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
      }
    }
  }
}

let balls = [];

let evilCircle = new EvilCircle(random(0, width), random(0, height), true);
evilCircle.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 5) {
    let ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
      random(10, 20),
      true
    );
    balls.push(ball);
  }

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  requestAnimationFrame(loop);
}
loop();
