import { Component } from "react";
import { connect } from "react-redux";

export class CountBadge extends Component {
    render() {
        const { cart = {} } = this.props || {};
        const count = Object.values(cart)?.reduce(
            (prev, cartProduct) => prev + cartProduct.count,
            0
        );

        console.log(count);
        return count ? <div className="CountBadge">{count}</div> : null;
    }
}

export const CCountBadge = connect((state) => ({ cart: state?.cart || {} }))(
    CountBadge
);
