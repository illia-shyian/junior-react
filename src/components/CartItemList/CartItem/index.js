import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentCurrency, getPrice } from "../../../helpers";
import { actionCartChange } from "../../../reducers";
import { Attributes } from "../../Attributes";
import {
    CarouselHorizontal,
    CarouselItem,
    CarouselVertical,
} from "../../Carousel";
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
        const { onCountChange, item: { product = {}, count = 1 } = {} } =
            this.props || {};
        const displayCarousel = this.props.displayCarousel || false;
        const price = getPrice(this.state.currency?.label, product);

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
                        {product?.gallery?.length > 1 && displayCarousel ? (
                            <CarouselHorizontal items={1}>
                                {(product?.gallery || [])?.map((image) => (
                                    <CarouselItem key={image}>
                                        <Link to={`/product/${product?.id}`}>
                                            <img src={image} />
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselHorizontal>
                        ) : (
                            <Link to={`/product/${product?.id}`}>
                                <img
                                    src={
                                        product?.gallery && product?.gallery[0]
                                    }
                                />
                            </Link>
                        )}
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
