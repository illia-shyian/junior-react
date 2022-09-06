import { Component, createRef } from "react";
import { connect } from "react-redux";
import {
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "../../../../../../reducers";
import { MiniCartItemList } from "./MiniCartItemList";

export class MiniCart extends Component {
    componentWillUnmount() {
        document.removeEventListener(
            "mousedown",
            this.checkClickOutsideMiniCartItemList
        );
    }

    render() {
        const { cart = {}, isMiniCartOpen = false } = this.props || {};

        return (
            <div className="MiniCart">
                {isMiniCartOpen ? (
                    <MiniCartItemList
                        {...this.props}
                        items={Object.values(cart)}
                    />
                ) : (
                    ""
                )}
            </div>
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
