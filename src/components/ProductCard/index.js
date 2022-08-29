import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { actionCartAdd } from "../../reducers";
import { CartAddIcon } from "./CartAddIcon";

export class ProductCard extends Component {
    state = {
        isHover: false,
    };

    setIsHover = (value) => this.setState({ isHover: value });
    render() {
        const {
            product = null,
            currency = null,
            addToCart = null,
            history = {},
        } = this.props || {};
        return (
            <div
                className="ProductCard"
                onMouseEnter={() => this.setIsHover(true)}
                onMouseLeave={() => this.setIsHover(false)}
                onClick={() =>
                    product?.inStock && history.push(`/product/${product?.id}`)
                }
            >
                <div className="card-img">
                    {<img src={product?.gallery[0]} />}
                    {!product?.inStock && (
                        <div className="card-out-of-stock-text">
                            <span>OUT OF STOCK</span>
                        </div>
                    )}
                    {product?.inStock ? (
                        product?.attributes?.length ? (
                            <Link to={`/product/${product?.id}`}>
                                <CartAddIcon isActive={this.state.isHover} />
                            </Link>
                        ) : (
                            <CartAddIcon
                                isActive={this.state.isHover}
                                onClick={() => addToCart && addToCart(product)}
                            />
                        )
                    ) : null}
                </div>
                <div className="card-title">{product?.name}</div>
                <div className="card-price">
                    {
                        product?.prices?.find(
                            (price) =>
                                price?.currency?.label === currency?.label
                        )?.amount
                    }
                    {currency?.symbol}
                </div>
                {!product?.inStock && (
                    <div className="card-out-of-stock-overlay"></div>
                )}
            </div>
        );
    }
}

export const CProductCard = connect(
    (state) => ({
        currency: state?.currency?.selected || null,
    }),
    {
        addToCart: (product) => actionCartAdd(product, 1),
    }
)(withRouter(ProductCard));
