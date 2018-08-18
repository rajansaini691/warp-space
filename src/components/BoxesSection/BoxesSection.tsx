import * as React from "react";

import * as styles from "./BSection.css"
import { DraggableBox } from "../DraggableBox/DraggableBox";
import { DraggableData } from "react-draggable";

export interface BoxesSectionProps {

}

/**
 * Houses all of the matrices on the left side of the screen, covering roughly a quarter of it.
 * It also determines whether the boxes are returned or can stay.
 */
export class BoxesSection extends React.Component<BoxesSectionProps> {

    boxSection: any;

    constructor(props: BoxesSectionProps) {
        super(props);

        this.state = {
            
        }
        
        // Method bindings
        this.canRemain = this.canRemain.bind(this);
    }

    /**
     * If a box is inside this component, it should snap back. Otherwise,
     * we should add a new box where it came from.
     * It returns true if the box must snap and false if it can remain. 
     */
    canRemain(data: DraggableData): boolean {
        // Captures the box's coordinates
        let x = data.x;
        let y = data.y;

        // Logs where the box landed
        console.log("Mouse released at " + x + ", " + y);
        
        // Checks if the box is outside of this component's boundary
        if(x > this.boxSection.clientWidth) {
            // Allows the box to remain where it is
            console.log("Can remain");
            return true;
        }

        return false;
    }

    render() {
        return (
            <div className={styles.boxesSection} ref = {boxSection => {this.boxSection = boxSection}}>
                <DraggableBox top = {100} left = {100} resolveFinalPosition={this.canRemain} id={1}/>
                <DraggableBox top = {300} left = {100} resolveFinalPosition={this.canRemain} id={2}/>
            </div>);
    }
}