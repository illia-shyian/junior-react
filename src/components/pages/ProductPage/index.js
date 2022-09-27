import { Component } from "react";
import { connect } from "react-redux";
import { Attributes } from "../../Attributes";
import { Slider } from "../../Slider";
import parse from "html-react-parser";
import { actionCartAdd, actionPromiseClear } from "../../../reducers";
import { getPrice } from "../../../helpers";
import { Button } from "../../Button";

class ProductPage extends Component {
    state = {
        selectedAttributes: {},
    };

    setAttribute = (key, value) =>
        this.setState((state) => ({
            selectedAttributes: { ...state.selectedAttributes, [key]: value },
        }));

    clearSelectedAttributes = () => this.setState({ selectedAttributes: {} });

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (
                prevProps?.product?.attributes !==
                this.props?.product.attributes
            ) {
                this.clearSelectedAttributes();
            }
        }
    }

    componentWillUnmount() {
        const onUnmount = this.props.onUnmount || null;
        onUnmount && onUnmount();
    }

    render() {
        const {
            product = {},
            onBuyButtonClick = null,
            currency,
        } = this.props || {};

        const price = getPrice(currency?.label, product);

        return (
            <div className="ProductPage">
                <Slider images={product?.gallery} />
                <div className="description">
                    <div className="product-name">{product?.brand}</div>
                    <div className="product-type">{product?.name}</div>
                    <Attributes
                        attributes={product?.attributes || []}
                        setAttribute={this.setAttribute}
                        selectedAttributes={this.state.selectedAttributes}
                    />
                    <div className="product-price">
                        Price:
                        <div className="price-value">
                            {price?.amount}
                            {price?.currency?.symbol}
                        </div>
                    </div>
                    {product?.inStock && (
                        <Button
                            onClick={() =>
                                onBuyButtonClick &&
                                onBuyButtonClick({
                                    ...product,
                                    selectedAttributes:
                                        this.state.selectedAttributes,
                                })
                            }
                        >
                            Add To Cart
                        </Button>
                    )}
                    <div className="product-description">
                        {parse(product?.description || "")}
                    </div>
                </div>
            </div>
        );
    }
}

export const CProductPage = connect(
    (state) => ({
        product: state.promise?.productById?.payload || {},
        currencies: state.promise?.currenciesAll?.payload || null,
        currency: state?.currency?.selectedCurrency,
    }),
    {
        onBuyButtonClick: (product) => actionCartAdd(product, 1),
        onUnmount: () => actionPromiseClear("productById"),
    }
)(ProductPage);

export { ProductPage };
