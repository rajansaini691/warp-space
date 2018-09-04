import * as React from "react"

import * as Styles from './GStyle.css'

export interface GraphData {
    matrix: [[number, number], [number, number]]
}

export interface GraphProps {
    width: number;
    height: number;
    data: GraphData
}

export class Graph extends React.Component<GraphProps> {

    /**
     * Allows the canvas to be referenced by other components
     */
    ref: React.RefObject<HTMLCanvasElement>;

    // TODO: Document this better
    /**
     * The local time at the beginning of the animation
     */
    t: number;

    /**
     * Distance, in pixels, from 0 to 1 on the graph. 
     */
    scale: number = 60;

    /**
     * Background color of the graph
     */
    backgroundColor = 'rgb(198, 255, 251)';

    /**
     * Color of the x and y axes
     */
    axisColor = 'white'

    state: any;

    constructor(props: GraphProps){
        super(props);

        this.state = {
            data: this.props.data
        }

        // Allows the canvas to be directly accessed
        this.ref = React.createRef();

        this.update = this.update.bind(this);
    }

    /**
     * Called once the canvas is rendered
     */
    componentDidMount() {
        // Holds a DOM reference to the canvas element
        const canvas = this.ref.current;
        const ctx = canvas.getContext("2d");

        // Resize drawing area to equal size of canvas element
        ctx.canvas.width = canvas.offsetWidth;
        ctx.canvas.height = canvas.offsetHeight;

        let tf = 60;
        this.t = Date.now();
        window.requestAnimationFrame(() => {this.update(this.t, ctx)});

    }

    componentDidUpdate() {
        // Holds a DOM reference to the canvas element
        const canvas = this.ref.current;
        const ctx = canvas.getContext("2d");

        // Resize drawing area to equal size of canvas element
        ctx.canvas.width = canvas.offsetWidth;
        ctx.canvas.height = canvas.offsetHeight;

        // Update t so that the animations can start over
        this.t = Date.now();

        console.log("Current time is: " + this.t);
    }
    
    /**
     * Draws the coordinate plane
     * @param ctx 
     */
    drawGraph(ctx: CanvasRenderingContext2D) {
        // Saves a copy of width and height for dynamic rendering
        let width: number = ctx.canvas.width;
        let height: number = ctx.canvas.height;
        
        // 1. Draw the gridlines
        

        // Draws the horizontal gridlines spreading out from origin, stopping when we reach the top of the
        // window
        for(let i = 0; i < height / (2 * this.scale); i++) {
            // Stores the vertical distance from the origin of each gridline, in pixels
            let location = i * this.scale;
            
            // Gridline properties
            ctx.strokeStyle = this.axisColor;
            ctx.lineWidth = 2;

            // Positive gridlines
            ctx.beginPath();
            ctx.moveTo(0, height / 2 - location);
            ctx.lineTo(width, height / 2 - location);
            ctx.stroke();
            

            // Negative gridlines
            ctx.moveTo(0, height / 2 + location);
            ctx.lineTo(width, height / 2 + location);
            ctx.stroke();

            // y axis labels
            ctx.font = "20px Trebuchet MS";
            ctx.fillStyle = "gray";
            
            if(i != 0) {
                // White outline
                ctx.strokeStyle = this.backgroundColor;
                ctx.lineWidth = 6;
                ctx.strokeText(" " + i, 10 * width / 21, height / 2 - location + 5);
                ctx.strokeText("" + -i, 10 * width / 21, height / 2 + location + 5);

                // Text
                ctx.fillStyle = "gray";
                ctx.fillText(" " + i, 10 * width / 21, height / 2 - location + 5);
                ctx.fillText("" + -i, 10 * width / 21, height / 2 + location + 5);
                
                
            }
        }

        // Vertical gridlines
        for(let i = 0; i < width / (2 * this.scale); i++) {
            // Stores the vertical distance from the origin of each gridline, in pixels
            let location = i * this.scale;
            ctx.strokeStyle = this.axisColor;
            ctx.lineWidth = 2;

            // Positive gridlines
            ctx.beginPath();
            ctx.moveTo(width / 2 - location, 0);
            ctx.lineTo(width / 2 - location, height);
            ctx.stroke();

            // Negative gridlines
            ctx.moveTo(width / 2 + location, 0);
            ctx.lineTo(width / 2 + location, height);
            ctx.stroke();
            ctx.closePath();

            // Axis labels
            ctx.font = "20px Trebuchet MS";
            ctx.textAlign = "center";

            if(i != 0) {
                ctx.strokeStyle = this.backgroundColor;
                ctx.lineWidth = 8;
                ctx.strokeText("" + -i, width / 2 - location, 10 * height / 19);
                ctx.strokeText(" " + i, width / 2 + location, 10 * height / 19);
                
                ctx.strokeStyle = "gray";
                ctx.fillText("" + -i, width / 2 - location, 10 * height / 19);
                ctx.fillText(" " + i, width / 2 + location, 10 * height / 19);
            }
        }
        
        // 2. Drawing the axes
        
        // Axis properties
        ctx.strokeStyle = this.axisColor;

        // Draws the y axis
        ctx.lineWidth = 6;
        
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
        ctx.closePath();

        // Draws the x axis
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2); 
        ctx.stroke();
        ctx.closePath();
        
    }

    /**
     * Updates the screen every frame
     */
    update(t: number, ctx: CanvasRenderingContext2D) {
        // Repaints the screen
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw the graph
        this.drawGraph(ctx);

        let transform: number[][] = this.props.data.matrix;
        
        // Test a full-length animation
        for(let i = -8; i <= 8; i++)
            for(let j = -8; j <= 8; j++) 
                this.animateDot(ctx, transform, Date.now() - this.t, 3000, i, j);

        // Loop again
        window.requestAnimationFrame(() => {this.update(this.t, ctx)});
    }

    /**
     * Converts coordinates on the graph to canvas coordinates
     * @param x 
     * @param y 
     * @returns an array of the form [x, y] containing the given point on the canvas
     */
    convertCoords(ctx: CanvasRenderingContext2D, x: number, y: number) {
        let height: number = ctx.canvas.height;
        let width: number = ctx.canvas.width;

        let xp = x * this.scale + width / 2;
        let yp = -y * this.scale + height / 2;

        return [xp, yp];
        
    }

    componentWillReceiveProps(nextProps: GraphProps) {
        
        console.log(nextProps.data.matrix);
        
        // Check if the matrix is getting updated
        if(this.props.data.matrix != nextProps.data.matrix) {
            // Reset the animation time to the current one, thus resetting the animation
            this.t = Date.now();
        }
    }

    // TODO: Make this accept a generic animation function instead of the current one
    animateDot(ctx: CanvasRenderingContext2D, matrix: number[][], t: number, tf: number, x0: number, y0: number) {
        ctx.fillStyle = 'rgb(31, 110, 124)';

        // Calculate final x and y
        let xf = x0 * matrix[0][0] + y0 * matrix[0][1];
        let yf = x0 * matrix[1][0] + y0 * matrix[1][1];

        // Calculate where in the animation we should be
        let x, y;
        if(t < tf) {
            x = (xf - x0) * t / tf + x0;
            y = (yf - y0) * t / tf + y0;
        } else {
            x = xf;
            y = yf;
        }

        let finalSpot = this.convertCoords(ctx, x, y);

        ctx.beginPath();
        ctx.arc(finalSpot[0], finalSpot[1], 2, 0, Math.PI * 2);
        ctx.fill();
        //ctx.fillRect(finalSpot[0], finalSpot[1], 5, 5);
    }

    render() {
        return(
            <div className = {Styles.container} style = {{width: this.props.width, height: this.props.height}}>
                <canvas ref = {this.ref} className={Styles.graph} > </canvas>
            </div>);
    }
}