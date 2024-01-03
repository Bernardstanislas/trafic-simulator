import { Drawable } from "./drawable";

export class Point implements Drawable {
    constructor(readonly x: number, readonly y: number) {}

    draw(context: CanvasRenderingContext2D, size = 18, color= "black"): void {
        const rad = size /   2;
        context.beginPath();
        context.fillStyle = color;
        context.arc(this.x, this.y, rad, 0, 2 * Math.PI);
        context.fill();
    }

    equals(point: Point) {
        return this.x === point.x && this.y === point.y;
    }
}
