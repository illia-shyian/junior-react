import { Component } from "react";
import { connect } from "react-redux";
import { getCurrentCurrency, getPrice } from "../../helpers";
import {
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "../../reducers";
import { CartItemList } from "../CartItemList";
import { LinkWithQuery } from "../LinkWithQuery";
import { Price } from "../Price";

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

        const count = Object.values(cart)?.reduce(
            (prev, cartProduct) => prev + cartProduct.count,
            0
        );

        return isMiniCartOpen ? (
            <div className="MiniCart">
                <div className="header">
                    <b>My Bag,</b> {count} {count > 1 ? "items" : "item"}
                </div>
                <CartItemList
                    {...this.props}
                    items={Object.values(cart)}
                    miniControls={true}
                />

                <div className="total">
                    <div className="total-text">Total</div>
                    <div className="total-value">
                        <Price currency={this.state.currency} price={total} />
                    </div>
                </div>
                <div className="buttons">
                    <LinkWithQuery
                        to="/cart"
                        className="button viewbag"
                        onClick={onClose}
                    >
                        VIEW BAG
                    </LinkWithQuery>
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
