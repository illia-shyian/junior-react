import { Component, createRef } from "react";
import { connect } from "react-redux";
import {
    actionCloseContentOverlay,
    actionOpenContentOverlay,
} from "../../../../../reducers";
import { CCurrency } from "./Currencies";
import { CMiniCart, MiniCart } from "./MiniCart";
import { CartIcon } from "./MiniCart/CartIcon";

class Actions extends Component {
    state = {
        isMiniCartOpen: false,
    };
    miniCartRef = createRef();

    setIsMiniCartOpen = (value) => this.setState({ isMiniCartOpen: value });

    handleOnMiniCartClick = () => {
        const { openOverlay, closeOverlay, cart } = this.props || {};
        if (this.state.isMiniCartOpen) {
            closeOverlay();
            this.setIsMiniCartOpen(false);
        } else {
            Object.entries(cart)?.length && openOverlay();
            this.setIsMiniCartOpen(true);
        }
    };

    handleOnMiniCartClose = (e) => {
        const { closeOverlay } = this.props || {};

        closeOverlay();
        this.setIsMiniCartOpen(false);
    };

    checkClickOutsideMiniCart = (e) => {
        if (
            this.miniCartRef?.current &&
            !this.miniCartRef?.current?.contains(e.target)
        ) {
            this.handleOnMiniCartClose();
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.checkClickOutsideMiniCart);
    }

    componentWillUnmount() {
        document.removeEventListener(
            "mousedown",
            this.checkClickOutsideMiniCart
        );
    }

    render() {
        return (
            <div className="Actions">
                <div className="action-set">
                    <div className="action-item">
                        <CCurrency />
                    </div>
                    <div className="action-item" ref={this.miniCartRef}>
                        <CartIcon onClick={this.handleOnMiniCartClick} />
                        <CMiniCart isMiniCartOpen={this.state.isMiniCartOpen} />
                    </div>
                </div>
            </div>
        );
    }
}

export const CActions = connect(
    (state) => ({
        currencies: state?.promise?.currenciesAll?.payload || [],
        cart: state.cart || {},
    }),
    {
        openOverlay: actionOpenContentOverlay,
        closeOverlay: actionCloseContentOverlay,
    }
)(Actions);

export { Actions };
