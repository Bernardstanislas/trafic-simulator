import './style.css'

const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
myCanvas.width = 800;
myCanvas.height = 600;

const ctx = myCanvas.getContext('2d');
