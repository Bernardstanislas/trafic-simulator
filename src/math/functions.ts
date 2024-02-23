import { Point } from "./primitives/point";

export const getNearestPoint = (point: Point, points: Point[]) => {
    let nearestPoint;
    let smallestDistance = Number.MAX_SAFE_INTEGER;
    for (const p of points) {
        const distance = point.distanceSquare(p);
        if (distance < smallestDistance) {
            nearestPoint = p;
            smallestDistance = distance;
        }
    }
    return nearestPoint;
}
