import * as React from "react"
import { relative } from "path";
import { MButton } from "./MButtonStyles.css";
import { DropDownElement } from "./DropDown/DropDownElement";

export interface MenuButtonProps {
    height: number
}

export interface MenubuttonState {
    selected: boolean;
}

export class MenuButton extends React.Component<MenuButtonProps, MenubuttonState> {

    state: MenubuttonState;

    constructor(props: MenuButtonProps) {
        super(props);

        this.state = {
            selected: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e: React.MouseEvent<HTMLDivElement>) {        
        this.setState((state) => {
            return {selected: !state.selected}
        })
    }

    render() {
        return (
        <div className = {MButton} onClick = {this.onClick} style = {{
            height: this.props.height,
            width: this.props.height
        }}> 
            <DropDownElement color = "rgb(250, 157, 157)" content = "matrix" visible = {this.state.selected} />
            <DropDownElement color = "rgb(179, 249, 181)" content = "vector" visible = {this.state.selected} />
        </div>)
    }

}