import { Component } from "react";
import { connect } from "react-redux";
import { Attributes } from "../../Attributes";
import { BuyButton } from "../../BuyButton";
import { Slider } from "../../Slider";
import parse from "html-react-parser";
import { actionCartAdd } from "../../../reducers";
import { getCurrentCurrency } from "../../../helpers";

class ProductPage extends Component {
    state = {
        selectedAttributes: {},
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

    setAttribute = (key, value) =>
        this.setState((state) => ({
            selectedAttributes: { ...state.selectedAttributes, [key]: value },
        }));

    render() {
        const { product = {}, onBuyButtonClick = null } = this.props || {};

        const price = product?.prices?.find(
            (price) => price?.currency?.label === this.state.currency?.label
        );

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
                        <BuyButton
                            onClick={() =>
                                onBuyButtonClick &&
                                onBuyButtonClick({
                                    ...product,
                                    selectedAttributes:
                                        this.state.selectedAttributes,
                                })
                            }
                        />
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
    }),
    { onBuyButtonClick: (product) => actionCartAdd(product, 1) }
)(ProductPage);

export { ProductPage };
