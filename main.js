window.onload = () => {
  // canvas element
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const ctxWidth = canvas.width;
  const ctxHeight = canvas.height;

  // ball size
  const ballSize = 20;

  //   ball color
  let ballColor = "red";
  let oldBallColor = "black";

  // ball x and y position
  const ball = {
    x: ballSize + 5,
    y: ballSize + 5,
  };

  //   move speed
  const moveSpeed = 4;

  // move Direction
  const moveDir = {
    x: moveSpeed,
    y: moveSpeed,
  };

  //   ball shadow
  const ballShadowOffset = 10;
  const ballShadow = {
    color: "#222",
    blur: 20,
  };

  // function to draw ball
  const draw = () => {
    // clear canvas before redrawing
    ctx.clearRect(0, 0, ctxWidth, ctxHeight);

    // Start Drawing
    ctx.beginPath();

    // create a arc (a object in canvas)
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2, false);

    // set fill color
    ctx.fillStyle = ballColor;

    // fill object with default color
    ctx.fill();

    // add shadow
    ctx.shadowColor = ballShadow.color;
    ctx.shadowBlur = ballShadow.blur;
    ctx.shadowOffsetX = ballShadowOffset;
    ctx.shadowOffsetY = ballShadowOffset;
  };

  //   function to move ball
  const moveBall = () => {
    // check and change ball direction
    // check x axis
    if (ball.x >= ctxWidth - ballSize || ball.x <= ballSize) {
      moveDir.x *= -1; // point here is just to change the direction of x axis
      changeFillColor();
    }

    // check y axis
    if (ball.y >= ctxHeight - ballSize || ball.y <= ballSize) {
      moveDir.y = -moveDir.y; // point here is just to change the direction of y axis
      changeFillColor();
    }

    // increment ball.x with moveDir.x
    ball.x += moveDir.x;

    // increment ball.y with moveDir.y
    ball.y += moveDir.y;

    // draw/redraw ball
    draw();

    requestAnimationFrame(moveBall);
  };

  const changeFillColor = () => {
    const x1 = Math.floor(Math.random() * 180) + 1;
    const y1 = Math.floor(Math.random() * 180) + 1;
    const x2 = Math.floor(Math.random() * 180) + 1;
    const y2 = Math.floor(Math.random() * 180) + 1;
    const r1 = Math.floor(Math.random() * 20) + 1;
    const r2 = Math.floor(Math.random() * 20) + 1;
    const grd = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);

    oldBallColor = ballColor;
    ballColor = "#" + Math.random().toString(16).substr(-6);
    grd.addColorStop(0, oldBallColor);
    grd.addColorStop(1, ballColor);
  };

  // init animation
  moveBall();
};
