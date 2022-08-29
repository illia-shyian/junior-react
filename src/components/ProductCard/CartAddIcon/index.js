import { Component } from "react";
import { ReactComponent as CartAddImage } from "../../../images/cart_add.svg";

class CartAddIcon extends Component {
    render() {
        const { isActive, onClick } = this.props || {};
        return (
            <div className={`CartAddIcon ${isActive ? "active" : ""}`}>
                <CartAddImage onClick={onClick} />
            </div>
        );
    }
}

export { CartAddIcon };
