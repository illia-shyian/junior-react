import { Component } from "react";

export class Overlay extends Component {
    render() {
        const { open = false } = this.props || {};
        return open ? <div className="Overlay"></div> : "";
    }
}
