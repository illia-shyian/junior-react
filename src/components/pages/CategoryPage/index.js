import { Component } from "react";
import { connect } from "react-redux";
import { ProductList } from "./ProductList";

class CategoryPage extends Component {
    render() {
        const { category = {} } = this.props || {};
        return (
            <div className="CategoryPage">
                <div className="title">{category?.name}</div>
                <ProductList products={category?.products || []} />
            </div>
        );
    }
}

export const CCategoryPage = connect((state) => ({
    category: state.promise?.categoryByName?.payload || {},
}))(CategoryPage);

export { CategoryPage };
