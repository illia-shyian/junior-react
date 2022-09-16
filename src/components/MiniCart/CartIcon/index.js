import { Component } from "react";
import { ReactComponent as CartImage } from "../../../images/cart.svg";
import { CCountBadge } from "./CountBadge";

class CartIcon extends Component {
    render() {
        const { onClick } = this.props || {};
        return (
            <div className="CartIcon" onClick={onClick}>
                <CartImage />
                <CCountBadge />
            </div>
        );
    }
}

export { CartIcon };
