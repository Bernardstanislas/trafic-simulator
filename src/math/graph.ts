import { Point } from "./primitives/point";
import { Segment } from "./primitives/segment";

export class Graph {
    constructor(private readonly points : Point[] = [], private readonly segments : Segment[] = []) {}

    draw(ctx: CanvasRenderingContext2D) {
        for (const segment of this.segments) {
            segment.draw(ctx);
        }

        for (const point of this.points) {
            point.draw(ctx);
        }
    }

    addPoint(point: Point) {
        this.points.push(point);
    }
}
