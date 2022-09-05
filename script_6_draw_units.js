function script_6_draw_units() {
    // Create my own design
    let spiderUnit = new Spider([50,50], [100,100]);
    spiderUnit.draw();

    // A spider I found on google
    let codepenSpiderUnit = new CodepenSpider([50,50], [300,100]);
    codepenSpiderUnit.draw();

    // Using an image
    const img = new Image();
    img.src = "spider.png";
    img.onload = function(){
        ctx.drawImage(img, 50, 200);
    }

    // Another image
    const img2 = new Image();
    img2.src = "castle.png";
    img2.onload = function(){
        ctx.drawImage(img2, 300, 200);
    }

    appendCodeToPre([Script6Unit, Spider, CodepenSpider]);
}

// I should change to classes now, but they have to be unique per script.
class Script6Unit {
    constructor(size, pos) {
        this.size = size;
        this.x = pos[0];
        this.y = pos[1];
    }
}

// Draw a spider facing upwards first.
class Spider extends Script6Unit {
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size[0], 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(this.x - 10, this.y - 30);
        ctx.arc(this.x - 15, this.y - 30, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(this.x + 20, this.y - 30);
        ctx.arc(this.x + 15, this.y - 30, 5, 0, Math.PI * 2, true); // Right eye
        ctx.moveTo(this.x - 50, this.y - 10);
        ctx.lineTo(this.x-80, this.y-30); // left leg1
        ctx.moveTo(this.x - 50, this.y +10);
        ctx.lineTo(this.x-80, this.y+30); // left leg2
        ctx.moveTo(this.x - 50, this.y);
        ctx.lineTo(this.x-90, this.y); // left leg3
        ctx.moveTo(this.x + 50, this.y - 10);
        ctx.lineTo(this.x+80, this.y-30); // right leg1
        ctx.moveTo(this.x+50, this.y +10);
        ctx.lineTo(this.x+80, this.y+30); // right leg2
        ctx.moveTo(this.x+50, this.y);
        ctx.lineTo(this.x+90, this.y); // right leg3
        ctx.stroke();
    }
}

// https://codepen.io/mzsutcliffe/pen/QWzPNe
class CodepenSpider extends Script6Unit {
    draw() {
        let x = this.x;
        let y = this.y;

        // Draw the spider
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x,y - 10,15,0,2 * Math.PI);
        ctx.arc(x,y + 12,20,0,2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        // Left Legs
        ctx.moveTo(x,y);
        ctx.lineTo(x-30,y-30);
        ctx.lineTo(x-30,y-35);
        ctx.moveTo(x,y);
        ctx.lineTo(x-30,y-10);
        ctx.lineTo(x-40,y-10);
        ctx.moveTo(x,y);
        ctx.lineTo(x-30,y+10);
        ctx.lineTo(x-40,y+10);
        ctx.moveTo(x,y);
        ctx.lineTo(x-30,y+30);
        ctx.lineTo(x-30,y+35);
        // Right legs
        ctx.moveTo(x,y);
        ctx.lineTo(x+30,y-30);
        ctx.lineTo(x+30,y-35);
        ctx.moveTo(x,y);
        ctx.lineTo(x+30,y-10);
        ctx.lineTo(x+40,y-10);
        ctx.moveTo(x,y);
        ctx.lineTo(x+30,y+10);
        ctx.lineTo(x+40,y+10);
        ctx.moveTo(x,y);
        ctx.lineTo(x+30,y+30);
        ctx.lineTo(x+30,y+35);

        ctx.stroke();
    }
}