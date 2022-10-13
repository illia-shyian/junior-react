import { Component } from "react";

export class Price extends Component {
    render() {
        const price = this.props.price || 0;
        return (
            <div className="Price">
                {this.props.currency?.symbol}
                {(Math.round(price * 100) / 100).toFixed(2)}
            </div>
        );
    }
}
