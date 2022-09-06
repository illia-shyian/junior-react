import { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { actionCategoryByName } from "../../../actions/actionCategoryByName";
import { actionPageStart } from "../../../actions/actionPageStart";
import { actionProductById } from "../../../actions/actionProductById";
import { CartPage } from "../CartPage";
import { CCategoryPage } from "../CategoryPage";
import { CProductPage, ProductPage } from "../ProductPage";
import { CContent, Content } from "./Content";
import { Footer } from "./Footer";
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
        return (
            <div className="LayoutPage">
                <Header />
                <CContent>
                    <Switch>
                        <Route
                            path="/category/:name"
                            component={CCategoryPageContainer}
                            exact
                        />
                        <Route
                            path="/product/:id"
                            component={CProductPageContainer}
                        />
                        <Route path="/cart" component={CartPage} />
                    </Switch>
                </CContent>
                <Footer />
            </div>
        );
    }
}

export const CLayoutPage = connect(null, { onLoad: actionPageStart })(
    LayoutPage
);

export { LayoutPage };
