class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment(seg) {
        if(!this.containsSegment(seg) && !seg.p1.equals(p2)) {
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    removeSegment(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1);
    }

    removePoint(point) {
        const segs = this.segmentsFromPoint(point);
        for(const seg of segs) {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1);
    }

    addPoint(point) {
        console.log(points)
        this.points.push(point);
        console.log("Done adding point");
    }

    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    segmentsFromPoint(point) {
        const segs = [];
        for(const seg of this.segments) {
            if(seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    clear() {
        this.points = [];
        this.segments = [];
    }

    draw(draw) {
        // Iterate through segments array and draw each of them onto the canvas
        for(const segment of this.segments) {
            segment.draw(draw);
        }

        // Iterate through points array and draw each of them onto the canvas
        for(const point of this.points) {
            point.draw(draw);
        }
    }
}