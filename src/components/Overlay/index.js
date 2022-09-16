import { Component } from "react";

export class Overlay extends Component {
    componentDidMount() {
        const { open = false } = this.props || {};
        if (open) {
            document.body.style.overflow = "hidden";
        }
    }

    componentDidUpdate() {
        const { open = false } = this.props || {};
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }
    componentWillUnmount() {
        document.body.style.overflow = "unset";
    }
    render() {
        const { open = false } = this.props || {};
        return open ? <div className="Overlay"></div> : "";
    }
}
