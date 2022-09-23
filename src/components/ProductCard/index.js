import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getPrice } from "../../helpers";
import { actionCartAdd } from "../../reducers";
import { CartAddIcon } from "../CartAddIcon";

export class ProductCard extends Component {
    state = {
        isHover: false,
    };

    setIsHover = (value) => this.setState({ isHover: value });

    render() {
        const {
            product = null,
            addToCart = null,
            history = {},
            location = {},
            currency,
        } = this.props || {};

        const price = getPrice(currency?.label, product);

        return (
            <div
                className="ProductCard"
                onMouseEnter={() => this.setIsHover(true)}
                onMouseLeave={() => this.setIsHover(false)}
                onClick={() =>
                    history.push(`/product/${product?.id}` + location.search)
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
                                onClick={(e) => {
                                    addToCart && addToCart(product);
                                    e.stopPropagation();
                                }}
                            />
                        )
                    ) : null}
                </div>
                <div className="card-title">{product?.name}</div>
                <div className="card-price">
                    {price?.amount}
                    {currency?.symbol}
                </div>
                {!product?.inStock && (
                    <div className="card-out-of-stock-overlay"></div>
                )}
            </div>
        );
    }
}

export const CProductCardWithRouter = connect(
    (state) => ({
        currencies: state?.promise?.currenciesAll?.payload || [],
        currency: state?.currency?.selectedCurrency,
    }),
    {
        addToCart: (product) => actionCartAdd(product, 1),
    }
)(withRouter(ProductCard));
