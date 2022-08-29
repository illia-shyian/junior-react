import { Component } from "react";

class ProductPage extends Component {
    render() {
        const { product = {} } = this.props || {};
        return <div className="ProductPage">{product.name || ""}</div>;
    }
}

export { ProductPage };
