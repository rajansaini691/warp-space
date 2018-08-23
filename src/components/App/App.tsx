import * as React from "react"
import { BoxesSection } from "../BoxesSection/BoxesSection";
import { Graph } from "../Graph/Graph"

export interface AppProps {

}

export class App extends React.Component<AppProps> {

    state: any;

    constructor(props: AppProps) {
        super(props);

        this.state = {width: 1, height: 1}
    }

    componentDidMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight})
        console.log(this.state.width);
    }

    // Needs to control width of the two child elements to allow for
    // dynamic resizing  
    render() {
        return(
            <div style = {{height: '100%', width: '100%'}}>
                <BoxesSection width = {300} />
                <Graph width = {this.state.width - 300}/>
            </div>
        )
    }

}