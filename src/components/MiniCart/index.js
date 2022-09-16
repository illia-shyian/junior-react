import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentCurrency, getPrice } from "../../helpers";
import {
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "../../reducers";
import { CartItemList } from "../CartItemList";

export class MiniCart extends Component {
    state = {
        currency: null,
    };
    updateCurrency = () => {
        this.props.currencies?.length &&
            this.setState({ currency: getCurrentCurrency() });
    };

    componentDidMount() {
        this.updateCurrency();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.updateCurrency();
        }
    }

    render() {
        const { cart = {}, isMiniCartOpen = false, onClose } = this.props || {};

        const total = Object.values(cart).reduce(
            (prev, curr) =>
                +prev +
                curr.count *
                    getPrice(this.state.currency?.label, curr.product)?.amount,
            0
        );

        return isMiniCartOpen ? (
            <div className="MiniCart">
                <CartItemList {...this.props} items={Object.values(cart)} />

                <div className="total">
                    <div className="total-text">Total</div>
                    <div className="total-value">
                        {this.state.currency?.symbol}
                        {Math.round(total * 100) / 100}
                    </div>
                </div>
                <div className="buttons">
                    <Link
                        to="/cart"
                        className="Link button viewbag"
                        onClick={onClose}
                    >
                        VIEW BAG
                    </Link>
                    <div className="button checkout">CHECK OUT</div>
                </div>
            </div>
        ) : (
            ""
        );
    }
}

export const CMiniCart = connect(
    (state) => ({
        cart: state?.cart || {},
        currencies: state?.promise?.currenciesAll?.payload || [],
    }),
    {
        openOverlay: actionOpenContentOverlay,
        closeOverlay: actionCloseContentOverlay,
    }
)(MiniCart);
