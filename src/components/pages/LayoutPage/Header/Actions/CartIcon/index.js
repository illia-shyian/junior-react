import { Component } from "react";
import { ReactComponent as CartImage } from "../../../../../../images/cart.svg";
import { CCountBadge } from "./CountBadge";

class CartIcon extends Component {
    render() {
        return (
            <div className="CartIcon">
                <CartImage />
                <CCountBadge />
            </div>
        );
    }
}

export { CartIcon };
