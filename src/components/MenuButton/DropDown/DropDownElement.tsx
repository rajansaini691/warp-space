import * as React from "react"
import { dElement, visible } from "./DElementStyles.css";

export interface DropDownElementProps {
    /**
     * The background color of the DropDownElement
     */
    color: string;
    
    /**
     * The text that the DropDownElement displays
     */
    content: string;

    /**
     * Determines whether the DropDownElement should be visible or not
     */
    visible: boolean;
}

/**
 * A DropDownElement appears when the MenuButton is pressed and allows the user to select a type
 * of transformation (like a matrix, vector, inverse matrix, etc.)
 */
export class DropDownElement extends React.Component<DropDownElementProps> {

    constructor(props: DropDownElementProps) {
        super(props);
    }
    
    /**
     * When this element is clicked, it does nothing, except to override the parent's clicking behavior
     * @param e 
     */
    onClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }
    
    render() {
        // If this element is supposed to be visible, then add the visible class to the
        // div element. If not, take it away.
        let className = dElement + ((this.props.visible)? " " + visible : "");
        
        return (
            <div onClick = {this.onClick} className = {className} style = {{
                background: this.props.color
            }}>
                {this.props.content}
            </div>
        )
    }

}