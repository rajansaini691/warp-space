import * as React from "react"

import * as styles from "./BSource.css"
import { DraggableBox } from "../DraggableBox/DraggableBox";
/**
 * Has absolute appearance; positioning and size depends on the DOM
 */
export interface BSourceProps {
    background: string,
    handleMouseDown: any,
}

/**
 * Button that generates a new Draggable Matrix whenever
 * a user clicks on it.
 */
export class MatrixButton extends React.Component<BSourceProps> {

    currentBox: DraggableBox = null;
    boxes: DraggableBox[];

    constructor(props: BSourceProps) {
        super(props);

        this.state = {
            boxes: 0,
            numChildren: 0
        };
    }

    onRelease(e: React.MouseEvent) {

    }

    render() {
        let property: String = "";
        return (
            <div style={{ background: this.props.background }} 
                className={styles.boxSource} 
                onMouseDown={(e: React.MouseEvent) => this.props.handleMouseDown(e) }>
            </div>);
    }
}