import { Component } from "react";
import { connect } from "react-redux";
import { LinkWithQuery } from "../../../LinkWithQuery";

class Categories extends Component {
    render() {
        const { categories = [], currCategory = {} } = this.props || {};
        return (
            <div className="Categories">
                <div className="category-set">
                    {(categories || []).map((cat) => (
                        <LinkWithQuery
                            className={`category-item${
                                cat.name === currCategory?.name
                                    ? "selected"
                                    : ""
                            }`}
                            key={cat?.name}
                            to={`/category/${cat?.name}`}
                        >
                            {cat?.name}
                        </LinkWithQuery>
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
