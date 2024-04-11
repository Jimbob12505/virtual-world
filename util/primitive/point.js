class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    // Draw points as a black circuit dot of size 18px. 
    draw(draw, size = 18, colour = "black") {
        const rad = size / 2;
        draw.beginPath();
        draw.fillStyle = colour;
        // draw.arc takes in a start point 0, and an end point Math.PI * 2 = 360º. Draw.arc takes in radians.
        draw.arc(this.x, this.y, rad, 0, Math.PI * 2);
        draw.fill();
    }

    equals(point) {
        return this.x == point.x && this.y == point.y;
    }
}