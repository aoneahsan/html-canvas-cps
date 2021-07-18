window.onload = () => {
  // canvas element
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const ctxWidth = ctx.width;
  const ctxHeight = ctx.height;

  // ball size
  const ballSize = 20;

  // ball x and y position
  const ball = {
    x: ballSize + 5,
    y: ballSize + 5,
  };

  // move speed
  const moveDir = {
    x: 5,
    y: 5,
  };

  // function to draw ball
  const draw = () => {
    // Start Drawing
    ctx.beginPath();

    // create a arc (a object in canvas)
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2, false);

    // fill object with default color
    ctx.fill();
  };

  //   function to move ball
  const moveBall = () => {
    // increment ball.x with moveDir.x
    ball.x += moveDir.x;

    // increment ball.y with moveDir.y
    ball.y += moveDir.y;

    // draw/redraw ball
    draw();
  };

  // initiate draw function
  draw();
};
