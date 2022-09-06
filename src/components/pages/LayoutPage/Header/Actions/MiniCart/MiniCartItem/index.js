import { Component } from "react";
import { connect } from "react-redux";
import { actionCartChange } from "../../../../../../../reducers";
import { Attributes } from "../../../../../../Attributes";
import { Counter } from "./Counter";

export class MiniCartItem extends Component {
    render() {
        const {
            onCountChange,
            item: { product = {}, count = 1 },
            currency = null,
        } = this.props || {};

        const price = product?.prices?.find(
            (price) => price?.currency?.label === currency?.label
        );

        return (
            <div className="MiniCartItem">
                <div className="description">
                    <div className="product-name">{product?.brand}</div>
                    <div className="product-type">{product?.name}</div>
                    <div className="product-price">
                        {currency?.symbol}
                        {price?.amount}
                    </div>
                    <Attributes
                        selectedAttributes={product?.selectedAttributes || {}}
                        attributes={product?.attributes || []}
                    />
                </div>

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
                            (product?.gallery?.length && product?.gallery[0]) ||
                            ""
                        }
                    />
                </div>
            </div>
        );
    }
}

export const CMiniCartitem = connect(
    (state) => ({
        currency: state.currency?.selected || null,
    }),
    {
        onCountChange: (product, count) => actionCartChange(product, count),
    }
)(MiniCartItem);
