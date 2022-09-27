import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LinkWithQuery extends Component {
    render() {
        //deconstrancted staticContext from props to remove react warning about passing staticContext to dom-element(<a>)
        const {
            children,
            to = "",
            location: { search = "" } = {},
            className = "",
            staticContext = null,
            ...props
        } = this.props || {};

        return (
            <Link
                to={to + search}
                className={"Link " + className || ""}
                {...props}
            >
                {children}
            </Link>
        );
    }
}

const CLinkWithQuery = withRouter(LinkWithQuery);
export { CLinkWithQuery as LinkWithQuery };
