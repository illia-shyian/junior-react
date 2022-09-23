import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { actionCategoryByName } from "../../actions/actionCategoryByName";
import { actionPageStart } from "../../actions/actionPageStart";
import { actionProductById } from "../../actions/actionProductById";
import { CCartPage } from "../pages/CartPage";
import { CCategoryPage } from "../pages/CategoryPage";
import { CProductPage } from "../pages/ProductPage";
import { ScrollToTopWithRouter } from "../ScrollToTop";
import { CContent } from "./Content";
import { Header } from "./Header";

class CategoryPageContainer extends Component {
    fetchCategory = () => {
        const { onLoad = null, match: { params: { name = "" } = {} } = {} } =
            this.props || {};
        onLoad && onLoad(name);
    };
    componentDidMount() {
        this.fetchCategory();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match?.params?.name !== prevProps?.match?.params?.name) {
            this.fetchCategory();
        }
    }

    render() {
        return <CCategoryPage />;
    }
}

const CCategoryPageContainer = connect(null, {
    onLoad: (name) => actionCategoryByName({ name }),
})(CategoryPageContainer);

class ProductPageContainer extends Component {
    fetchProduct = () => {
        const { onLoad = null, match: { params: { id = "" } = {} } = {} } =
            this.props || {};
        onLoad && onLoad(id);
    };

    componentDidMount() {
        this.fetchProduct();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match?.params?.id !== prevProps?.match?.params?.id) {
            this.fetchProduct();
        }
    }

    render() {
        return <CProductPage />;
    }
}

const CProductPageContainer = connect(null, {
    onLoad: (id) => actionProductById({ id }),
})(ProductPageContainer);

class LayoutPage extends Component {
    componentDidMount() {
        const { onLoad } = this.props;
        onLoad && onLoad();
    }

    render() {
        const { categories = [] } = this.props || {};
        return (
            <div className="LayoutPage">
                <ScrollToTopWithRouter />
                <Header />
                <CContent>
                    <Switch>
                        <Route path="/" exact>
                            {categories?.length ? (
                                <Redirect
                                    to={`/category/${categories[0].name}`}
                                />
                            ) : (
                                ""
                            )}
                        </Route>
                        <Route
                            path="/category/:name"
                            component={CCategoryPageContainer}
                            exact
                        />
                        <Route
                            path="/category/:name"
                            component={CCategoryPageContainer}
                            exact
                        />
                        <Route
                            path="/product/:id"
                            component={CProductPageContainer}
                        />
                        <Route path="/cart" component={CCartPage} />
                    </Switch>
                </CContent>
            </div>
        );
    }
}

export const CLayoutPage = connect(
    (state) => ({ categories: state?.promise?.categoriesAll?.payload || [] }),
    {
        onLoad: actionPageStart,
    }
)(withRouter(LayoutPage));

export { LayoutPage };
