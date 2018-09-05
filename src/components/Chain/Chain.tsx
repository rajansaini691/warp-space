import * as React from "react";

import * as Styles from "./CStyle.css"
import { WarpSpace } from "../WarpSpace/WarpSpace";
import { GraphData } from "../Graph/Graph";
import { MenuButton } from "../MenuButton/MenuButton";

export interface ChainProps {
    width: number;
    height: number;
    onWarp: (e: React.MouseEvent<HTMLDivElement>, data: GraphData) => void;
}

/**
 * Stores the chain of transformations, an animate button
 * to animate the final transformation, and a final result matrix
 * representing what is animated
 */
export class Chain extends React.Component<ChainProps> {

    data: GraphData

    constructor(props: ChainProps){
        super(props)

        this.warpSpace = this.warpSpace.bind(this);

        this.data = {
            matrix: [[0, 1], 
                     [-1, 0]]
        }
    }

    warpSpace(e: React.MouseEvent<HTMLDivElement>) {
        this.props.onWarp(e, this.data);
    }

    render() {
        return (
            <div style = {{height: this.props.height, width: this.props.width}} className = {Styles.chain}>
                <WarpSpace height = {this.props.height / 2} onClick = {this.warpSpace}/>
                <MenuButton height = {this.props.height / 2}/>
            </div>
        )
    }

}