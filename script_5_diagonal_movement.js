function script_5_diagonal_movement(){
    // I need the ability to move diagonally to eventually go around obstacles.
    // I'll provide direction as a degree from 0 to 359 with 0 being up.
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        unit1.refresh();
        raf = requestAnimationFrame(animate);
    }

    function unit(size, pos, speed, direction) {
        this.size = size;
        this.x = pos[0];
        this.y = pos[1];
        this.speed = speed;
        this.direction = direction;

        this.refresh = function() {
            if (this.detectCollision()) this.bounce();

            // convert the direction angle to a cartesian coordinate
            this.y = this.y - Math.cos(this.direction * Math.PI / 180) * speed;
            this.x = this.x + Math.sin(this.direction * Math.PI / 180) * speed;

            ctx.fillRect(this.x, this.y, this.size[0], this.size[1]);
        }

        // Detect collision with consideration of the size of the object also
        this.detectCollision = () => 
            (this.x + this.size[0] > 600 && this.direction > 0 && this.direction < 180) ||
            (this.x < 0 && this.direction > 180 && this.direction < 360) ||
            (this.y + this.size[1] > 600 && this.direction > 90 && this.direction < 270) ||
            (this.y < 0 && (this.direction > 270 || this.direction < 90))

        // I want the object to bounce off the wall at a relevant angle.
        // I'm sure there's a better algorithm for this, but it works for now.
        this.bounce = () => {
            if (this.x < 0 || this.x + this.size[0] > 600) {
                this.direction = 360 - this.direction;
            }
            
            if (this.y - this.size[1] < 0 || this.y + this.size[1] > 600) {
                if (this.direction < 180) {
                    this.direction = 180 - this.direction;
                } else {
                    this.direction = 540 - this.direction;
                }
            }
        }
    }

    let unit1 = new unit([50,50], [0,300], 5, 130);
    animate();
}
