import { Point } from "./primitives/point";
import { Segment } from "./primitives/segment";

export class Graph {
    constructor(readonly points : Point[] = [], readonly segments : Segment[] = []) {}

    draw(ctx: CanvasRenderingContext2D) {
        for (const segment of this.segments) {
            segment.draw(ctx);
        }

        for (const point of this.points) {
            point.draw(ctx);
        }
    }

    containsPoint(point: Point) {
        return this.points.some(p => p.equals(point));
    }

    tryAddPoint(point: Point) {
        if (this.containsPoint(point)) {
            return false;
        }

        this.addPoint(point);
        return true;
    }

    tryAddSegment(index1: number, index2: number) {
        const segment = new Segment(this.points[index1], this.points[index2]);
        if (!segment.null && !this.containsSegment(segment)) {
            this.addSegment(segment);
            return true
        }

        return false;
    }

    removeSegment(segment: Segment) {
        const index = this.segments.findIndex(s => s.equals(segment));
        if (index !== -1) {
            this.segments.splice(index, 1);
        }
    }

    removePoint(point: Point) {
        const index = this.points.findIndex(s => s.equals(point));
        if (index !== -1) {
            this.points.splice(index, 1);
        }
        const segmentsToRemove = this.segments.filter(segment => segment.includes(point));
        for (const segment of segmentsToRemove) {
            this.removeSegment(segment);
        }
    }

    dispose() {
        this.points.length = 0;
        this.segments.length = 0;
    }

    private containsSegment(segment: Segment) {
        return this.segments.some(s => s.equals(segment));
    }

    private addSegment(segment: Segment) {
        this.segments.push(segment);
    }

    private addPoint(point: Point) {
        this.points.push(point);
    }

}
