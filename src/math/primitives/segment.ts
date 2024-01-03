import { Drawable } from "./drawable";
import { Point } from "./point";

export class Segment implements Drawable {
    constructor(private readonly point1: Point, private readonly point2: Point) {}

    draw(context: CanvasRenderingContext2D, width = 2, color = "black"): void {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = width;
        context.moveTo(this.point1.x, this.point1.y);
        context.lineTo(this.point2.x, this.point2.y);
        context.stroke();
    }

    equals(segment: Segment) {
        return this.includes(segment.point1) && this.includes(segment.point2);
    }

    get null() {
        return this.point1.equals(this.point2);
    }

    private includes(point: Point) {
        return this.point1.equals(point) || this.point2.equals(point);
    }
}
