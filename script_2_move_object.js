function script_2_move_object(){
    // Make a block move across the screen
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillRect(x, 50, 100, 100);
        x++;
        raf = requestAnimationFrame(animate);
    }

    let x = 0;
    animate();
}
