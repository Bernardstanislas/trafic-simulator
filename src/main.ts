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

const redrawGraph= () => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}

const addRandomPoint = () => {
    const x = Math.random() * myCanvas.width;
    const y = Math.random() * myCanvas.height;
    const p = new Point(x, y);
    graph.tryAddPoint(p);
    redrawGraph();
}

const addRandomSegment = () => {
    const index1 = Math.floor(Math.random() * graph.points.length);
    const index2 = Math.floor(Math.random() * graph.points.length);
    graph.tryAddSegment(index1, index2);
    redrawGraph();
}

const removeRandomPoint = () => {
  if (graph.points.length === 0) {
    console.log('No point to remove');
    return;
  }
  const index = Math.floor(Math.random() * graph.points.length);
  graph.removePoint(graph.points[index]);
  redrawGraph();
}

const removeRandomSegment = () => {
  if (graph.segments.length === 0) {
    console.log('No segment to remove');
    return;
  }
  const index = Math.floor(Math.random() * graph.segments.length);
  graph.removeSegment(graph.segments[index]);
    redrawGraph();
}

const removeAll = () => {
  graph.dispose();
  redrawGraph();
}

declare global {
  function addRandomPoint(): void;
  function addRandomSegment(): void;
  function removeRandomPoint(): void;
  function removeRandomSegment(): void;
  function removeAll(): void;
}
globalThis.addRandomPoint = addRandomPoint;
globalThis.addRandomSegment = addRandomSegment;
globalThis.removeRandomPoint = removeRandomPoint;
globalThis.removeRandomSegment = removeRandomSegment;
globalThis.removeAll = removeAll;
