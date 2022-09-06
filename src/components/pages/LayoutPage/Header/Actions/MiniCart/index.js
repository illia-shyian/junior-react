import { Component, createRef } from "react";
import { connect } from "react-redux";
import {
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "../../../../../../reducers";
import { MiniCartItemList } from "./MiniCartItemList";

export class MiniCart extends Component {
    getPrice = (product) => {
        const { currency } = this.props || {};
        const price = product?.prices?.find(
            (price) => price?.currency?.label === currency?.label
        );

        return price;
    };
    render() {
        const {
            cart = {},
            isMiniCartOpen = false,
            currency,
        } = this.props || {};

        const total = Object.values(cart).reduce(
            (prev, curr) =>
                +prev + curr.count * this.getPrice(curr.product)?.amount,
            0
        );

        return isMiniCartOpen ? (
            <div className="MiniCart">
                <MiniCartItemList {...this.props} items={Object.values(cart)} />

                <div className="total">
                    <div className="total-text">Total</div>
                    <div className="total-value">
                        {currency?.symbol}
                        {total}
                    </div>
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
        currency: state.currency?.selected || {},
    }),
    {
        openOverlay: actionOpenContentOverlay,
        closeOverlay: actionCloseContentOverlay,
    }
)(MiniCart);
