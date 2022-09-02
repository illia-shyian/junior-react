import { Component } from "react";

class MiniCart extends Component {
    render() {
        const { cart = {} } = this.props || {};
        return <div className="MiniCart"></div>;
    }
}
