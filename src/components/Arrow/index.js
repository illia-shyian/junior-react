import { Component } from "react";

export class Arrow extends Component {
    render() {
        return (
            <i className={`Arrow ${this.props.className}`}>
                <span></span>
                <span></span>
            </i>
        );
    }
}
