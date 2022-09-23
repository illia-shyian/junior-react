import { Component } from "react";
import { CProductCardWithRouter } from "../../../ProductCard";

class ProductList extends Component {
    render() {
        const { products = {} } = this.props || {};
        return (
            <div className="ProductList">
                {(products || []).map((product) => (
                    <CProductCardWithRouter
                        product={product}
                        key={product?.id}
                    />
                ))}
            </div>
        );
    }
}

export { ProductList };
