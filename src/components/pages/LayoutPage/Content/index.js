import { Component } from "react";

class Content extends Component {
    render() {
        const { children } = this.props || {};
        return <div className="Content"> {children}</div>;
    }
}

export { Content };
