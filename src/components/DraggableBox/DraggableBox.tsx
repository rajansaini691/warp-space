import * as React from "react";
import Draggable, { DraggableEventHandler, DraggableData } from "react-draggable"

import * as styles from './DBoxStyles.css'


/**
 * Customizable initial properties for a box: currently only initial location
 */
export interface BoxProps {
    // Dimension
    top: number,
    left: number,

    /**
     *  Function to finalize the final position (returns whether the final position is legitimate or not) 
     */ 
    resolveFinalPosition: (data: DraggableData) => boolean;

    // Unique key
    id: number
}

/**
 * A Box is a renderable object that has absolute dimension and position. It can also be colored.
 */
export class DraggableBox extends React.Component<BoxProps> {

    // Difference in coordinates between user's mouse and the box; this should be preserved
    mouseX: number = 0;
    mouseY: number = 0;

    // State
    state: any;

    constructor(props: BoxProps) {
        super(props);

        this.state = {
            position: {                                        // Box's final position
                x: this.props.left,
                y: this.props.top
            }
        };

        // Method bindings
        this.onStop = this.onStop.bind(this);

    }
    
    /**
     * Called when the box lands
     */
    onStop(e: Event, data: DraggableData) {
        // Can the box remain where it landed?
        let x = data.x;
        let y = data.y;

        // Checks if the parent approves of the change
        if(this.props.resolveFinalPosition(data)) {
            // Logs the position change
            console.log("Updating position to " + x + ", " + y);
            
            // Updates the final position
            this.setState({
                position: {
                    x: x,
                    y: y
                }
            })
        }
    }


    render() {

        return (
            <Draggable position = {this.state.position} onStop = {this.onStop}>
                <div className={styles.draggableBox} ></div>
            </Draggable>
        );
    }

}