import { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { actionCategoryByName } from "../../../actions/actionCategoryByName";
import { actionPageStart } from "../../../actions/actionPageStart";
import { CartPage } from "../CartPage";
import { CCategoryPage } from "../CategoryPage";
import { ProductPage } from "../ProductPage";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

// class CategoryPageContainer extends Component {
//     fetchCategory = () => {
//         const { onLoad = null, match: { params: { name = "" } = {} } = {} } =
//             this.props || {};
//         onLoad && onLoad(name);
//     };

//     componentDidMount() {
//         console.log("mount");
//         this.fetchCategory();
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.match?.params?.name !== prevProps?.match?.params?.name) {
//             console.log("update");
//             this.fetchCategory();
//         }
//     }

//     render() {
//         return <CCategoryPage />;
//     }
// }

const CategoryPageContainer = ({
    match: {
        params: { name },
    },
    onLoad,
}) => {
    useEffect(() => {
        console.log(name);
        onLoad && onLoad(name);
    }, [name]);

    return <CCategoryPage />;
};

const Test = ({
    match: {
        params: { text },
    },
}) => {
    useEffect(() => {
        console.log(text);
    });
    return <div>{text}</div>;
};

const CCategoryPageContainer = connect(null, {
    onLoad: (name) => actionCategoryByName({ name }),
})(CategoryPageContainer);

class ProductPageContainer extends Component {
    render() {
        const { match = {} } = this.props || {};
        return <ProductPage product={{ name: match?.params?.name || null }} />;
    }
}

class LayoutPage extends Component {
    componentDidMount() {
        const { onLoad } = this.props;
        onLoad && onLoad();
    }
    render() {
        return (
            <div className="LayoutPage">
                <Header />
                <Content>
                    <Switch>
                        <Route
                            path="/category/:name"
                            component={CCategoryPageContainer}
                            exact
                        />
                        <Route
                            path="/product/:name"
                            component={ProductPageContainer}
                        />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/test/:text" component={Test} />
                    </Switch>
                </Content>
                <Footer />
            </div>
        );
    }
}

export const CLayoutPage = connect(null, { onLoad: actionPageStart })(
    LayoutPage
);

export { LayoutPage };
