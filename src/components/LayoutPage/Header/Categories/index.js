import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Categories extends Component {
    render() {
        const { categories = [], currCategory = {} } = this.props || {};
        return (
            <div className="Categories">
                <div className="category-set">
                    {(categories || []).map((cat) => (
                        <Link
                            className={`category-item Link ${
                                cat.name === currCategory?.name
                                    ? "selected"
                                    : ""
                            }`}
                            key={cat?.name}
                            to={`/category/${cat?.name}`}
                        >
                            {cat?.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export const CCategories = connect((state) => ({
    categories: state?.promise?.categoriesAll?.payload || [],
}))(Categories);

export { Categories };
