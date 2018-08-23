import * as React from "react";

import * as Styles from "./CStyle.css"

export interface ChainProps {
    width: number;
    height: number;
}

/**
 * Stores the chain of transformations, an animate button
 * to animate the final transformation, and a final result matrix
 * representing what is animated
 */
export class Chain extends React.Component<ChainProps> {

    constructor(props: ChainProps){
        super(props)
    }

    render() {
        return (<div style = {{height: this.props.height, width: this.props.width}} className = {Styles.chain}> </div>)
    }

}