import { Component } from "react";
import { CProductCard } from "../../../ProductCard";

class ProductList extends Component {
    render() {
        const { products = {} } = this.props || {};
        return (
            <div className="ProductList">
                {(products || []).map((product) => (
                    <CProductCard product={product} key={product?.id} />
                ))}
            </div>
        );
    }
}

export { ProductList };
