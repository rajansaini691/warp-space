import * as React from "react"

import * as Styles from "./WarpSpaceStyles.css"


export interface WarpProps {
    height: number,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * The WarpSpace button triggers an animation when clicked using the new updated data from
 * the transformation chain
 */
export class WarpSpace extends React.Component<WarpProps> {
    state: any;

    constructor(props: WarpProps) {
        super(props);

        this.state = {
            pressed: false,
        }
    }

    render() {
        return (
            <div onClick = {this.props.onClick} className = {Styles.warpButton} style = {{
                height: this.props.height, 
                width: this.props.height, 
            }}>
                {"Warp Space"}
            </div>
        )
    }

}