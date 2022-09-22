import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentCurrency, getPrice } from "../../../helpers";
import { CartItemList } from "../../CartItemList";

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
        const { cart = {}, location = {} } = this.props || {};

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
                <div className="title">Cart</div>
                <CartItemList
                    items={Object.values(cart) || []}
                    displayCarousel={true}
                />
                <div className="cost">
                    <div className="tax">
                        Tax 21%:{" "}
                        <span className="value">
                            <b>
                                {this.state.currency?.symbol}
                                {Math.round(tax * 100) / 100}
                            </b>
                        </span>
                    </div>
                    <div className="quantity">
                        Quantity :{" "}
                        <span className="value">
                            <b>{quantity}</b>
                        </span>
                    </div>
                    <div className="total">
                        Total :{" "}
                        <span className="value">
                            <b>
                                {this.state.currency?.symbol}
                                {Math.round(total * 100) / 100}
                            </b>
                        </span>
                    </div>
                    <div className="orderButton">ORDER</div>
                </div>
            </div>
        ) : (
            <Redirect to="/" />
        );
    }
}

export const CCartPage = connect((state) => ({
    cart: state.cart || {},
    currencies: state?.promise?.currenciesAll?.payload || [],
}))(CartPage);

export { CartPage };
