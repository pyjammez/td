function script_3_varying_speed(){
    // Make block move across the screen fast then slow then fast.
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillRect(x, 50, 100, 100);
        
        // lets bounce it off the walls to keep it visible
        if (x > 600) direction = "left";
        if (x < 0) direction = "right";
        if (direction == "right") x = x + speed;
        if (direction == "left") x = x - speed;
        raf = requestAnimationFrame(animate);
    }

    // I need some defaults
    let direction = "right";
    let speed = 1;
    let x = 0;

    // change speed every 2 seconds so it's noticable
    setInterval(() => {
        if (speed == 1) speed = 5;
        else if (speed == 5) speed = 1;
    }, 2000);

    animate();
}
