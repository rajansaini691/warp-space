import * as React from "react"
import { matrix, input } from "./MatrixStyles.css";

interface MatrixProps {
    height: number;
}

interface Data {
    matrix: [[number, number], 
             [number, number]];
}

interface MatrixState {
    
}

/**
 * A matrix houses four input boxes, analogous to a 2 by 2 matrix. When a user fills it,
 * it sends its data to the parent in a 2 by 2 array for processing. 
 */
export class Matrix extends React.Component<MatrixProps> {

    state: MatrixState;
    data: Data;

    constructor(props: MatrixProps) {
        super(props);

        /**
         * Initializes matrix to the identity matrix
         */
        this.data = {
            matrix: [[1, 0], [0, 1]]
        }

        this.onChange = this.onChange.bind(this);
    }

    /**
     * Whenever the value of a form element changes, the data variable is updated. This way,
     * other components can access this matrix's contents in the form of a 2 by 2 array. 
     * @param event 
     */
    onChange(event: React.FormEvent<HTMLInputElement>) {
        let value: number = parseInt(event.currentTarget.value);
        
        switch(event.currentTarget.name) {
            case "a":
                this.data.matrix[0][0] = value;
                break;
            case "b":
                this.data.matrix[0][1] = value;
                break;
            case "c":
                this.data.matrix[1][0] = value;
                break;
            case "d":
                this.data.matrix[1][1] = value;
                break;
            default:
                console.error("Name" + event.currentTarget.name + " does not exist. Check Matrix.tsx");
        }

        console.log(this.data.matrix);
    }

    render() {
        return (
            <div style = {{height: this.props.height, width: this.props.height}} className = {matrix} >
                Matrix <br />

                {/* Names correspond to |a b|
                  *                     |c d| 
                  */}
                  
                <input className = {input} type = "number" name = "a" defaultValue = {"1"} onChange={this.onChange} />
                <input className = {input} type = "number" name = "b" defaultValue = {"0"} onChange={this.onChange} />
                <br />
                <input className = {input} type = "number" name = "c" defaultValue = {"0"} onChange={this.onChange} />
                <input className = {input} type = "number" name = "d" defaultValue = {"1"} onChange={this.onChange} />
            </div>
        );
    }


}