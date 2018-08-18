import * as React from "react"
import { BoxesSection } from "../BoxesSection/BoxesSection";
import { Graph } from "../Graph/Graph"

export class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div style = {{height: '100%', width: '100%'}}>
                <BoxesSection />
                <Graph />
            </div>
        )
    }

}