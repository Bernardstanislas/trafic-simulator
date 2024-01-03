import { Graph } from "./math/graph";
import { Point } from "./math/primitives/point";

export class GraphEditor {
    private readonly context: CanvasRenderingContext2D;
    private selected : Point | undefined;

    constructor(private readonly canvas: HTMLCanvasElement, private readonly graph: Graph) {
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get canvas context");
        }
        this.context = context;
        this.addEventListeners();
    }

    private addEventListeners() {
        this.canvas.addEventListener("mousedown", (event) => {
            const mouse = new Point(event.offsetX, event.offsetY);
            this.graph.tryAddPoint(mouse);
            this.selected = mouse;
        })
    }

    display() {
        this.graph.draw(this.context);
        if (this.selected) {
            this.selected.draw(this.context, 10, "red");
        }
    }
}
