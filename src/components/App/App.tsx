import * as React from "react"
import { BoxesSection } from "../BoxesSection/BoxesSection";
import { Graph } from "../Graph/Graph"
import { Chain } from "../Chain/Chain"

export interface AppProps {

}

export class App extends React.Component<AppProps> {

    state: any;

    constructor(props: AppProps) {
        super(props);

        this.state = {width: window.innerWidth, height: window.innerHeight};

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth, 
            height: window.innerHeight, 
            MENU_WIDTH: window.innerWidth / 4,
            CHAIN_HEIGHT: window.innerHeight / 5 
        });
        console.log(this.state.CHAIN_HEIGHT);
    }

    // Needs to control width of the two child elements to allow for
    // dynamic resizing  
    render() {
        return(
            <div style = {{height: '100%', width: '100%'}}>
                <BoxesSection width = {this.state.MENU_WIDTH} />
                <Graph width = {this.state.width - this.state.MENU_WIDTH} height = {this.state.height - this.state.CHAIN_HEIGHT} />
                    <Chain width = {this.state.width - this.state.MENU_WIDTH} height = {this.state.CHAIN_HEIGHT} />
            </div>
        )
    }

}