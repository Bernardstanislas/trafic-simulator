import { Drawable } from "./drawable";

export class Point implements Drawable {
    constructor(readonly x: number, readonly y: number) {}

    draw(context: CanvasRenderingContext2D, {size = 18, color= "black", outline = false} = {}): void {
        const rad = size /   2;
        context.beginPath();
        context.fillStyle = color;
        context.arc(this.x, this.y, rad, 0, 2 * Math.PI);
        context.fill();
        if (outline) {
            context.beginPath();
            context.lineWidth = 2;
            context.strokeStyle = "yellow";
            context.arc(this.x, this.y, rad * 0.6, 0, 2 * Math.PI);
            context.stroke();
        }
    }

    equals(point: Point) {
        return this.x === point.x && this.y === point.y;
    }

    distanceSquare(point: Point) {
        return (this.x - point.x) ** 2 + (this.y - point.y) ** 2;
    }

    distance(point: Point) {
        return Math.sqrt(this.distanceSquare(point));
    }
}
