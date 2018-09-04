import * as React from "react"

import { Graph } from "../Graph/Graph"
import { GraphData } from "../Graph/Graph"
import { Chain } from "../Chain/Chain"

export interface AppProps {

}

export class App extends React.Component<AppProps> {

    state: any;
    data: GraphData;

    constructor(props: AppProps) {
        super(props);
        
        // Initializes data object so the compiler doesn't complain
        this.data = {
            matrix: [[0, 0], [0, 0]]
        }
        
        this.state = {
            width: 0, 
            height: 0,
            CHAIN_HEIGHT: 0,
            data: this.data
        };

        this.updateDimensions = this.updateDimensions.bind(this);
        this.onWarp = this.onWarp.bind(this);

        
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth, 
            height: window.innerHeight, 
            MENU_WIDTH: 0,
            CHAIN_HEIGHT: window.innerHeight / 5 
        });
    }

    // Sole job should be passing data to Graph
    onWarp(e: React.MouseEvent<HTMLDivElement>, newData: GraphData) {
        this.setState({data: newData})
    }

    render() {
        return(
            <div style = {{height: '100%', width: '100%'}}>
                <Graph width = {this.state.width} height = {this.state.height - this.state.CHAIN_HEIGHT} data = {this.state.data}/>
                <Chain width = {this.state.width} height = {this.state.CHAIN_HEIGHT} onWarp={this.onWarp} />
            </div>
        )
    }

}