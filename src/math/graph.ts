import { Drawable } from "./primitives/drawable";

export class Graph {
    constructor(private readonly points : Drawable[] = [], private readonly segments : Drawable[] = []) {}

    draw(ctx: CanvasRenderingContext2D) {
        for (const segment of this.segments) {
            segment.draw(ctx);
        }

        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}
