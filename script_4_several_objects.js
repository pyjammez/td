function script_4_several_objects(){
    // I want to do multiple blocks, so I need to orient myself objectively.
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // handle updating of objects
        object1.refresh();
        object2.refresh();
        object3.refresh();
        
        raf = requestAnimationFrame(animate);
    }

    function Quadragon(size, pos, speed, direction) {
        // defaults
        this.size = size;
        this.x = pos[0];
        this.y = pos[1];
        this.speed = speed;
        this.direction = direction;

        // method to update the position
        this.refresh = function() {
            if (this.x > 600) direction = "left";
            if (this.x < 0) direction = "right";
            if (this.y < 0) direction = "down";
            if (this.y > 600) direction = "up";

            if (direction == "right") this.x = this.x + speed;
            if (direction == "left") this.x = this.x - speed;
            if (direction == "down") this.y = this.y + speed;
            if (direction == "up") this.y = this.y - speed;

            ctx.fillRect(this.x, this.y, this.size[0], this.size[1]);
        }
    }

    let object1 = new Quadragon([100,100], [100,100], 1, 'down');
    let object2 = new Quadragon([100,100], [100,100], 2, 'right');
    let object3 = new Quadragon([50,50], [400,400], 3, 'up');
    animate();
}
