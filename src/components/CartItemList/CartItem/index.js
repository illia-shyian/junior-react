import { Component } from "react";
import { connect } from "react-redux";
import { getPrice } from "../../../helpers";
import { actionCartChange } from "../../../reducers";
import { Attributes } from "../../Attributes";
import { CarouselHorizontal, CarouselItem } from "../../Carousel";
import { LinkWithQuery } from "../../LinkWithQuery";
import { Counter } from "./Counter";

export class CartItem extends Component {
    render() {
        const {
            onCountChange,
            currency,
            item: { product = {}, count = 1 } = {},
        } = this.props || {};
        const displayCarousel = this.props.displayCarousel || false;
        const price = getPrice(currency?.label, product);

        return (
            <div className="CartItem">
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
                <div className="product-image-counter">
                    <Counter
                        count={count}
                        onPlusClick={() =>
                            onCountChange && onCountChange(product, count + 1)
                        }
                        onMinusClick={() =>
                            onCountChange && onCountChange(product, count - 1)
                        }
                        miniControls={this.props.miniControls || false}
                    />
                    <div className="product-image">
                        {product?.gallery?.length > 1 && displayCarousel ? (
                            <CarouselHorizontal items={1}>
                                {(product?.gallery || [])?.map((image) => (
                                    <CarouselItem key={image}>
                                        <LinkWithQuery
                                            to={`/product/${product?.id}`}
                                        >
                                            <img src={image} />
                                        </LinkWithQuery>
                                    </CarouselItem>
                                ))}
                            </CarouselHorizontal>
                        ) : (
                            <LinkWithQuery to={`/product/${product?.id}`}>
                                <img
                                    src={
                                        product?.gallery && product?.gallery[0]
                                    }
                                />
                            </LinkWithQuery>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export const CCartitem = connect(
    (state) => ({ currency: state?.currency?.selectedCurrency }),
    {
        onCountChange: (product, count) => actionCartChange(product, count),
    }
)(CartItem);
