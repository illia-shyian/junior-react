import { Component } from "react";
import { connect } from "react-redux";
import { getCurrentCurrency, getPrice } from "../../../helpers";
import { actionCartChange } from "../../../reducers";
import { Attributes } from "../../Attributes";
import { Counter } from "./Counter";

export class CartItem extends Component {
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
        const {
            onCountChange,
            item: { product = {}, count = 1 },
        } = this.props || {};

        const price = getPrice(this.state.currency?.label, product);
        console.log(product);
        return (
            <div className="CartItem">
                <div className="description">
                    <div className="product-name">{product?.brand}</div>
                    <div className="product-type">{product?.name}</div>
                    <div className="product-price">
                        {this.state.currency?.symbol}
                        {price?.amount}
                    </div>
                    <Attributes
                        selectedAttributes={product?.selectedAttributes || {}}
                        attributes={product?.attributes || []}
                    />
                </div>
                <div className="product-image-counter">
                    <Counter
                        count={count}
                        onPlusClick={() =>
                            onCountChange && onCountChange(product, count + 1)
                        }
                        onMinusClick={() =>
                            onCountChange && onCountChange(product, count - 1)
                        }
                    />
                    <div className="product-image">
                        <img
                            src={
                                (product?.gallery?.length &&
                                    product?.gallery[0]) ||
                                ""
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export const CCartitem = connect(
    (state) => ({ currencies: state?.promise?.currenciesAll?.payload || [] }),
    {
        onCountChange: (product, count) => actionCartChange(product, count),
    }
)(CartItem);
