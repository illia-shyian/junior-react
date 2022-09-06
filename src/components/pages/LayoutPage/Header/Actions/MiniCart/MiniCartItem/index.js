import { Component } from "react";
import { Attributes } from "../../../../../../Attributes";
import { Counter } from "./Counter";

export class MiniCartItem extends Component {
    render() {
        const {
            item: { product = {}, counter = 1, currency = null },
        } = this.props || {};
        return (
            <div className="MiniCartItem">
                <div className="description">
                    <div className="product-name">{product?.brand}</div>
                    <div className="product-type">{product?.name}</div>
                    <Attributes
                        selectedAttributes={product?.selectedAttributes || {}}
                        attributes={product?.attributes || []}
                    />
                    <div className="product-price">
                        Price:
                        <div className="price-value">
                            {product?.price?.amount}
                            {product?.currency?.symbol}
                        </div>
                    </div>
                </div>

                <Counter />
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
