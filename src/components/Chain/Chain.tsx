import * as React from "react";

import * as Styles from "./CStyle.css"
import { WarpSpace } from "../WarpSpace/WarpSpace";
import { GraphData } from "../Graph/Graph";
import { MenuButton } from "../MenuButton/MenuButton";
import { Matrix } from "../Matrix/Matrix";
import { matrix } from "../Matrix/MatrixStyles.css";

export interface ChainProps {
    width: number;
    height: number;
    onWarp: (e: React.MouseEvent<HTMLDivElement>, data: GraphData) => void;
}

/**
 * Stores the different types of objects that can go into the chain for consistency
 */
enum chainTypes {"matrix", "vector"}

// TEST COmment
interface ChainState {
    // Chain of Strings
    chain: chainTypes[];
}

/**
 * Stores the chain of transformations, an animate button
 * to animate the final transformation, and a final result matrix
 * representing what is animated
 */
export class Chain extends React.Component<ChainProps> {

    data: GraphData;
    state: ChainState;

    constructor(props: ChainProps){
        super(props);

        this.warpSpace = this.warpSpace.bind(this);

        this.data = {
            matrix: [[0, 1], 
                    [-1, 0]]
        }

        this.state = {
            chain: [chainTypes.matrix]
        }

        this.addElementToChain = this.addElementToChain.bind(this);
    }

    warpSpace(e: React.MouseEvent<HTMLDivElement>) {
        this.props.onWarp(e, this.data);
    }

    /**
     * Adds an element to the chain, depending on the type
     */
    addElementToChain(type: string) {
        console.log("Added a new " + type);
        
        this.setState((prevState: ChainState) => ({
            chain: [...prevState.chain, chainTypes.matrix]
        }));
    }

    render() {
        // Chain, in this case, is the actual chain of matrices that will be rendered to the DOM
        let chain: JSX.Element[] = [];

        for(let i = 0; i < this.state.chain.length; i++) {
            chain.push(<Matrix height = {this.props.height / 2} key = {i} />)
        }

        console.log("The length is " + this.state.chain.length);

        return (
            <div style = {{height: this.props.height, width: this.props.width}} className = {Styles.chain}>
                <WarpSpace height = {this.props.height / 2} onClick = {this.warpSpace}/>
                <MenuButton onDropdownClick = {this.addElementToChain} height = {this.props.height / 2}/>
                {chain}
            </div>
        )
    }

}
