import { Component } from "react";

export class BuyButton extends Component {
    render() {
        const { onClick = null } = this.props || {};
        return (
            <div className="BuyButton" onClick={onClick}>
                Add To Cart
            </div>
        );
    }
}
