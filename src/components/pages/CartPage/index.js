import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentCurrency, getPrice } from "../../../helpers";
import { actionCartClear } from "../../../reducers";
import { Button } from "../../Button";
import { CartItemList } from "../../CartItemList";
import { Price } from "../../Price";

class CartPage extends Component {
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
        const { cart = {}, onCartClear = null } = this.props || {};

        const total = Object.values(cart).reduce(
            (prev, curr) =>
                +prev +
                curr.count *
                    getPrice(this.state.currency?.label, curr.product)?.amount,
            0
        );

        const tax = (+Math.round(total * 100) / 100 / 100) * 21;
        const quantity = Object.values(cart)?.reduce(
            (prev, cartProduct) => prev + cartProduct.count,
            0
        );

        return Object.values(cart)?.length ? (
            <div className="CartPage">
                <div className="header">
                    <div className="title">Cart</div>
                    <div className="cart-clear" onClick={onCartClear}>
                        CLEAR CART
                    </div>
                </div>

                <CartItemList
                    items={Object.values(cart) || []}
                    displayCarousel={true}
                />
                <table className="cost">
                    <tr className="tax">
                        <td>Tax 21%:</td>
                        <td className="value">
                            <Price currency={this.state.currency} price={tax} />
                        </td>
                    </tr>
                    <tr className="quantity">
                        <td>Quantity :</td>
                        <td className="value">{quantity}</td>
                    </tr>
                    <tr className="total">
                        <td>Total : </td>
                        <td className="value">
                            <Price
                                currency={this.state.currency}
                                price={total}
                            />
                        </td>
                    </tr>
                </table>
                <Button>ORDER</Button>
            </div>
        ) : (
            <Redirect to="/" />
        );
    }
}

export const CCartPage = connect(
    (state) => ({
        cart: state.cart || {},
        currencies: state?.promise?.currenciesAll?.payload || [],
    }),
    { onCartClear: actionCartClear }
)(CartPage);

export { CartPage };
