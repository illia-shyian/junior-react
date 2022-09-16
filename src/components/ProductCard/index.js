import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getCurrentCurrency } from "../../helpers";
import { actionCartAdd } from "../../reducers";
import { CartAddIcon } from "../CartAddIcon";

export class ProductCard extends Component {
    state = {
        isHover: false,
        currency: false,
    };

    setIsHover = (value) => this.setState({ isHover: value });

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
            product = null,
            addToCart = null,
            history = {},
        } = this.props || {};

        return (
            <div
                className="ProductCard"
                onMouseEnter={() => this.setIsHover(true)}
                onMouseLeave={() => this.setIsHover(false)}
                onClick={() => history.push(`/product/${product?.id}`)}
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
                    {
                        product?.prices?.find(
                            (price) =>
                                price?.currency?.label ===
                                this.state.currency?.label
                        )?.amount
                    }
                    {this.state.currency?.symbol}
                </div>
                {!product?.inStock && (
                    <div className="card-out-of-stock-overlay"></div>
                )}
            </div>
        );
    }
}

export const CProductCard = connect(
    (state) => ({ currencies: state?.promise?.currenciesAll?.payload || [] }),
    {
        addToCart: (product) => actionCartAdd(product, 1),
    }
)(withRouter(ProductCard));
