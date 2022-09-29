import { Component } from "react";
import { connect } from "react-redux";
import { LinkWithQuery } from "../../../LinkWithQuery";

class Categories extends Component {
    render() {
        const { categories = [], currentCategory = {} } = this.props || {};

        return (
            <div className="Categories">
                <div className="category-set">
                    {(categories || []).map((cat) => (
                        <LinkWithQuery
                            className={`category-item ${
                                cat.name === currentCategory?.name
                                    ? "selected"
                                    : ""
                            }`}
                            key={cat?.name}
                            to={`/category/${cat?.name}`}
                        >
                            <div className="category-name">{cat?.name}</div>
                        </LinkWithQuery>
                    ))}
                </div>
            </div>
        );
    }
}

export const CCategories = connect((state) => ({
    categories: state?.promise?.categoriesAll?.payload || [],
    currentCategory: state?.promise?.categoryByName?.payload || "",
}))(Categories);

export { Categories };
