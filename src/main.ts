import { Graph } from './math/graph';
import { Point } from './math/primitives/point';
import { Segment } from './math/primitives/segment';
import './style.css'

const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
myCanvas.width = 800;
myCanvas.height = 600;

const ctx = myCanvas.getContext('2d');
if (!ctx) {
    throw new Error('No context');
}

const p1 = new Point(200, 200);
const p2 = new Point(500, 200);
const p3 = new Point(400, 400);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p1, p3);
const s3 = new Segment(p1, p4);

const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3]);
graph.draw(ctx);
