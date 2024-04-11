class Segment {
    constructor(p1,p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    // Draw points as a black circuit dot of size 18px. 
    draw(draw, width = 2, colour = "black") {
        draw.beginPath();
        draw.lineWidth = width;
        draw.strokeStyle = colour;
        draw.moveTo(this.p1.x, this.p1.y);
        draw.lineTo(this.p2.x, this.p2.y);
        draw.stroke();
    }
}